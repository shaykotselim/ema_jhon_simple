import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FiArrowRight } from 'react-icons/fi';

const Cart = ({cart}) => {
    console.log(cart);
    
    let total = 0;
    let shipping = 0;

        for (const product of cart){
            total = total + product.price
            shipping = shipping + product.shipping
        }
        let tax = total * 0.07;
        let grandTotal = total + shipping + tax;
    return (
        <>
            <div className="bg-[#FFE0B3] p-8 rounded">
                <div>
                    <p className="text-center text-lg font-medium ">Order Summary</p>
                    <p className="mt-4">Selected Items : {cart.length}</p>
                    <p className="mt-4">Total Price : {total}</p>
                    <p className="mt-4">Total Shipping Charge : {shipping}</p>
                    <p className="mt-4">Tax : {tax.toFixed(2)}</p>
                    <p className="mt-4 text-xl font-medium">Grand Total : {grandTotal.toFixed(2)}</p>
                </div>
                <div>   
                 <button className="mt-8 font-medium flex gap-2 items-center justify-center bg-[#FF3030] w-full text-white h-8 rounded" >Clear Cart <RiDeleteBin5Line/></button>

                 <button className="mt-8 font-medium flex gap-2 items-center justify-center bg-[#FF9900] w-full text-white h-8 rounded" >Review Order <FiArrowRight/></button>
                    
                </div>
            </div>
        </>
    );
};

export default Cart;