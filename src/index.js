import React from "react";
import { createRoot } from "react-dom/client";
import App from "./componets/App";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import rootReducers from './reducers';
import { addCharacterById } from "./actions";

const store = configureStore({ reducer: rootReducers });

// console.log('store.getState()', store.getState());
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(addCharacterById(2));

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>);
