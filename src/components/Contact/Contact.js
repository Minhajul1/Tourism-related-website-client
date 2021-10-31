import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-form">
                <h2>SEND US MESSAGE</h2>
                <form onSubmit="">
                    <input type="text" name="" id="" placeholder="Full Name"/>
                    <br/><br/>
                    <input type="email" name="" id=""placeholder="Enter Email"/>
                    <br/><br/>
                    <input type="text" name="" id=""placeholder="Subject"/>
                    <br/><br/>
                    <input type="text" name="" id=""placeholder="Comment"/>
                    <br/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            <div className="contact-details">
                <h3>Khulsi,Chittagong,Bangladesh</h3>
                <p> We are Experienced Relevant Field and Handling Inbound and Outbound Tourists. Vfs -thai Visa Application Center Appointed Agent, We Worked with Our Overseas Partner Singapore Based World Wide Tourism Company for Our Outbound Package. Our Main Goal Will Be Establish Best of the World Tourism Sector of Our Bangladesh</p>
                <h1>+6548235819823</h1>
            </div>
        </div>
    );
};

export default Contact;