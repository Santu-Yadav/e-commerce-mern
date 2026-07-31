import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App.jsx";
import HomeScreens from "./screens/HomeScreens.jsx";
import ProductScreen from "./screens/productScreen.jsx";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";

import store from "./store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomeScreens />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
);
