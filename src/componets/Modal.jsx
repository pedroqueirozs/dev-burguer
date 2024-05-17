import React, { useState } from "react";

export default function Modal({
  cart,
  closeModal,
  openModal,
  deleteToCart,
  finalizarPedido,
  cartTotal,
}) {
  const modalClassName = openModal ? "" : "hidden";
  const [inputAddress, setInputAddress] = useState("");

  function handleAddressChange(event) {
    setInputAddress(event.target.value);
  }

  const handleFinalizarPedido = () => {
    if (!inputAddress.trim()) {
      document.getElementById("address-warn").classList.remove("hidden");
      return;
    }
    document.getElementById("address-warn").classList.add("hidden");
    finalizarPedido(inputAddress);
  };

  const cartItems = cart.map((item) => (
    <div className="flex justify-between" key={item.id}>
      <div className="mb-1 flex gap-5">
        <p>{item.name}</p>
        <p>Qtd: {item.quantity}</p>
        <p>R$ {item.price}</p>
      </div>
      <button onClick={() => deleteToCart(item)} className="text-red-500">
        Excluir
      </button>
    </div>
  ));

  return (
    <div
      className={`bg-black/60 w-full h-full fixed top-0 left-0 z-[99] ${modalClassName}`}
    >
      <div className="bg-white p-5 rounded-md max-w-5 min-w-[90%] md:min-w-[600px] m-auto mt-[10%] lg:max-h-[300px] overflow-y-auto">
        <h2 className="text-center font-bold text-2xl mb-2">Meu Carrinho</h2>

        <div className="flex justify-between mb-2 flex-col">{cartItems}</div>
        <p className="font-bold">
          Total: R$ <span>{cartTotal.toFixed(2)}</span>
        </p>

        <p className="font-bold mt-4">Endereço de entrega: </p>

        <input
          className="w-full border-2 p-1 rounded my-1"
          type="text"
          id="address"
          placeholder="Digite o endereço para entrega"
          value={inputAddress}
          onChange={handleAddressChange}
        />

        <p className="text-red-500 hidden" id="address-warn">
          Digite seu endereço completo
        </p>
        <div className="flex items-center justify-between w-full mt-5">
          <button onClick={closeModal} id="close-modal-btn">
            Fechar
          </button>
          <button
            id="checkout-btn"
            className="bg-green-500 text-white px-4 py-1 rounded"
            onClick={handleFinalizarPedido}
          >
            Finalizar Pedido
          </button>
        </div>
      </div>
    </div>
  );
}
