import React from "react";
import SearchOption from "./SearchOption";
import "./Home.scss";
import { Redirect } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <div className="title">모두의 여가</div>
      <SearchOption />
      <Redirect to="/list/1/12" />
    </div>
  );
};

export default Home;
