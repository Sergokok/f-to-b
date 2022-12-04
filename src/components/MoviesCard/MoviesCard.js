import React from "react";
import {useLocation} from 'react-router-dom';
import "./MoviesCard.css";

const MoviesCard = ({ movie }) => {

    const { title, imgMovie, duration, isLiked } = movie;
    const durationTime =`${Math.floor(duration / 60)}ч ${duration % 60}м`;
    const cardLikeButtonClassName = `movies-card__like-button ${isLiked && 'movies-card__like-button_active' }`
    const location = useLocation();

    return (
        <section className="movies-card">
            <div className="movies-card__container">
                <img className="movies-card__img" src = {imgMovie} alt={title} />
                <div className="movies-card__info">
                    <h3 className="movies-card__title">{title}</h3>
                    {location.pathname === '/saved-movies' ?
                        <button className="movies-card__delete"></button> :
                        <button className={cardLikeButtonClassName}></button>
                    }
                    <p className="movies-card__length">{durationTime}</p>
                </div>
            </div>
        </section>
    )
}

export default MoviesCard;
