import React, { useState } from "react";
import { Route, Link } from "react-router-dom";

const Home = () => {
  const [areaCode, setAreaCode] = useState(1);
  const [sigunguCode, setSigunguCode] = useState(1);
  const [contentTypeId, setContentTypeId] = useState(12);

  return (
    <div>
      <input
        value={areaCode}
        onChange={(e) => setAreaCode(e.target.value)}
        placeholder="지역 선택"
      />
      <input
        value={sigunguCode}
        onChange={(e) => setSigunguCode(e.target.value)}
        placeholder="상세 지역 선택"
      />
      <input
        value={contentTypeId}
        onChange={(e) => setContentTypeId(e.target.value)}
        placeholder="여가 종류 선택"
      />
      <Link to={`/list/${areaCode}/${sigunguCode}/${contentTypeId}`}>
        이동하기
      </Link>
    </div>
  );
};

export default Home;
