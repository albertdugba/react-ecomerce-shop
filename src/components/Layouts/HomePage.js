import React from "react";
import Banner from "./Banner";
import Services from "./services/Services";
import Featured from "../Featured/Featured";
import ShowCaseArea from "../ShowCaseArea/ShowCaseArea";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Services />
      <ShowCaseArea />
      <Featured />
    </div>
  );
};

export default HomePage;
