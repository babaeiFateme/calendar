import React from "react";

import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
    return (
        <main>
            <div class="flex h-screen">
                <Sidebar />
                <div class="flex-1 p-10">
                    <Header />
                    <div class="p-4">
                        <Outlet />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Layout;
