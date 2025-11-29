import React from "react";
import Slider from "../home/Slider";
import Popular from "../home/Popular";
import { useLoaderData } from "react-router";
import OurFeatures from "../home/OurFeatures";
import ShopByCategory from "../home/ShopByCategory";
import NewArrivals from "../home/NewArrivals";

const HomePage = () => {
  const popularData = useLoaderData();

  return (
    <div>
      <Slider></Slider>
      <Popular popularData={popularData}></Popular>
      <OurFeatures></OurFeatures>
      <section className="mt-10">
        <ShopByCategory></ShopByCategory>
      </section>
      <NewArrivals></NewArrivals>
    </div>
  );
};

export default HomePage;
