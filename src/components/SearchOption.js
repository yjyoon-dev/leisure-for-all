import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchOption.scss";

const SearchOption = () => {
  const [areaCode, setAreaCode] = useState(1);
  const [contentTypeId, setContentTypeId] = useState(12);

  return (
    <div className="SearchOption">
      <input
        value={areaCode}
        onChange={(e) => setAreaCode(e.target.value)}
        placeholder="지역 선택"
      />
      <input
        value={contentTypeId}
        onChange={(e) => setContentTypeId(e.target.value)}
        placeholder="종류 선택"
      />
      <Link to={`/list/${areaCode}/${contentTypeId}`}>
        <button>이동하기</button>
      </Link>
    </div>
  );
};

export default SearchOption;
