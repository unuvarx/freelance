import React from "react";
import HomeSummary from "../components/HomeSummary";
import HomeSkills from "../components/HomeSkills";
import HomeApply from "../components/HomeApply";
import HomeCarousel from "../components/HomeCarousel";

const Home = () => {
  return (
    <div id="home">
      <HomeApply />
      <HomeSummary />
      <HomeSkills />
      <HomeCarousel />
    </div>
  );
};
export default Home;
