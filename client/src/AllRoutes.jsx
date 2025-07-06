import { Route,Routes } from "react-router-dom";

import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import HomeMain from "./pages/Home/HomeMain";
import ProductsMain from "./pages/Products/ProductsMain";
import ProductDetail from "./pages/Products/ProductDetail";
import FarmMain from "./pages/Farms/FarmMain";

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomeMain />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<ProductsMain/>} />
            <Route path="/products/1" element={<ProductDetail />} />
            <Route path="/farms" element={<FarmMain />} />
        </Routes>
    </>
  )
}

export default AllRoutes