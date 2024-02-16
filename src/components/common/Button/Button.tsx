import React, { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    className?: string; 
    onClick?: () => void; 
};

const Button: React.FC<ButtonProps> = ({ children, onClick ,className }) => {
    return <button className={className} onClick={onClick}>{children}</button>;
};

export default Button;
