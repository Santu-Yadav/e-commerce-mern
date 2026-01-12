import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App.jsx";
import HomeScreens from "./screens/HomeScreens.jsx";
import ProductScreen from "./screens/productScreen.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomeScreens />} />
        <Route path="/product/:id" element={<ProductScreen />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
