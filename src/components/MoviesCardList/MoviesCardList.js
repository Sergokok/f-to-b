import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

import movie1 from '../../images/movie_1.jpg';
import movie2 from '../../images/movie_2.jpg';
import movie3 from '../../images/movie_3.jpg';
import movie4 from '../../images/movie_4.jpg';
import movie5 from '../../images/movie_5.jpg';
import movie6 from '../../images/movie_6.jpg';
import movie7 from '../../images/movie_7.jpg';
import movie8 from '../../images/movie_8.jpg';
import movie9 from '../../images/movie_9.jpg';
import movie10 from '../../images/movie_10.jpg';
import movie11 from '../../images/movie_11.jpg';
import movie12 from '../../images/movie_12.jpg';

const moviesListArray = [
    {
        id: 1,
        imgMovie: movie1,
        title: '33 слова о дизайне',
        duration: 107,
        isLiked: false,
    },
    {
        id: 2,
        imgMovie: movie2,
        title: 'Киноальманах «100 лет дизайна»',
        duration: 63,
        isLiked: true,
    },
    {
        id: 3,
        imgMovie: movie3,
        title: 'В погоне за Бенкси',
        duration: 102,
        isLiked: false,
    },
    {
        id: 4,
        imgMovie: movie4,
        title: 'Баския: Взрыв реальности',
        duration: 81,
        isLiked: true,
    },
    {
        id: 5,
        imgMovie: movie5,
        title: 'Бег это свобода',
        duration: 104,
        isLiked: false,
    },
    {
        id: 6,
        imgMovie: movie6,
        title: 'Книготорговцы',
        duration: 97,
        isLiked: true,
    },
    {
        id: 7,
        imgMovie: movie7,
        title: 'Когда я думаю о Германии ночью',
        duration: 116,
        isLiked: false,
    },
    {
        id: 8,
        imgMovie: movie8,
        title: 'Gimme Danger: История Игги и The Stooge...',
        duration: 119,
        isLiked: false,
    },
    {
        id: 9,
        imgMovie: movie9,
        title: 'Дженис: Маленькая девочка грустит',
        duration: 102,
        isLiked: true,
    },
    {
        id: 10,
        imgMovie: movie10,
        title: 'Соберись перед прыжком',
        duration: 70,
        isLiked: true,
    },
    {
        id: 11,
        imgMovie: movie11,
        title: 'Пи Джей Харви: A dog called money',
        duration: 64,
        isLiked: false,
    },
    {
        id: 12,
        imgMovie: movie12,
        title: 'По волнам: Искусство звука в кино',
        duration: 67,
        isLiked: false,
    }
];

let movieList = moviesListArray.map((movie) =>
    <MoviesCard key={movie.id} movie={movie} />
);

function MoviesCardList() {
    return (
        <section className="movies-cards-list">
            <div className='movies-cards-list__list'>{movieList}</div>
        </section>
    )
}

export default MoviesCardList;
