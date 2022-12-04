import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <header className={location.pathname === '/' ? `header header_main` : `header`}>
            <img onClick={() => navigate("/")} src={logo} alt="Логотип" className="header__logo"/>
            <Navigation />
        </header>
    );
}

export default Header;
