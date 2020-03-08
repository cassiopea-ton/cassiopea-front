import React from 'react';
import './Polygon.scss';
import polygon from '../Polygon/img/Polygon.png';

const  Polygon = () =>
    <div className="polygon">
        <img className="polygon__img" src={polygon} alt="polygon" />
        <div className="polygon__block">
            <h1 className="polygon__article">Cassiopea</h1>
            <p className="polygon__text">Real-world data for your smart contracts. Don’t limit your DAPP.</p>
        </div>
    </div>

export default Polygon;
