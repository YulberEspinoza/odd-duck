"use strict";

const img = [
  "bag",
  "banana",
  "bathroom",
  "boots",
  "breakfast",
  "bubblegum",
  "chair",
  "cthulhu",
  "dog-duck",
  "dragon",
  "pen",
  "pet-sweep",
  "scissors",
  "shark",
  "sweep",
  "tauntaun",
  "unicorn",
  "water-can",
  "wine-glass",
];

const state = {
  totalProductos: [],
};

function Productos(nombre, ruta) {
  this.nombre = nombre;
  this.ruta = ruta;
  this.count = 0;
  this.views = 0;
}

function imgShower() {
  for (let i = 0; i < img.length; i++) {
    let producto = new Productos(img[i], "./page/" + img[i] + ".jpg");
    state.totalProductos.push(producto);
  }
  console.log(state.totalProductos);
}

imgShower();

const catalog = {
  totalClick: 0,
  repeats: 25,
  leftSide: null,
  centerSide: null,
  rigthSide: null,
  leftImg: document.getElementById("img1"),
  centerImg: document.getElementById("img2"),
  rigthImg: document.getElementById("img3"),

  randomOption: function () {
    return Math.floor(Math.random() * img.length);
  },

  showImg: function () {
    catalog.leftSide = state.totalProductos[catalog.randomOption()];
    catalog.centerSide = state.totalProductos[catalog.randomOption()];
    catalog.rigthSide = state.totalProductos[catalog.randomOption()];

    catalog.leftSide.views += 1;
    catalog.centerSide.views += 1;
    catalog.rigthSide.views += 1;

    catalog.leftImg.src = catalog.leftSide.ruta;
    catalog.leftImg.id = catalog.leftSide.nombre;

    catalog.centerImg.src = catalog.centerSide.ruta;
    catalog.centerImg.id = catalog.centerSide.nombre;

    catalog.rigthImg.src = catalog.rigthSide.ruta;
    catalog.rigthImg.id = catalog.rigthSide.nombre;
  },
};

catalog.showImg();
