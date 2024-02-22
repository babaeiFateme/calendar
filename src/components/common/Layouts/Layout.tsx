import React from "react";

import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
    return (
        <main>
            <div className="flex h-screen">
                <Sidebar />
                <div className="flex-1 p-10">
                    <Header />
                    <div className="p-4 max-w-[1056px] w-full">
                        <Outlet />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Layout;
