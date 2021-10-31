import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <h1>Travelling World</h1>
            <p>Copyright@2021.Travelling World</p>
            <div className="footer-icon">
                <i class="fab fa-facebook-square"></i><i class="fab fa-whatsapp"></i><i class="fab fa-twitter-square"></i><i class="fab fa-instagram"></i>
            </div>
        </div>
    );
};

export default Footer;