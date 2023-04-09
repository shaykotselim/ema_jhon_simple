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
      <div className="lg:px-32 lg:mt-16 sm:grid sm:grid-cols-4 gap-8">
        <div className="col-span-3">
          <div className="sm:grid sm:grid-cols-3 sm:gap-2">
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
