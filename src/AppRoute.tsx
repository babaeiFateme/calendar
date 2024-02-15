import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layouts/Layout";
import Landing from "./pages/Landing";

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Landing />} />
            </Route>
        </Routes>
    );
};

export default AppRoute;
