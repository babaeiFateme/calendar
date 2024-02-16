import React from "react";
import { Link } from "react-router-dom";
import { UserIcon, LogoutIcon, ShopIcon, WalletIcon, FileIcon, ChartIcon } from '../icons/SidebarIcons';

import logo from '../icons/logo.jpg'



const sidebarItems = [
    { icon: <ChartIcon />, text: 'لیست داشبورد', link: '/' },
    { icon: <FileIcon />, text: 'لیست خدمات', link: '/' },
    { icon: <ShopIcon />, text: 'درخواست خدمات', link: '/' },
    { icon: <WalletIcon />, text: 'کیف پول', link: '/' },
    { icon: <UserIcon />, text: 'پروفایل', link: '/' },
    { icon: <LogoutIcon />, text: 'خروج', link: '/' }
];

const Sidebar = () => {
    return (
        <>
            <div className="sidebar w-[350px] flex-shrink-0 absolute md:relative h-screen">
                <div>
                    <h1 className="text-xl font-bold  p-[36px] flex items-center gap-3"
                    >
                        <img src={logo} alt="timnow" width={59} height={59} />
                        تایمینو
                    </h1>
                    <ul className="mt-4 p-4">
                        {sidebarItems.map((item, index) => (
                            <li key={index} className={`mb-[40px] p-3 rounded-md ${index === 3 ? "active" : ""}`}>
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
            </div>
        </>
    );
};

export default Sidebar;
