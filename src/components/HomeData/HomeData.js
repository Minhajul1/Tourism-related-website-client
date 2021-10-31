import React from 'react';
import './HomeData.css'

const HomeData = (props) => {
    const {name,image,details,price} = props.homeData
    return (
        <div className="home-data-card">
            <img src={image} alt=""/>
            <h3>{name}</h3>
            <p>{details}</p>
            <h4>{price}</h4>
        </div>
    );
};

export default HomeData;