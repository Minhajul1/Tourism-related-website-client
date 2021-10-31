import React from 'react';
import { NavLink } from 'react-router-dom';
import './PackageData.css'

const PackageData = (props) => {
    const {name, img, details,price} = props.packageData
    return (
        <div className="package-data-card">
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <p>{details}</p>
            <h3>{price}</h3>
            <NavLink to="/booking"style={{padding:"10px",fontSize:"13px",color:"white",textDecoration:"none",backgroundColor:"brown",borderRadius:"10px"}}>Book Now</NavLink>
        </div>
    );
};

export default PackageData;