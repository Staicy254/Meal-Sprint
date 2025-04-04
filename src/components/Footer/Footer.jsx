import React from 'react'

import './Footer.css';
import { assets } from '../../assets/assets';
const Footer = () => {
  return (
    <React.Fragment>
    <div className='footer' id='footer'>
    <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>We cater to your needs.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon}alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
    
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
    </div>
        <div className="footer-content-right">
            <h2>Get in touch with us</h2>
            <ul>
                <li>+254 789567876</li>
                <li>info@mealsprint.com</li>
            </ul>
    </div>
    </div>
    <hr />
    <p className="footer-copyright">
        &copy; 2024 Meal Sprint. All Rights Reserved.
    </p>
    </div>
    </React.Fragment>
  )
}

export default Footer