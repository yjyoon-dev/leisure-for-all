import React from "react";
import { Route } from "react-router-dom";
import PlaceList from "./components/PlaceList";
import PlaceDetail from "./components/PlaceDetail";
import Title from "./components/Title";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Title} />
      <Route path="/list/:areaCode/:contentTypeId" component={PlaceList} />
      <ScrollToTop />
      <Route path="/detail/:contentid" component={PlaceDetail} />
    </div>
  );
};

export default App;
