import React from "react";
import { Route, Link } from "react-router-dom";

const PlaceListItem = ({ place }) => {
  const { addr1, firstimage, title, contentid } = place;
  return (
    <div>
      <img src={firstimage} alt={title} />
      <h3>{title}</h3>
      <p>{addr1}</p>
      <Link to={`/detail/${contentid}`}>자세히 보기</Link>
    </div>
  );
};

export default PlaceListItem;
