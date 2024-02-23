import React from "react";
import { Link, useLocation } from "react-router-dom";
import { UserIcon, LogoutIcon, ShopIcon, WalletIcon, FileIcon, ChartIcon } from '../../icons/SidebarIcons';

import logo from '../../icons/logo.svg'



const sidebarItems = [
    { icon: <ChartIcon />, text: 'لیست داشبورد', link: '/' },
    { icon: <FileIcon />, text: 'لیست خدمات', link: '/a' },
    { icon: <ShopIcon />, text: 'درخواست خدمات', link: '/b' },
    { icon: <WalletIcon />, text: 'کیف پول', link: '/discount' },
    { icon: <UserIcon />, text: 'پروفایل', link: '/z' },
    { icon: <LogoutIcon />, text: 'خروج', link: '/logout' },
];

const Sidebar = () => {
    const location = useLocation();
    return (
        <>
            <div className="sidebar w-[304px] flex-shrink-0 absolute md:relative h-[calc(100dvh-30px)] z-50">

                <div className="text-xl font-bold  p-[36px] flex items-center gap-3"
                >
                    <img src={logo} alt="timnow" width={223} height={60} />
                </div>
                <ul className="mt-4 p-4">
                    {sidebarItems.map((item, index) => (
                        <li key={index} className={`mb-[40px] font-medium p-3 rounded-md ${location.pathname === item.link ? "active font-bold" : ""}`}>
                            <div>
                                <Link to={item.link} className="flex gap-2">
                                    {item.icon}
                                    <span>{item.text}</span>
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
