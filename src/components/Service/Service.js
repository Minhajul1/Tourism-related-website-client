import React from 'react';
import { NavLink } from 'react-router-dom';
import './Service.css'

const Service = () => {
    return (
        <div className="services">
            <div className="service-card">
            <i class="fas fa-hotel"></i>
            <h2>Affordable Hotel</h2>
            <p>Affordable Hospitality Services provides experienced trades to serve the general contractor in the hospitality renovation business. In addition to serving general contractors, we also provide hotel owner operators with personalized, hands-on service for their renovations.</p>
            <NavLink to="/addpackage" style={{padding:"10px",fontSize:"13px",color:"white",textDecoration:"none",backgroundColor:"brown",borderRadius:"10px"}}>Order Now</NavLink>
            </div>
            <div className="service-card">
                <i class="fas fa-utensils"></i>
                <h2>Food and Drinks</h2>
                <p>Food and Beverage Services can be broadly defined as the process of preparing, presenting and serving of food and beverages to the customers.Services can be of the following two types − On Premise − Food is delivered where it is prepared.</p>
                <NavLink to="/addpackage" style={{padding:"10px",fontSize:"13px",color:"white",textDecoration:"none",backgroundColor:"brown",borderRadius:"10px"}}>Order Now</NavLink>
            </div>
            <div className="service-card">
                <i class="fas fa-plane"></i>
                <h2>Fastest Travel</h2>
                <p>Travel Services, a concierge travel agency is committed to providing our travelers with the best value and experience. We are here for you before, during and after your trip. We believe that VIP service is about understanding your traveler’s unique expectations and being committed to meeting those needs.</p>
                <NavLink to="/addpackage" style={{padding:"10px",fontSize:"13px",color:"white",textDecoration:"none",backgroundColor:"brown",borderRadius:"10px"}}>Order Now</NavLink>
            </div>
            <div className="service-card">
                <i class="fas fa-volume-up"></i>
                <h2>Safty Guide</h2>
                <p> Safety and Emergency Services. In case of an emergency, please call 911 or contact public safety at 417-836-5509. Campus status. Missouri State Alert. Ethics hotline. Incident reporting form.</p>
                <NavLink to="/addpackage" style={{padding:"10px",fontSize:"13px",color:"white",textDecoration:"none",backgroundColor:"brown",borderRadius:"10px"}}>Order Now</NavLink>
            </div>
            <div className="service-card">
                <i class="fas fa-globe-americas"></i>
                <h2>Around the World</h2>
                <p>Whether you call it Round The World, Around The World, the common abbreviation, RTW, or long-term travel, it still means you are preparing for the trip of a lifetime. And we’ve got just about everything you need when it comes to the biggest expense of a long-term trip – around the world airfare!</p>
                <NavLink to="/addpackage" style={{padding:"10px",fontSize:"13px",color:"white",textDecoration:"none",backgroundColor:"brown",borderRadius:"10px"}}>Order Now</NavLink>
            </div>
            <div className="service-card">
                <i class="fas fa-hot-tub"></i>
                <h2>Adventures</h2>
                <p>An adventure is an exciting experience or undertaking that is typically bold, sometimes risky. Adventures may be activities with some potential for physical danger such as traveling, exploring, skydiving, mountain climbing, scuba diving, river rafting or participating in extreme sports</p>
                <NavLink to="/addpackage" style={{padding:"10px",fontSize:"13px",color:"white",textDecoration:"none",backgroundColor:"brown",borderRadius:"10px"}}>Order Now</NavLink>
            </div>
        </div>
    );
};

export default Service;