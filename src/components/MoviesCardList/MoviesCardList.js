import React, { useEffect, useState, useCallback } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import {useLocation} from "react-router-dom";

const MoviesCardList = ({
    movies,
    onLike,
    onDislike,
    savedMovies,
    searchKeyword,
    noResults
}) => {

    const location = useLocation();
    const [addCards, setAddCards] = React.useState(12);
    const [currentCards, setCurrentCards] = React.useState(0);
    const [moviesToShow, setMoviesToShow] = React.useState([]);
    const [hiddenButton, setHiddenButton] = React.useState(false);

    const getCards = (windowSize) => {
        if (windowSize > 1200) {
            return {first: 12, extra: 3};
        } else if (windowSize > 785) {
            return {first: 12, extra: 2};
        }
        return {first: 12, extra: 1};
    }

    const renderAddCards = React.useCallback(() => {
        const count = Math.min(movies.length, currentCards + addCards);
        const moreCards = movies.slice(currentCards, count);
        setMoviesToShow([...moviesToShow, ...moreCards]);
        setCurrentCards(count);
    }, [currentCards, addCards, movies, moviesToShow]);

    useEffect(() => {
        let windowSize = window.innerWidth;
        setAddCards(getCards(windowSize).extra);
        const count = Math.min(movies.length, getCards(windowSize).first);
        setMoviesToShow(movies.slice(0, count));
        setCurrentCards(count);
    }, [movies]);

    useEffect(() => {
        if ((currentCards > movies.length) || (currentCards === movies.length)) {
            setHiddenButton(true);
        }
    }, [currentCards, movies.length]);

    useEffect(() => {
        function handleResize() {
            setAddCards(getCards(window.innerWidth).extra);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const renderMovies = useCallback(() => {
        renderAddCards();
    }, [renderAddCards]);

    if(location.pathname === '/movies') {
        return (
            <section className='movies-card__list'>
                <ul className='movies-card-list__list'>
                    {movies.length ? (
                        moviesToShow.map((movie) =>
                            <MoviesCard
                                key={movie.id}
                                movie={movie}
                                onLike={onLike}
                                onDislike={onDislike}
                                savedMovies={savedMovies}
                            />
                        )
                    ) : (
                        <p className={`'movies-card__no-result'${searchKeyword &&
                        'movies-card__no-result_active'}`}
                        >По вашему запросу ничего не найдено
                        </p>
                    )
                    }
                </ul>

                <button
                    className={`movies-card__button-more ${
                        ((currentCards > movies.length) || (currentCards === movies.length)) &&
                        'movies-card__button-more_hidden'
                    }`}
                    type={'button'}
                    onClick={renderMovies}
                >Ещё
                </button>
            </section>
        )
    } else if (location.pathname === '/saved-movies') {
        return (
            <section className='movies-card__list'>
                <ul className='movies-card-list__list'>
                    {movies.length ? (
                        moviesToShow.map((movie) =>
                            <MoviesCard
                                key={movie._id}
                                movie={movie}
                                onLike={onLike}
                                onDislike={onDislike}
                                savedMovies={savedMovies}
                            />
                        )
                    ) : (
                        <p className={`'movies-card__no-result'${noResults &&
                        'movies-card__no-result_active'}`}
                        >По вашему запросу ничего не найдено
                        </p>
                    )}
                </ul>
            </section>
        )
    }
}

export default MoviesCardList;


//
// import movie1 from '../../images/movie_1.jpg';
// import movie2 from '../../images/movie_2.jpg';
// import movie3 from '../../images/movie_3.jpg';
// import movie4 from '../../images/movie_4.jpg';
// import movie5 from '../../images/movie_5.jpg';
// import movie6 from '../../images/movie_6.jpg';
// import movie7 from '../../images/movie_7.jpg';
// import movie8 from '../../images/movie_8.jpg';
// import movie9 from '../../images/movie_9.jpg';
// import movie10 from '../../images/movie_10.jpg';
// import movie11 from '../../images/movie_11.jpg';
// import movie12 from '../../images/movie_12.jpg';
//
// const moviesListArray = [
//     {
//         id: 1,
//         imgMovie: movie1,
//         title: '33 слова о дизайне',
//         duration: 107,
//         isLiked: false,
//     },
//     {
//         id: 2,
//         imgMovie: movie2,
//         title: 'Киноальманах «100 лет дизайна»',
//         duration: 63,
//         isLiked: true,
//     },
//     {
//         id: 3,
//         imgMovie: movie3,
//         title: 'В погоне за Бенкси',
//         duration: 102,
//         isLiked: false,
//     },
//     {
//         id: 4,
//         imgMovie: movie4,
//         title: 'Баския: Взрыв реальности',
//         duration: 81,
//         isLiked: true,
//     },
//     {
//         id: 5,
//         imgMovie: movie5,
//         title: 'Бег это свобода',
//         duration: 104,
//         isLiked: false,
//     },
//     {
//         id: 6,
//         imgMovie: movie6,
//         title: 'Книготорговцы',
//         duration: 97,
//         isLiked: true,
//     },
//     {
//         id: 7,
//         imgMovie: movie7,
//         title: 'Когда я думаю о Германии ночью',
//         duration: 116,
//         isLiked: false,
//     },
//     {
//         id: 8,
//         imgMovie: movie8,
//         title: 'Gimme Danger: История Игги и The Stooge...',
//         duration: 119,
//         isLiked: false,
//     },
//     {
//         id: 9,
//         imgMovie: movie9,
//         title: 'Дженис: Маленькая девочка грустит',
//         duration: 102,
//         isLiked: true,
//     },
//     {
//         id: 10,
//         imgMovie: movie10,
//         title: 'Соберись перед прыжком',
//         duration: 70,
//         isLiked: true,
//     },
//     {
//         id: 11,
//         imgMovie: movie11,
//         title: 'Пи Джей Харви: A dog called money',
//         duration: 64,
//         isLiked: false,
//     },
//     {
//         id: 12,
//         imgMovie: movie12,
//         title: 'По волнам: Искусство звука в кино',
//         duration: 67,
//         isLiked: false,
//     }
// ];
//
// let movieList = moviesListArray.map((movie) =>
//     <MoviesCard key={movie.id} movie={movie} />
// );
//
// function MoviesCardList() {
//     return (
//         <section className="movies-cards-list">
//             <div className='movies-cards-list__list'>{movieList}</div>
//         </section>
//     )
// }

    // export default MoviesCardList;
// export default class MoviesCardList {

