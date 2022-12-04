import React, { useState, useEffect } from "react";
import './App.css';
import {Route, Routes, matchPath, useLocation, useNavigate, Navigate, BrowserRouter} from 'react-router-dom';
import * as mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';



function App() {
    const history = useNavigate();
    const location = useLocation();
    const jwt = localStorage.getItem('jwt');

    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);

    // вот тут разобаться с роутингом по-новому 6й версии
    const { pathname } = useLocation();
    const isHeaderVisible = matchPath({ path: '/', exact: true }, pathname) || matchPath({ path: '/movies', exact: true }, pathname) || matchPath({ path: '/saved-movies', exact: true }, pathname) || matchPath({ path: '/profile', exact: true }, pathname);
    const isFooterVisible = matchPath({ path: '/', exact: true }, pathname) || matchPath({ path: '/movies', exact: true }, pathname) || matchPath({ path: '/saved-movies', exact: true }, pathname);

    const [profileMessage, setProfileMessage] = useState('');
    const [registerMessage, setRegisterMessage] = useState('');
    const [loginMessage, setLoginMessage] = useState('');

    useEffect(() => {
        if (localStorage.getItem('jwt')) {
            // проверяем, есть ли токен в localStorage = потом удалить надо
            console.log('log from use effect');
            console.log(localStorage.getItem('jwt'));

            mainApi
                .getUserInfo(localStorage.getItem('jwt'))
                .then(() => {
                    setLoggedIn(true);
                    history.push(location.pathname);
                })
                .catch((err) => console.log(err));
        }
    }, []);

    useEffect(() => {
        if (loggedIn) {
            console.log('log from use effect');
            console.log(localStorage.getItem('jwt'));
            mainApi
                .getUserInfo(localStorage.getItem('jwt'))
                .then((user) => setCurrentUser(user))
                .catch((err) => {
                    console.log(`Ошибка получения данных пользователя: ${err}`);
                });

        }
    }, [loggedIn])

    const onRegister = ({ name, password, email }) => {
        mainApi
            .signup ({ name, password, email })
            .then((res) => {
                if (res) {
                    onLogin({ email, password });
                    setRegisterMessage('Регистрация прошла успешно...');
                }
            })
            .catch ((err) => {
                setRegisterMessage('Одно или несколько полей заполнены неверно. Попробуйте ещё раз.');
            })
    }

    const onLogin = ({ email, password }) => {
        mainApi
            .signin ({ email, password })
            .then ((data) => {
                localStorage.setItem('jwt', data.token);
                setLoggedIn(true);
                mainApi.getUserInfo(localStorage.getItem('jwt'))
                    .then((response) => {
                        setCurrentUser(response);
                    });
                setLoginMessage('Авторизация прошла успешно. Вы будете перенаправлены на страницу.');
                history.push('/movies');
            })
            .catch ((err) => {
                setLoginMessage('Неправильный логин или пароль. Попробуйте еще раз.');
            })
    }

    const handleUpdateUser = (user) => {
        mainApi
            .setUserInfo (user, localStorage.getItem('jwt'))
            .then ((userInfo) => {
                setProfileMessage('Данные пользователя успешно обновлены');
                setCurrentUser(userInfo);
            })
            .catch ((err) => {
                setProfileMessage('Ошибка редактирования данных профиля. Попробуйте ещё раз.');
            })
    }

    const signOut = () => {
        localStorage.removeItem('jwt');
        setLoggedIn(false);
        setCurrentUser({});
        setProfileMessage('');
        setRegisterMessage('');
        setLoginMessage('');
    }



    return (
        <CurrentUserContext.Provider value={currentUser}>
        <div className="app">
            {/*вот тут разобаться с роутингом по-новому 6й версии*/}
            {isHeaderVisible && <Header />}
            <BrowserRouter>
            <Routes>
                <Route>

                </Route>
                <Route  path="/"
                    element={<Main
                    loggedIn={loggedIn}/>}
                />

                <Route path="/signin"
                       element={<Login
                           onAuth={onLogin}
                           loginMessage={loginMessage}
                       />} />

                <Route path="/signup"
                       element={<Register
                            onAuth={onRegister}
                            registerMessage={registerMessage}
                       />} />

                <Route path="/movies"
                       element={<Movies
                           exact
                           component={Movies}
                           loggedIn={loggedIn}
                       />} />

                <Route path="/saved-movies"
                       element={<SavedMovies
                            loggedIn={loggedIn}
                       />} />

                <Route path="/profile"
                       element={<Profile
                           exact
                            component={Profile}
                            loggedIn={loggedIn}
                            onUpdateUser={handleUpdateUser}
                            profileMessage={profileMessage}
                            signOut={signOut}
                       />} />

                <Route path={"*"}
                       element={<NotFound
                       />} />
            </Routes>
            </BrowserRouter>
            {isFooterVisible && <Footer />}
        </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
