import React, { useContext } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/Storecontext';

const FoodItem = ({ id, name, price, description, image }) => {

    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <React.Fragment>
            <div className='food-item'>
                <div className="food-item-img-container">
                    <img className='food-item-image' src={image} alt={name} />
                    {!cartItems[id]
                        ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='Add to cart' />
                        : <div className='food-item-counter'>
                            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove from cart" />
                            <p>{cartItems[id]}</p>
                            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add more" />
                        </div>
                    }
                </div>
                <div className="food-item-info">
                    <div className="food-item-name-rating">
                        <p>{name}</p>
                        <img src={assets.rating_starts} alt="Rating" />
                    </div>
                    <p className='food-item-desc'>
                        {description}
                        <p className="food-item-price">${price}</p>
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
};

// Defined prop types for validation
FoodItem.propTypes = {
    id: PropTypes.string.isRequired,        
    name: PropTypes.string.isRequired,       
    price: PropTypes.number.isRequired,      
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired       
};

export default FoodItem;
