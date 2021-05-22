import React from "react";
import { Link } from "react-router-dom";
import "./Title.scss";
import "animate.css";
import About from "./About";

const Title = () => {
  return (
    <div className="Title">
      <div className="img">
        <div className="content">
          <h4
            className="animate__animated animate__fadeInDown"
            style={{ marginBottom: "0px", color: "white", fontWeight: "bold" }}
          >
            노약자와 장애인도 즐기는
          </h4>
          <h1
            className="animate__animated animate__fadeInDown animate__delay-1s"
            style={{ marginTop: "0px", color: "white", fontWeight: "bold" }}
          >
            모두의 여가
          </h1>
          <div class="animate__animated animate__flipInX animate__delay-2s">
            <p className="selectText">지역을 선택해주세요</p>
            <div className="btnList">
              <Link className="placeBtn" to={"/list/1/12"}>
                서울특별시
              </Link>
              <Link className="placeBtn" to={"/list/2/12"}>
                인천광역시
              </Link>
              <Link className="placeBtn" to={"/list/3/12"}>
                대전광역시
              </Link>
              <Link className="placeBtn" to={"/list/4/12"}>
                대구광역시
              </Link>
              <Link className="placeBtn" to={"/list/5/12"}>
                광주광역시
              </Link>
              <Link className="placeBtn" to={"/list/6/12"}>
                부산광역시
              </Link>
              <Link className="placeBtn" to={"/list/7/12"}>
                울산광역시
              </Link>
              <Link className="placeBtn" to={"/list/8/12"}>
                세종특별자치시
              </Link>
              <Link className="placeBtn" to={"/list/31/12"}>
                경기도
              </Link>
              <Link className="placeBtn" to={"/list/32/12"}>
                강원도
              </Link>
              <Link className="placeBtn" to={"/list/33/12"}>
                충청북도
              </Link>
              <Link className="placeBtn" to={"/list/34/12"}>
                충청남도
              </Link>
              <Link className="placeBtn" to={"/list/35/12"}>
                경상북도
              </Link>
              <Link className="placeBtn" to={"/list/36/12"}>
                경상남도
              </Link>
              <Link className="placeBtn" to={"/list/37/12"}>
                전라북도
              </Link>
              <Link className="placeBtn" to={"/list/38/12"}>
                전라남도
              </Link>
              <Link className="placeBtn" to={"/list/39/12"}>
                제주도
              </Link>
            </div>
            <div className="Scroll">
              <span></span>
            </div>
          </div>
        </div>
        <div className="img-cover"></div>
      </div>
      <div className="About">
        <About />
      </div>
      <div className="Footer">
        <p>yjyoon.dev@gmail.com</p>
        <p>모두의 여가</p>
        <p>github.com/yjyoon-dev/leisure-for-all</p>
      </div>
    </div>
  );
};

export default Title;
