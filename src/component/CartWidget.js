import React from 'react';

const cartStyle = {
    fontSize: "120%",
    color: "#fff"
}

const CartWidget = () => {
    return (
        <div className="contCart">
            <i className="fas fa-shopping-cart" style={cartStyle}></i>
            <p>0</p>
        </div>
    )
}

export default CartWidget