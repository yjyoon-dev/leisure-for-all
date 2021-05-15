import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PlaceDetail.scss";
import ForAllInfo from "./ForAllInfo";
import Map from "./Map";
import Review from "./Review";

const PlaceDetail = ({ match }) => {
  const { contentid } = match.params;
  const [detail, setDetail] = useState(null);
  const [forAll, setForAll] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resDetail = await axios.get(
          `http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?ServiceKey=${process.env.REACT_APP_API_KEY}&contentId=${contentid}&defaultYN=Y&firstImageYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&MobileOS=ETC&MobileApp=LeisureForAll&_type=json`
        );
        setDetail(resDetail.data.response.body.items.item);
        const resForAll = await axios.get(
          `http://api.visitkorea.or.kr/openapi/service/rest/KorWithService/detailWithTour?serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=LeisureForAll&contentId=${contentid}&_type=json`
        );
        setForAll(resForAll.data.response.body.items.item);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [match]);

  if (!detail || !forAll) {
    return (
      <p className="PlaceDetail">
        <center>데이터를 로딩 중입니다...</center>
      </p>
    );
  }
  return (
    <div className="PlaceDetail">
      <img src={detail.firstimage} alt={detail.title}></img>
      <div className="info">
        <h2>{detail.title}</h2>
        <h4>
          [{detail.zipcode}] {detail.addr1}
        </h4>
        <div dangerouslySetInnerHTML={{ __html: detail.homepage }} />
        <p>Tel) {detail.tel ? detail.tel : "정보 없음"}</p>
        <hr />
        <span className="subtitle">개요</span>
        <p>
          <div
            dangerouslySetInnerHTML={{
              __html: detail.overview.toString().substring(0, 1000),
            }}
          ></div>
          {detail.overview.toString().length > 1000 ? "...(중략)" : ""}
        </p>
        <hr />
        <span className="subtitle">모두의 정보</span>
        <ul>
          <ForAllInfo info={forAll} />
        </ul>
        <hr />
        <span className="subtitle">주변 지도</span>
        <Map mapx={detail.mapx} mapy={detail.mapy} />
        <hr />
        <span className="subtitle">후기</span>
        <Review />
        <hr />
        <p className="modifiedTime">
          최종 업데이트 일자: {detail.modifiedtime.toString()}
        </p>
      </div>
    </div>
  );
};

export default PlaceDetail;
