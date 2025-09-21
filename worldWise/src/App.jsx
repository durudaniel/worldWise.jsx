import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import HomePage from "./Pages/HomePage";
import Pricing from "./Pages/Pricing";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./Pages/AppLayout";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<HomePage />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="pricing" element={<Pricing />}></Route>
          <Route path="app" element={<AppLayout />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
