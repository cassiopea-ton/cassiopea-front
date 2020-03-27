import React from "react";
import "./Home.scss";
import NeedData from "../../components/HomePage/NeedData/NeedData";
import HomeStatInfo from "../../components/HomePage/HomeStatInfo/HomeStatInfo";
import BecomeOracle from "../../components/HomePage/BecomeOracle/BecomeOracle";
import HomePolygon from "../../components/HomePage/HomePolygon/HomePolygon";



const Home = (props) => (
  <div classname ="home__contaniner">
    <HomePolygon />
    <HomeStatInfo />
    <NeedData />
    <BecomeOracle />
  </div>
);

export default Home;
