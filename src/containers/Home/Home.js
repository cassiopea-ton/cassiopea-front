import React from "react";
import "./Home.scss";
import NeedData from "../../components/NeedData/NeedData";
import HomeStatInfo from "../../components/HomeStatInfo/HomeStatInfo";
import BecomeOracle from "../../components/BecomeOracle/BecomeOracle";
import HomePolygon from "../../components/HomePolygon/HomePolygon";



const Home = (props) => (
  <div classname ="home__contaniner">
    <HomePolygon />
    <HomeStatInfo />
    <NeedData />
    <BecomeOracle />
  </div>
);

export default Home;
