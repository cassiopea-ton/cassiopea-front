import React from "react";
import "./Home.scss";
import NeedData from "../../components/NeedData/NeedData";
import HomeStatInfo from "../../components/HomeStatInfo/HomeStatInfo";
import BecomeOracle from "../../components/BecomeOracle/BecomeOracle";
import Polygon from "../../components/Polygon/Polygon";



const Home = (props) => (
  <div>
    <Polygon />
    <HomeStatInfo />
    <NeedData />
    <BecomeOracle />
  </div>
);

export default Home;
