import React from 'react';
import './Home.scss';
import NeedData from '../../components/NeedData/NeedData';
import HomeStatInfo from '../../components/HomeStatInfo/HomeStatInfo';
  
const  Home = () => 
    <div>
      <HomeStatInfo />
      <NeedData />
    </div>

export default Home;
