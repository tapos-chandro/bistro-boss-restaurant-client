import React from "react";
import useMenu from "../../hooks/useMenu";
import OurMenu from "./OurMenu";
import Category from "./Category";
import Banner from "./Banner";
import BistroBossSection from "./BistroBossSection";
import CallUs from "./CallUs";
import RecommendedItems from "./RecommendedItems";
const Home = () => {
  const [menu] = useMenu("offered");

  console.log(menu);
  // const popularItems = menu?.filter(item => item.category === 'popular')

  return (
    <div>
      <Banner></Banner>
      <div className="max-w-[82.5rem] mx-auto pt-24 px-5 ">
        <Category />

        <BistroBossSection />
        <OurMenu></OurMenu>
        <CallUs/>
        <RecommendedItems></RecommendedItems>
      </div>
    </div>
  );
};

export default Home;
