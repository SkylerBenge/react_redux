import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";

function counter(state, action) {
  if (state === undefined) {
    return { count: 0 };
  }
 
  var count = state.count;
 
  switch (action.type) {
    case "increase":
      return { count: count + 1 };
    case "decrease":
      return { count: count - 1 };
    default:
      return state;
  }
}

var destination = document.querySelector("#container");
 
// Store
var store = createStore(counter);
 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  destination
);