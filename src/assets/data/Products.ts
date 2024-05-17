const hambUm = require('./assets/src/imgs/hamb-1.svg').default;
const hambDois = require('./assets/src/imgs/hamb-2.svg').default;
const hambTres = require('./assets/src/imgs//hamb-3.svg').default;
const hambQuatro = require('./assets/src/imgs/hamb-3.svg').default;
const hambCinco = require('./assets/src/imgs/hamb-3.svg').default;
const hambSeis = require('./assets/src/imgs/hamb-6.svg').default;
const hambSete = require('./assets/src/imgs/hamb-7.svg').default;
const hambOito = require('./assets/src/imgs/hamb-8.svg').default;
const hambNove = require('./assets/src/imgs/hamb-9.svg').default;
const hambDez = require('./assets/src/imgs/hamb-10.svg').default;


const coca = require('./assets/src/imgs/coca.svg').default;
const guarana = require('./assets/src/imgs/guarana.svg').default;
const pepsi = require('./assets/src/imgs/pepsi.svg').default;
const sprite = require('./assets/src/imgs/sprite.svg').default;

export const products = [
  {
    id: 0,
    quantity:1,
    name: "X-Tudo",
    description: "Duas carnes, milho, calabresa, alface, tomate, bacon, ovo e molhos",
    imgUrl: hambUm,
    price: "25.00",
    category: "lanche",
  },
  {
    id: 7,
    quantity: 1,
    name: "X-Frango",
    description: "Filé de frango, alface, tomate, queijo e molhos",
    imgUrl: hambSeis,
    price: "18.00",
    category: "lanche",
  },
  {
    id: 8,
    quantity: 1,
    name: "X-Egg",
    description: "Uma carne, queijo, ovo, alface, tomate e molhos",
    imgUrl: hambSete,
    price: "17.00",
    category: "lanche",
  },
  {
    id: 9,
    quantity: 1,
    name: "X-Veggie",
    description: "Hambúrguer vegetariano, alface, tomate, cebola, pepino e molhos",
    imgUrl: hambOito,
    price: "16.00",
    category: "lanche",
  },
  {
    id: 10,
    quantity: 1,
    name: "X-Coração",
    description: "Carne de coração, calabresa, milho, alface, tomate e molhos",
    imgUrl: hambNove,
    price: "22.00",
    category: "lanche",
  },
  {
    id: 11,
    quantity: 1,
    name: "X-Fit",
    description: "Hambúrguer de frango grelhado, alface, tomate, cenoura, molho de iogurte",
    imgUrl: hambDez,
    price: "20.00",
    category: "lanche",
  },
  {
    id: 12,
    quantity: 1,
    name: "Pepsi",
    description: "Lata 350 ml",
    imgUrl: pepsi,
    price: "5.00",
    category: "drink",
  },
  {
    id: 13,
    quantity: 1,
    name: "Sprite",
    description: "Lata 350 ml",
    imgUrl: sprite,
    price: "5.00",
    category: "drink",
  },
  {
    id: 1,
    quantity:1,
    name: "X-bacon",
    description: "Uma carne,bacon, calabresa, alface, tomate e molhos",
    imgUrl: hambDois,
    price: "20.00",
    category: "lanche",
  },
  {
    id: 2,
    quantity:1,
    name: "X-salada",
    description: "Uma carne, alface, tomate e ovo",
    imgUrl: hambTres,
    price: "15.50",
    category: "lanche",
  },
  {
    id: 3,
    quantity:1,
    name: "X-tudo-duplo",
    description: " Quatro carnes, milho, calabresa, quatro ovos tomate e molhos",
    imgUrl: hambQuatro,
    price: "50.00",
    category: "lanche",
  },
  {
    id: 4,
    quantity:1,
    name: "Mata fome",
    description: "Tres carnes, milho, calabresa, alface, tomate e molhos",
    imgUrl: hambCinco,
    price: "30.00",
    category: "lanche",
  },
  {
    id: 5,
    quantity:1,
    name: "Coca Cola",
    description: "Lata 350 ml",
    imgUrl: coca,
    price: "5.00",
    category: "drink",
  },
  {
    id: 6,
    quantity:1,
    name: "Guarana",
    description: "Lata 750 ml",
    imgUrl: guarana,
    price: "8.00",
    category: "drink",
  },
];