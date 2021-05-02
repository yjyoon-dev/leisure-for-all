import React, { useEffect, useState } from "react";
import PlaceList from "./PlaceList";
import axios from "axios";

const PlaceDetail = ({ match }) => {
  const { contentid } = match.params;
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://api.visitkorea.or.kr/openapi/service/rest/KorWithService/detailWithTour?serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=LeisureForAll&contentId=${contentid}&_type=json`
        );
        setDetail(response.data.response.body.items.item);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [match]);

  return (
    <div>
      {detail && (
        <ul>
          <li>주차여부: {detail.parking}</li>
          <li>대중교통: {detail.route}</li>
          <li>접근로: {detail.publictransport}</li>
          <li>휠체어: {detail.wheelchair}</li>
          <li>출입통로: {detail.exit}</li>
          <li>엘레베이터: {detail.elevator}</li>
          <li>지체장애 기타 상세: {detail.handicapetc}</li>
          <li>점자블록: {detail.braileblock}</li>
          <li>보조견동반: {detail.helpdog}</li>
          <li>안내요원: {detail.guidehuman}</li>
          <li>오디오가이드: {detail.audioguide}</li>
          <li>큰활자 홍보물: {detail.bigprint}</li>
          <li>점자홍보물 및 점자표지판: {detail.brailepromotion}</li>
          <li>유도안내설비: {detail.guidesystem}</li>
        </ul>
      )}
    </div>
  );
};

export default PlaceDetail;
