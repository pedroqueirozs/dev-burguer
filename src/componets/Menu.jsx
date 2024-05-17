import React, { useState } from "react";
import Footer from "./Footer";
import Product from "./Product";
import { products } from "../assets/data/Products";
import Modal from "./Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Menu() {
  const snacks = products.filter((product) => product.category === "lanche");
  const drinks = products.filter((product) => product.category === "drink");
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const calculateCartTotal = () => {
    return cart.reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0
    );
  };

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
    const handleSuccess = () => toast.success("Item adicionado ao carrinho!");

    if (existingItemIndex !== -1) {
      // Se o produto já estiver no carrinho, atualize a quantidade
      const updatedCart = [...cart];
      setCartCount(cartCount + 1);
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
      handleSuccess();
    } else {
      // Se o produto não estiver no carrinho, adicione-o
      setCartCount(cartCount + 1);
      setCart([...cart, { ...product, quantity: 1 }]);
      handleSuccess();
    }
  };

  const finalizarPedido = (address) => {
    const totalFinal = calculateCartTotal();
    const cartListItems = cart
      .map(
        (item) =>
          ` ${item.name} - Quantidade: ${item.quantity} - Preço: R$ ${item.price}`
      )
      .join("\n");
    const message = encodeURIComponent(
      `NOVO PEDIDO:\n${cartListItems}\nValor Total = R$ ${totalFinal.toFixed(
        2
      )}\nEntregar em: ${address}`
    );
    const phone = "11973779229";
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  const deleteToCart = (product) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
    let contentMessage;
    const handleRemove = (message) => toast.info(message);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      contentMessage = "Quantidade do item reduzida!";
      if (updatedCart[existingItemIndex].quantity > 1) {
        updatedCart[existingItemIndex].quantity -= 1;
        setCartCount(cartCount - 1);
        setCart(updatedCart);
        handleRemove(contentMessage);
      } else {
        updatedCart.splice(existingItemIndex, 1);
        setCartCount(cartCount - 1);
        setCart(updatedCart);
        contentMessage = "Item removido do carrinho!";
        handleRemove(contentMessage);
      }
    } else {
      alert("Item não encontrado no carrinho!");
    }
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <main>
        <section>
          <h1 className="md:text-3xl text-2xl font-bold text-center mt-9 mb-6">
            Conheça nosso menu
          </h1>
          <div className="grid p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {snacks.map((product) => (
              <Product
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        </section>

        <section>
          <h1 className="md:text-3xl text-2xl font-bold text-center mt-9 mb-6">
            Bebidas
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {drinks.map((product) => (
              <Product
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        </section>
        <Modal
          cart={cart}
          closeModal={closeModal}
          openModal={isModalVisible}
          deleteToCart={deleteToCart}
          finalizarPedido={finalizarPedido}
          cartTotal={calculateCartTotal()}
        />
        <Footer openModal={openModal} cartCount={cartCount} />
        <ToastContainer />
      </main>
    </div>
  );
}
