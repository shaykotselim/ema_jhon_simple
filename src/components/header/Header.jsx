import React from "react";
import logo from "../../images/Logo.svg"
const Header = () => {
  return <>
            <div className="h-16 bg-[#1C2B35] flex justify-between items-center px-32">
                <div>
                    <img src={logo} alt="logo"/>
                </div>
                <nav className="text-white">
                    <a className="ml-12" href="/order">Order</a>
                    <a className="ml-12" href="/review">Order-Review</a>
                    <a className="ml-12" href="/inventory">Inventory</a>
                    <a className="ml-12" href="/login">Login</a>
                </nav>
            </div>

        </>;
};

export default Header;
