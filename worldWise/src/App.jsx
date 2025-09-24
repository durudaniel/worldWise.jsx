import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import HomePage from "./Pages/HomePage";
import Pricing from "./Pages/Pricing";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./Pages/AppLayout";
import Login from "./Pages/Login";
import CityList from "./Components/CityList";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePage />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<CityList />} />
            <Route path="cities" element={<CityList />} />
            <Route path="countries" element={<p>Countries</p>} />
            <Route path="form" element={<p>Form</p>} />
          </Route>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
