import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBasketShopping} from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
        <div style={{fontSize:"2rem", marginLeft:"10px"}}>
            <FontAwesomeIcon icon={faBasketShopping}/>
        </div>
    );
}

export default CartWidget;
