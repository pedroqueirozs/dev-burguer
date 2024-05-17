import React from "react";

export function Header() {
const logo = require('../../public/imgs/logo.svg').default;
  return (
    <div className="w-full relative text-center bg-zinc-900 h-[420px] bg-home bg-cover bg-center ">
      <div className=" text-white flex flex-col items-center justify-center h-full w-full">
        <img
          src={logo}
          alt="Logo do Dev Burguer"
          className="centered-logo h-32 w-32 hover:scale-110 duration-200 shadow-lg rounded-full"
        />

        <p className="font-bold text-3xl mb-2 mt-4">Dev Burguer</p>
        <span className="font-medium">
          Rua Neco de Santa Maria, 106 Major Prates - Montes Claros-MG
        </span>
        <div className="bg-green-600 rounded-lg p-2 mt-4" id="date-span">
          <p>Seg á Sab - 18:00 as 23:00 </p>
        </div>
      </div>
    </div>
  );
}
