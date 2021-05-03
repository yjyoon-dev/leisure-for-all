import React, { useState, useEffect } from "react";
import PlaceListItem from "./PlaceListItem";
import axios from "axios";
import "./PlaceList.scss";

const PlaceList = ({ match }) => {
  const { areaCode, contentTypeId } = match.params;
  const [places, setPlaces] = useState(null);
  const [loading, setLoading] = useState(false);
  const apiKey =
    "95NE%2FyrFsX%2B4evKhO86ZvEug2V%2Bx1hy%2BDVWThu0Y%2BW80Nktg%2FioiAULFeZr43Ma96lnLLaKZUOW0r%2Bd2%2FLI1Kg%3D%3D";
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `//api.visitkorea.or.kr/openapi/service/rest/KorWithService/areaBasedList?serviceKey=${apiKey}&numOfRows=50&pageNo=1&listYN=Y&MobileOS=ETC&MobileApp=LeisureForAll&listYN=Y&arrange=B&contentTypeId=${contentTypeId}&areaCode=${areaCode}&_type=json`
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
    return <h3 className="loading">로딩 중 입니다...</h3>;
  }

  return (
    <div className="PlaceList">
      {!places ? (
        <h2 className="loading">데이터가 존재하지 않습니다!</h2>
      ) : (
        places.map((place) =>
          place.firstimage ? (
            <PlaceListItem key={place.contentid} place={place} />
          ) : (
            ""
          )
        )
      )}
    </div>
  );
};

export default PlaceList;
