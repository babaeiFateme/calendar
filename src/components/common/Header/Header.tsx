import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const getTitle = (pathname: string) => {
    switch (pathname) {
      case '/':
        return 'لیست داشبورد';
      case '/services':
        return 'لیست خدمات';
      case '/requests':
        return 'درخواست خدمات';
      case '/discount':
        return 'کیف پول';
      case '/profile':
        return 'پروفایل';
      case '/logout':
        return 'خروج';
      default:
        return '404 page';
    }
  };

  return (
    <header className="header-box p-[22px] font-bold text-xl">{getTitle(location.pathname)}</header>
  );
};

export default Header;
