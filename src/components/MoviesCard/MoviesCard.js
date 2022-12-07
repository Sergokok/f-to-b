import React from "react";
import {useLocation} from 'react-router-dom';
import "./MoviesCard.css";

const MoviesCard = ({
    movie,
    onLike,
    savedMovies,
    onDislike
}) => {

    const location = useLocation();
    // const { title, imgMovie, duration, isLiked } = movie;

    const durationTime =`${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`;

    const imageCover = location.pathname === '/saved-movies' ? movie.image : `https://api.nomoreparties.co${movie.image.url}`;
    const thumbnail = location.pathname === '/saved-movies' ? movie.thumbnail : `$https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
    // старый лайк

    // const cardLikeButtonClassName = `movies-card__like-button ${isLiked  && 'movies-card__like-button_active' }`
    // новый лайк

    const isLiked = savedMovies.some((i) => i.movieId === movie.id);

    function handleLike () {
    if (isLiked) {
        onDislike(savedMovies.filter((i) =>
            i.movieId === movie.id)[0]);
    } else {
        onLike(movie);
    }

}
    function handleDislike() {
    onDislike(movie)

}

    return (
        <section className="movies-card">
            <div className="movies-card__container">
                {location.pathname === '/movies' && (
                    <a
                        className="movies-card__trailer-link"
                        target={'_blank'}
                        rel="noreferrer"
                        href={movie.trailer}>
                        <img
                            className="movies-card__img"
                            src={`${imageCover}`}
                            alt={`Обложка фильма: ${thumbnail}`}
                        />
                    </a>
                )}

                {location.pathname === '/saved-movies' && (
                    <a
                        className="movies-card__trailer-link"
                        target={'_blank'}
                        rel='noreferrer'
                        href={movie.trailer}>
                        <img
                            className="movies-card__img"
                            src={`${imageCover}`}
                            alt={`Обложка фильма: ${thumbnail}`}
                        />
                    </a>
                )}

                {location.pathname === '/movies' && (
                <a
                    className="movies-card__trailer-link"
                    target={'_blank'}
                    rel='noreferrer'
                    href={movie.trailer}>
                    <img
                        className="movies-card__img"
                        src={`${imageCover}`}
                        alt={`Обложка фильма: ${thumbnail}`}
                    />
                </a>
                )}

                <div className="movies-card__info">
                    <h2 className="movies-card__title">{movie.nameRU}</h2>
                    {location.pathname === '/movies' && (
                        <button
                            className={`movies-card__like-button ${isLiked && 'movies-card__like-button_active' }`}
                            onClick={handleLike}
                            type="button"
                        >{}
                        </button>
                    )}

                    {location.pathname === '/saved-movies' && (
                        <button
                            className='movies-card__delete'
                            type={'button'}
                            onClick={handleDislike}
                        >{}
                        </button>
                    )}
                    <p className="movies-card__length">{durationTime}</p>

                </div>
            </div>
        </section>
    )
}

export default MoviesCard;
