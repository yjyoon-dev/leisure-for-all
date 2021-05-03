import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./SearchOption.scss";

const Option = styled(NavLink)`
  text-decoration: none;
  white-space: pre;
  color: rgb(235, 235, 235);
  &.active {
    color: white;
    font-weight: bold;
    border-bottom: 2px solid white;
  }
  &:hover {
    color: white;
  }
  & + & {
    margin-left: 1rem;
  }
`;

const SearchOption = () => {
  const [areaCode, setAreaCode] = useState(1);
  const [contentTypeId, setContentTypeId] = useState(12);

  return (
    <div className="SearchOption">
      <Option to={`/list/${areaCode}/12`}>관광지</Option>
      <Option to={`/list/${areaCode}/14`}>문화시설</Option>
      <Option to={`/list/${areaCode}/15`}>축제/공연/행사</Option>
      <Option to={`/list/${areaCode}/25`}>여행코스</Option>
      <Option to={`/list/${areaCode}/28`}>레포츠</Option>
      <Option to={`/list/${areaCode}/32`}>숙박</Option>
      <Option to={`/list/${areaCode}/38`}>쇼핑</Option>
      <Option to={`/list/${areaCode}/39`}>음식점</Option>
    </div>
  );
};

export default SearchOption;
