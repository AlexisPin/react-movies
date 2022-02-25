import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FavoritesContextProvider } from "./store/favoritesMovies";
import "./styles/index.scss";

ReactDOM.render(
  <FavoritesContextProvider>
    <App />
  </FavoritesContextProvider>,
  document.getElementById("root")
);
