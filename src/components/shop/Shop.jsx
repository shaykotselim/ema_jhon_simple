import React, { useEffect, useState } from "react";
import Product from "./Product";
import Cart from "./Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) =>{
        let newCart = [... cart, product];
        setCart(newCart);
}
  return (
    <>
      <div className="px-32 mt-16 grid grid-cols-4 gap-8">
        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-2">
            {products.map((product) => (
              <Product 
              key={product.id} 
              product={product}
              handleAddToCart = {handleAddToCart}
              />
            ))}
          </div>
        </div>

        <div>
            <Cart cart ={cart} />
        </div>
      </div>
    </>
  );
};

export default Shop;
