import React from "react";
import "./Register.css";
import logo from "../../images/logo.svg";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    return (
        <section className="register">
            <img onClick={() => navigate("/")} className="register__logo" src={logo} alt="Логотип" />
            <h2 className="register__title">Добро пожаловать!</h2>
            <form className="register__form">
                <label className="register__label">Имя</label>
                <input className="register__input" type="text" required></input>
                <label className="register__label">E-mail</label>
                <input className="register__input" type="email" required />
                <label className="register__label">Пароль</label>
                <input className="register__input" type="password" required />
                <button className="register__button" type="submit">Зарегистрироваться</button>
            </form>
            <p className="register__text">Уже зарегистрированы? <a className="register__link" href="/signin">Войти</a></p>
        </section>
    );
}

export default Register;
