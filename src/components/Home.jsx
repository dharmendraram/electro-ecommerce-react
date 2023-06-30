import React from "react";
import HomeCat from "../pages/HomeCat";
import SDemo from "./SDemo";
import MediaBanner from "./MediaBanner";
import FeatureProduct from "./FeatureProduct";
import Herobanner from "./Herobanner";
import Electronic from "./Electronic";
import Jawalery from "./Jawalery";
import LinkSlider from "./LinkSlider";

const Home = () => {
  return (
    <>
      <HomeCat />
      <SDemo />
      <MediaBanner />
      <FeatureProduct />
      <LinkSlider />
      <Electronic />
      <Jawalery />
      <Herobanner />
      
    </>
  );
};

export default Home;
