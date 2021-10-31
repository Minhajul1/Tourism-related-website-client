import React from 'react';
import './Booking.css'

const Booking = () => {
    
    return (
        <div className="booking">
            <div className="booking-form">
                <h2>MAKE SURE YOUR BOOKING</h2>
                <form onSubmit="">
                    <input type="text" name="" id="" placeholder="Your Name"/>
                    <br/><br/>
                    <input type="text" name="" id="" placeholder="Your Mobile Number"/>
                    <br/><br/>
                    <input type="email" name="" id="" placeholder="Your Email"/>
                    <br/><br/>
                    <input type="text" name="" id="" placeholder="Chooses service"/>
                    <br/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    );
};

export default Booking;