import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/Storecontext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const {getTotalCartAmount} = useContext(StoreContext);

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  return (
    <React.Fragment>
      <div className='navbar'>
        <Link to='/'><img src={assets.logo} className="logo" alt="Logo" /></Link>
        <ul className="navbar-menu">
          <Link to='/' onClick={() => handleMenuClick("home")} className={menu === "home" ? "active" : ""}>Home</Link>
          <a href='#explore-menu' onClick={() => handleMenuClick("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
          <a href='#app-download' onClick={() => handleMenuClick("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
          <a href='#footer' onClick={() => handleMenuClick("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
        </ul>

        <div className="navbar-right">
          <img src={assets.search_icon} alt="Search" />
          <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="Basket"/></Link> 
            <div className={getTotalCartAmount()===0?"" :"dot"}></div>
          </div>
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        </div>
      </div>
    </React.Fragment>
  );
};

// Add prop types validation
Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired, 
};

export default Navbar;
