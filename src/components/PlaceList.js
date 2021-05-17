import React, { useState, useEffect } from "react";
import PlaceListItem from "./PlaceListItem";
import { Link } from "react-router-dom";
import { Layout, Menu, Spin } from "antd";
import {
  ShoppingOutlined,
  HomeOutlined,
  FireOutlined,
  ReadOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import axios from "axios";
import "./PlaceList.scss";

const { Content, Sider } = Layout;

const PlaceList = ({ match }) => {
  const { areaCode, contentTypeId } = match.params;
  const [places, setPlaces] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://api.visitkorea.or.kr/openapi/service/rest/KorWithService/areaBasedList?serviceKey=${process.env.REACT_APP_OPEN_API_KEY}&numOfRows=50&pageNo=1&listYN=Y&MobileOS=ETC&MobileApp=LeisureForAll&listYN=Y&arrange=B&contentTypeId=${contentTypeId}&areaCode=${areaCode}&_type=json`
        );
        setPlaces(response.data.response.body.items.item);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [areaCode, contentTypeId]);

  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <Link to={`/`}>
          <div className="logo">모두의 여가</div>
        </Link>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[contentTypeId]}>
          <Menu.Item key="12" icon={<TeamOutlined />}>
            <Link to={`/list/${areaCode}/12`}>관광지</Link>
          </Menu.Item>
          <Menu.Item key="14" icon={<ReadOutlined />}>
            <Link to={`/list/${areaCode}/14`}>문화시설</Link>
          </Menu.Item>
          <Menu.Item key="15" icon={<FireOutlined />}>
            <Link to={`/list/${areaCode}/15`}>축제/공연/행사</Link>
          </Menu.Item>
          <Menu.Item key="28" icon={<CloudOutlined />}>
            <Link to={`/list/${areaCode}/28`}>레저/스포츠</Link>
          </Menu.Item>
          <Menu.Item key="32" icon={<HomeOutlined />}>
            <Link to={`/list/${areaCode}/32`}>숙박</Link>
          </Menu.Item>
          <Menu.Item key="38" icon={<ShoppingOutlined />}>
            <Link to={`/list/${areaCode}/38`}>쇼핑</Link>
          </Menu.Item>
          <Menu.Item key="39" icon={<ShopOutlined />}>
            <Link to={`/list/${areaCode}/39`}>음식점</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div className="PlaceList">
            {loading || !places ? (
              <div className="loading">
                <Spin size="large" />
              </div>
            ) : (
              places.map((place) =>
                place.firstimage ? (
                  <PlaceListItem key={place.contentid} place={place} />
                ) : (
                  ""
                )
              )
            )}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default PlaceList;
