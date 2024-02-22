import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layouts/Layout";
import Index from "./pages/Index";
import Discount from "./pages/Discount";

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Index />} />
                <Route path="discount" element={<Discount />} />
            </Route>
        </Routes>
    );
};

export default AppRoute;
