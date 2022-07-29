import React from "react";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";
import "./style-basic.css";
import Product from "./json/acima-10-reais.json";

export default function RouteConfigExample() {
  return (
    <div id="myCar">
      {Product.items.map((items) => (
        <div id="product">
          <img id="image" src={items.imageUrl} alt=""></img>
          <div id="information">
            <text id="name">{items.name}</text>
            <text id="price">{"R$ " + items.price / 100}</text>
            <text id="sellinPrice">{"R$ " + items.sellingPrice / 100}</text>
          </div>
        </div>
      ))}
      <div id="total">
        <text>Total</text>
        <text>{"R$ " + "10" + ",00"}</text>
      </div>
      <label id="frete">
        <text id="frete-text">Parabéns, sua compra tem frete grátis!</text>
      </label>
      <button id="finish-button">Finalizar compra</button>
    </div>
  );
}
