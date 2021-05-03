import React from "react";
import "./ForAllInfo.scss";

const ForAllInfo = ({ info }) => {
  return (
    <div className="ForAllInfo">
      {info.route ? (
        <li>
          <b>대중교통</b> <p>{info.route}</p>
        </li>
      ) : (
        ""
      )}
      {info.publictransport ? (
        <li>
          <b>접근로</b> <p>{info.publictransport}</p>
        </li>
      ) : (
        ""
      )}
      {info.ticketoffice ? (
        <li>
          <b>매표소</b> <p>{info.ticketoffice}</p>
        </li>
      ) : (
        ""
      )}
      {info.promotion ? (
        <li>
          <b>홍보물</b> <p>{info.promotion}</p>
        </li>
      ) : (
        ""
      )}
      {info.wheelchair ? (
        <li>
          <b>휠체어</b> <p>{info.wheelchair}</p>
        </li>
      ) : (
        ""
      )}
      {info.exit ? (
        <li>
          <b>출입통로</b> <p>{info.exit}</p>
        </li>
      ) : (
        ""
      )}
      {info.elevator ? (
        <li>
          <b>엘레베이터</b> <p>{info.elevator}</p>
        </li>
      ) : (
        ""
      )}
      {info.restroom ? (
        <li>
          <b>화장실</b> <p>{info.restroom}</p>
        </li>
      ) : (
        ""
      )}
      {info.auditorium ? (
        <li>
          <b>관람석</b> <p>{info.auditorium}</p>
        </li>
      ) : (
        ""
      )}
      {info.room ? (
        <li>
          <b>객실</b> <p>{info.room}</p>
        </li>
      ) : (
        ""
      )}
      {info.handicapetc ? (
        <li>
          <b>지체장애 기타 상세</b> <p>{info.handicapetc}</p>
        </li>
      ) : (
        ""
      )}
      {info.helpdog ? (
        <li>
          <b>보조견 동반</b> <p>{info.helpdog}</p>
        </li>
      ) : (
        ""
      )}
      {info.braileblock ? (
        <li>
          <b>점자블록</b> <p>{info.braileblock}</p>
        </li>
      ) : (
        ""
      )}
      {info.guidehuman ? (
        <li>
          <b>안내요원</b> <p>{info.guidehuman}</p>
        </li>
      ) : (
        ""
      )}
      {info.audioguide ? (
        <li>
          <b>오디오가이드</b> <p>{info.audioguide}</p>
        </li>
      ) : (
        ""
      )}
      {info.bigprint ? (
        <li>
          <b>큰활자 홍보물</b> <p>{info.bigprint}</p>
        </li>
      ) : (
        ""
      )}
      {info.brailepromotion ? (
        <li>
          <b>점자홍보물 밎 표지판</b> <p>{info.brailepromotion}</p>
        </li>
      ) : (
        ""
      )}
      {info.guidesystem ? (
        <li>
          <b>유도 안내 설비</b> <p>{info.guidesystem}</p>
        </li>
      ) : (
        ""
      )}
      {info.blindhandicapetc ? (
        <li>
          <b>시각장애 기타상세</b> <p> {info.blindhandicapetc}</p>
        </li>
      ) : (
        ""
      )}
      {info.signguide ? (
        <li>
          <b>수화안내</b> <p> {info.signguide}</p>
        </li>
      ) : (
        ""
      )}
      {info.videoguide ? (
        <li>
          <b>자막 비디오가이드 및 영상자막안내</b> <p> {info.videoguide}</p>
        </li>
      ) : (
        ""
      )}
      {info.hearingroom ? (
        <li>
          <b>객실</b> <p> {info.hearingroom}</p>
        </li>
      ) : (
        ""
      )}
      {info.strollerc ? (
        <li>
          <b>유모차</b> <p> {info.stroller}</p>
        </li>
      ) : (
        ""
      )}
      {info.hearinghandicapetc ? (
        <li>
          <b>청각장애 기타상세</b> <p> {info.hearinghandicapetc}</p>
        </li>
      ) : (
        ""
      )}
      {info.lactationroom ? (
        <li>
          <b>수유실</b> <p> {info.lactationroom}</p>
        </li>
      ) : (
        ""
      )}
      {info.babysparechair ? (
        <li>
          <b>유아용보조의자</b> <p> {info.babysparechair}</p>
        </li>
      ) : (
        ""
      )}
      {info.infantsfamilyetc ? (
        <li>
          <b>영유아가족 기타상세</b> <p> {info.infantsfamilyetc}</p>
        </li>
      ) : (
        ""
      )}
    </div>
  );
};

export default ForAllInfo;
