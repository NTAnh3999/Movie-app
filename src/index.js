import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { MovieProvider } from "./context/MovieContext";
import { UserProvider } from "./context/UserContext";
import "swiper/swiper.min.css";
import "./index.scss";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserProvider>
      <MovieProvider>
        <App />
      </MovieProvider>
    </UserProvider>
  </BrowserRouter>
);
