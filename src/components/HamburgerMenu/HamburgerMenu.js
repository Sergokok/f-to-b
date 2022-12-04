import React from "react";
import { Link } from "react-router-dom";
import "./HamburgerMenu.css"

function HamburgerMenu({open, close}) {
    return (
        <section className={`${open && 'hamburger-menu__overlay'}`} onClick={close}>
            <div className={`hamburger-menu ${open && 'hamburger-menu_open'}`}>
                <button className="hamburger-menu__close-button" onClick={close}/>
                <nav className="hamburger-menu__container">

                    <div className="hamburger-menu__links">
                        <Link to="/" className="hamburger-menu__element hamburger-menu__link">Главная</Link>
                        <Link to="/movies" className="hamburger-menu__element hamburger-menu__link">Фильмы</Link>
                        <Link to="/saved-movies" className="hamburger-menu__element hamburger-menu__link">Сохранённые фильмы</Link>
                    </div>
                    <div className="hamburger-menu__profile">
                        <Link to="/profile" className="hamburger-menu__link">Аккаунт</Link>
                        <Link to="/profile" className="hamburger-menu__profile-icon">
                            {/*<Link to="/profile" className="hamburger-menu__link_profile">*/}
                            {/*    <img src={profileIcon} alt="Аккаунт" className="hamburger-menu__profile-icon"/>*/}
                        </Link>
                    </div>

                </nav>
            </div>
        </section>
    )
}

export default HamburgerMenu;
