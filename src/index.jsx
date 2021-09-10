import React from "react";
import ReactDOM from "react-dom";
import { Link, Route, BrowserRouter } from "react-router-dom";

// Components
import App from "./components/App/App";
import reducer from "./_reducers";

import "./index.scss";
import { createStore } from "redux";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Provider
      store={createStoreMiddleware(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__
      )}
    >
      <App />
    </Provider>
  </BrowserRouter>,
  rootElement
);
