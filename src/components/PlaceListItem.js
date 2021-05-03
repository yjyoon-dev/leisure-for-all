import React from "react";
import { Route, Link } from "react-router-dom";
import "./PlaceListItem.scss";

const PlaceListItem = ({ place }) => {
  const { addr1, firstimage, title, contentid } = place;
  return (
    <Link className="PlaceListItem" to={`/detail/${contentid}`}>
      <img
        src={
          firstimage !== null
            ? firstimage
            : "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        }
        alt={title}
      />
      <div className="info">
        <h2>{title}</h2>
        <p>{addr1}</p>
      </div>
    </Link>
  );
};

export default PlaceListItem;
