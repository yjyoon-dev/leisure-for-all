import React, { useState, useEffect, useCallback } from "react";
import firebase from "firebase";
import "firebase/firestore";
import firebaseConfig from "../firebaseConfig";
import { Input, Select, Button } from "antd";
import "./Review.scss";

const { Option } = Select;
const { TextArea } = Input;

const db = firebase.firestore();

const typeMap = {
  blind: "시각장애인",
  hear: "청각장애인",
  physic: "지체장애인",
  old: "노약자",
  wheel: "휠체어",
  prag: "임산부",
  baby: "영유아동반",
  etc: "기타",
};

const Review = ({ contentid }) => {
  const [reviews, setReviews] = useState([]);
  const [type, setType] = useState("blind");
  const [name, setName] = useState(null);
  const [text, setText] = useState(null);

  useEffect(() => {
    let data = [];
    const getReviews = async () => {
      const response = await db
        .collection(contentid)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            data.push(doc.data());
          });
        });
      setReviews(data);
    };
    getReviews();
  }, []);

  const typeChangeHandler = (value) => {
    setType(value);
  };

  const nameChangeHandler = useCallback(
    (e) => {
      setName(e.target.value);
    },
    [name]
  );

  const textChangeHandler = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [text]
  );

  const addReview = () => {
    db.collection(`/${contentid}`).add({
      name,
      text,
      type,
    });
    setReviews(reviews.concat({ name, text, type }));
  };

  return (
    <div className="Reviews">
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review, i) => (
            <li key={i}>
              <b>
                {review.name} ({typeMap[review.type]})
              </b>
              <p>{review.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>해당 장소의 리뷰가 아직 없습니다. 직접 작성해보세요!</div>
      )}
      <div className="ReviewForm">
        <p className="ReviewInput">
          <Input
            placeholder="닉네임을 입력해주세요"
            onChange={nameChangeHandler}
            value={name}
          />
          <Select
            defaultValue="blind"
            style={{ width: 120 }}
            onChange={typeChangeHandler}
          >
            <Option value="blind">시각장애인</Option>
            <Option value="hear">청각장애인</Option>
            <Option value="physic">지체장애인</Option>
            <Option value="wheel">휠체어</Option>
            <Option value="old">노약자</Option>
            <Option value="prag">임산부</Option>
            <Option value="baby">영유아동반</Option>
            <Option value="etc">기타</Option>
          </Select>
        </p>
        <TextArea
          rows={4}
          placeholder="내용을 입력해주세요"
          onChange={textChangeHandler}
          value={text}
        />
        <Button type="primary" onClick={addReview}>
          작성
        </Button>
      </div>
    </div>
  );
};

export default Review;
