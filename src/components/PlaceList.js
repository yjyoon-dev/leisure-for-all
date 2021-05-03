import React, { useState, useEffect } from "react";
import PlaceListItem from "./PlaceListItem";
import axios from "axios";
import "./PlaceList.scss";

const PlaceList = ({ match }) => {
  const { areaCode, contentTypeId } = match.params;
  const [places, setPlaces] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://api.visitkorea.or.kr/openapi/service/rest/KorWithService/areaBasedList?serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=30&pageNo=1&MobileOS=ETC&MobileApp=LeisureForAll&listYN=Y&arrange=B&contentTypeId=${contentTypeId}&areaCode=${areaCode}&_type=json`
        );
        setPlaces(response.data.response.body.items.item);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [areaCode, contentTypeId]);

  if (loading) {
    return <h3>로딩 중 입니다...</h3>;
  }

  return (
    <div className="PlaceList">
      {!places ? (
        <h2>데이터가 존재하지 않습니다!</h2>
      ) : (
        places.map((place) => (
          <PlaceListItem key={place.contentid} place={place} />
        ))
      )}
    </div>
  );
};

export default PlaceList;
