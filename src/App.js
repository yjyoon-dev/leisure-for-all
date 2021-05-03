import React from "react";
import { Route } from "react-router-dom";
import PlaceList from "./components/PlaceList";
import Home from "./components/Home";
import PlaceDetail from "./components/PlaceDetail";

const App = () => {
  return (
    <div className="App">
      <Route path="/" component={Home} />
      <Route path="/list/:areaCode/:contentTypeId" component={PlaceList} />
      <Route path="/detail/:contentid" component={PlaceDetail} />
    </div>
  );
};

export default App;
