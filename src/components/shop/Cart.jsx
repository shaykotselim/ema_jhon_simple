import React from 'react';

const Cart = ({cart}) => {
    // console.log(cart.length)
    return (
        <div>
            <h1>This is Cart Component{cart.length}</h1>
        </div>
    );
};

export default Cart;