import React from "react";
import {Link, useHistory, useLocation} from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

function Header() {
    const location = useLocation();
    // const navigate = useHistory();
    return (
        <header className={location.pathname === '/' ? `header header_main` : `header`}>
            <Link to="/">
                <img src={logo} alt="Логотип" className="header__logo" />
            </Link>
            {/*<img onClick={() => navigate("/")} src={logo} alt="Логотип" className="header__logo"/>*/}
            <Navigation />
        </header>
    );
}

export default Header;
