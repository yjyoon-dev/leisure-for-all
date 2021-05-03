import React from "react";
import SearchOption from "./SearchOption";
import "./Home.scss";
import PlaceList from "./PlaceList";

const Home = () => {
  return (
    <div className="Home">
      <div className="title">모두의 여가</div>
      <SearchOption />
    </div>
  );
};

export default Home;
