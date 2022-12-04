import React from "react";
import "./Login.css";
import logo from "../../images/logo.svg";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    return (
        <section className="login">
            <img onClick={() => navigate("/")} className="login__logo" src={logo} alt="Логотип" />
            <h2 className="login__title">Рады видеть!</h2>
            <form className="login__form">
                <label className="login__label">E-mail</label>
                <input className="login__input" type="email" required />
                <label className="login__label">Пароль</label>
                <input className="login__input" type="password" required />
                <button className="login__button" type="submit">Войти</button>
            </form>
            <p className="login__text">Ещё не зарегистрированы? <a className="login__link" href="/signup">Регистрация</a></p>
        </section>
    );
}

export default Login;
