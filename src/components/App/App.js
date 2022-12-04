import React, { useState, useEffect } from "react";
import './App.css';
import { Route, Routes, matchPath, useLocation } from 'react-router-dom';
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
    const { pathname } = useLocation();
    const isHeaderVisible = matchPath({ path: '/', exact: true }, pathname) || matchPath({ path: '/movies', exact: true }, pathname) || matchPath({ path: '/saved-movies', exact: true }, pathname) || matchPath({ path: '/profile', exact: true }, pathname);
    const isFooterVisible = matchPath({ path: '/', exact: true }, pathname) || matchPath({ path: '/movies', exact: true }, pathname) || matchPath({ path: '/saved-movies', exact: true }, pathname);

    return (
        <div className="app">
            {isHeaderVisible && <Header />}
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/saved-movies" element={<SavedMovies />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/signin" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                <Route path={"*"} element={<NotFound />} />
            </Routes>
            {isFooterVisible && <Footer />}
        </div>
    );
}

export default App;
