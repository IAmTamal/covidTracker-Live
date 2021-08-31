import React, { useEffect } from "react";
import Covid from "./Components/Covid";

const App = () => {
  const getcovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    //getcovidData();
  }, []);

  return (
    <div>
      <Covid />
    </div>
  );
};

export default App;
