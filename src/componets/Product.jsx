import React from "react";
import { ShoppingCart } from "@phosphor-icons/react";

const Product = ({ product, addToCart }) => {
  const { id, imgUrl, name, description, price } = product;
  return (
    <div className="  flex gap-7 md:gap-10 max-w-7xl px-2 mb-16">
      <div key={id} className="flex gap-2">
        <img
          className=" cursor-pointer h-28 w-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300"
          src={imgUrl}
          alt={name}
        />
        <div key={id}>
          <p className="font-bold text-lg">{name}</p>
          <p className="text-sm">{description}</p>
          <div className="mt-3 flex items-center gap-2 justify-between">
            <p className="font-bold text-lg ">R$ {price}</p>
            <div className=" cursor-pointer bg-gray-900 items-center flex justify-center rounded add-to-cart-btn text-white w-14 h-8">
              <ShoppingCart
                onClick={() => addToCart(product)}
                size={32}
                className="data-name data-price"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
