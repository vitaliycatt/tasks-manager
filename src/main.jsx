import React, { Profiler } from "react";
import { App } from "./app";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { allReducers } from "./reducers";
import "./assets/css/app.css";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
