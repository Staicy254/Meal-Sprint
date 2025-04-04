import React from 'react'

import './Header.css';
const Header = () => {
  return (
    <React.Fragment>
    <div className='header'>
        <div className="header-contents">
            <h2>Order at the Touch of a button!</h2>
            <p>Meal Sprint offers the convenience of allowing you to quickly browse, 
                customize, and order meals from various restaurants, with fast delivery to your location</p>

            <button>View Menu</button>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Header