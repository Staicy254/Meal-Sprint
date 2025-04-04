import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login");

    return (
        <React.Fragment>
            <div className='login-popup'>
                <form className="login-popup-container">
                    <div className="login-popup-title">
                        <h2>{currState}</h2>
                        
                        <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
                    </div>
                    <div className="login-popup-inputs">
                        {currState === "Login" ? null : <input type="text" placeholder='Your name' required />}
                        <input type="email" placeholder='Your Email' required />
                        <input type="password" placeholder='Password' required />
                    </div>
                    <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                    <div className="login-popup-condition">
                        <input type="checkbox" required />
                        <p>By continuing, I agree to the Terms and Conditions of Meal Sprint.</p>
                    </div>
                    {currState === "Login"
                        ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
                        : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login Here</span></p>
                    }
                </form>
            </div>
        </React.Fragment>
    );
};

// Defined prop types validation
LoginPopup.propTypes = {
    setShowLogin: PropTypes.func.isRequired, 
};

export default LoginPopup;
