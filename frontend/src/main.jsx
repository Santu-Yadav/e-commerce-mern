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
import ShippingScreen from "./screens/shippingScreen.jsx";
import PlaceOrderScreen from "./screens/PlaceOrderScreen.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Payment from "./screens/PaymentScreen.jsx";
import OrderScreen from "./screens/OrderScreen.jsx";

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
          <Route path="" element={<PrivateRoute />}>
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/placeOrder" element={<PlaceOrderScreen />} />
            <Route path="/order/:id" element={<OrderScreen />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
);
