import React from 'react';

const Product = (props) => {
   
        const {img, name, price, seller, ratings} = props.product
        const handleAddToCart = props.handleAddToCart;
        return (
        <>
            <div className="border h-[500px] rounded relative">
                    <div className="p-2">
                        <img className="rounded" src={img} alt="" />
                    </div>
                    <div className="pl-2">
                        <p className="text-xl font-medium">{name}</p>
                        <p className="text-lg font-medium">Price $: {price}</p>
                        <p className="mt-4 text-md font-medium">Manufacturer: {seller}</p>
                        <p className=" text-md font-medium">Rating: {ratings} star</p>
                    </div> 
                    <div>
                    <button onClick={()=>handleAddToCart()} className="bg-purple-500 h-8 mt-8 w-full border text-white
                    rounded absolute bottom-0 hover:bg-orange-500 ">Add to Cart</button>     
                    </div>  
            </div>   
        </>
    );
};

export default Product;