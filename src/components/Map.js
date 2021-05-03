import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";

function NaverMapAPI({ mapy, mapx }) {
  const navermaps = window.naver.maps;
  return (
    <NaverMap
      mapDivId={"maps-getting-started-uncontrolled"}
      style={{
        width: "100%",
        height: "85vh",
        marginTop: "1rem",
      }}
      defaultCenter={{ lat: mapy, lng: mapx }}
      defaultZoom={16}
    >
      <Marker
        key={1}
        position={new navermaps.LatLng(mapy, mapx)}
        animation={1}
      />
    </NaverMap>
  );
}

function Map({ mapy, mapx }) {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={`${process.env.REACT_APP_MAP_KEY}`}
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMapAPI mapy={mapy} mapx={mapx} />
    </RenderAfterNavermapsLoaded>
  );
}

export default Map;
