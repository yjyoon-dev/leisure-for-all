import React from "react";
import { Divider } from "antd";
import "./About.scss";

const About = () => {
  return (
    <div className="AboutText">
      <p></p>
      <Divider plain>
        <h1>About</h1>
      </Divider>
      <p>
        본 웹페이지는 한국관광공사에서 제공하는 Open API 를 통해 <br /> 지역별
        각종 여가 장소의 장애 시설 관련 정보를 제공합니다.
        <br /> 장소 유형에 따른 분류 기능을 제공하고 있으며 장애 관련 정보 뿐만
        아니라 <br /> 장소에 대한 주소, 설명, 지도 등 다양한 기본 정보들도
        제공합니다. <br /> 그리고 장소별 후기 시스템을 통해 다양한 사람들의
        장애별 방문 후기를 접할 수 있습니다.
      </p>
      <p>
        그동안 자신이 갖고 있는 제약사항 때문에 여가를 즐기기 망설이셨나요?{" "}
        <br />
        이제 <b>모두의 여가</b>를 통해 다양한 장소들을 살펴보며 마음껏
        즐겨보세요! 😁
      </p>
    </div>
  );
};

export default About;
