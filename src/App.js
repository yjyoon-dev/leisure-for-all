import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [places, setPlaces] = useState(null);
  useEffect = () => {
    const fetchData = async () => {
      try {
        const response = await axios.get();
      } catch (e) {
        console.log(e);
      }
    };
  };
};

export default App;
