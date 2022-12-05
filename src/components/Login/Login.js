import React from "react";
import {Link} from "react-router-dom";
import "./Login.css";
import logo from "../../images/logo.svg";
import { useHistory } from "react-router-dom";
import {FormValidation} from "../../utils/FormValidation";

function Login({onAuth, infoMessage}) {
    const navigate = useHistory();

    const {values, handleChange, errors, isValid, resetForm} = FormValidation({});
    const {email, password} = values;

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onAuth(values);
        resetForm();
    }

    return (
        <section className="login">
            <img onClick={() => navigate("/")} className="login__logo" src={logo} alt="Логотип"/>
            <h2 className="login__title">Рады видеть!</h2>

            <form className="login__form">
                <label className="login__label">E-mail</label>
                <input className="login__input"
                       type="email"
                       name="email"
                       placeholder="pochta@yandex.ru"
                       // minLength="2"
                       // maxLength="30"
                       required={true}
                       value={email || ""}
                       onChange={handleChange}
                />
                <span
                    className={`login__error ${!isValid && 'login__error_active'}`}
                    id='login-email-error'
                >
              {errors.email}
            </span>

                <label className="login__label">Пароль</label>
                <input className="login__input"
                       type="password"
                       name="password"
                       placeholder="Пароль"
                       minLength="8"
                       maxLength="30"
                       required={true}
                       value={password || ""}
                       onChange={handleChange}
                />
                <span
                    className={`login__error ${!isValid && 'login__error_active'}`}
                    id='login-password-error'
                >
              {errors.password}
            </span>
                <button className="login__button" type="submit">Войти</button>
            </form>
            <p className="login__text">Ещё не зарегистрированы? <a className="login__link"
                                                                   href="/signup">Регистрация</a></p>
        </section>
    );
}

export default Login;
