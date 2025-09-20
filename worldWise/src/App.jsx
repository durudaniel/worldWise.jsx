import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="product" element={<Product />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
