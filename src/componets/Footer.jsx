import React from "react";
import { ShoppingCart } from "@phosphor-icons/react";

const Footer = ({ openModal, cartCount }) => {
  return (
    <div>
      <footer className="w-full bg-red-500 py-3 fixed bottom-0 z-40 flex items-center justify-center">
        <button
          onClick={openModal}
          id="cart-btn"
          className="flex text-white gap-2 font-bold"
        >
          <span id="cart-count">( {cartCount} ) </span>Veja seu carrinho{" "}
          <ShoppingCart size={32} />
        </button>
      </footer>
    </div>
  );
};

export default Footer;
