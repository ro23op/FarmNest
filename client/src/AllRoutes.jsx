import { Route,Routes } from "react-router-dom";

import React from 'react'
import Home from "./pages/Home/Home";

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    </>
  )
}

export default AllRoutes