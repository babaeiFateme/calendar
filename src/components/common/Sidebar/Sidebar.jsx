import React from "react";

import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <div className="sidebar w-64 flex-shrink-0 absolute md:relative h-screen p-[18px]">
                <div className="p-4">
                    <h1 className="text-xl font-bold mb-[80px]">تایمنو</h1>
                    <ul className="mt-4">
                        <li className="mb-[40px]">
                            <div>
                                <Link to="/">لیست داشیورد</Link>
                            </div>
                        </li>
                        <li className="mb-[40px]">
                            <div>
                                <Link to="/">لیست خدمات</Link>
                            </div>
                        </li>
                        <li className="mb-[40px]">
                            <div>
                                <Link to="/">کیف پول</Link>
                            </div>
                        </li>
                        <li className="mb-[40px]">
                            <div>
                                <Link to="/">پروفایل</Link>
                            </div>
                        </li>
                        <li className="mb-[40px]">
                            <div>
                                <Link to="/">خروج</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
