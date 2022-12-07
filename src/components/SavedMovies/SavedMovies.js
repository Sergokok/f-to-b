import React, { useEffect, useState, useMemo } from "react";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

const SavedMovies = ({
    isLoading,
    savedMovies,
    onDislike,
    searchKeyword,
}) => {
    const [checkActive, setCheckActive] = useState(false);
    const [isShort, setIsShort] = useState(false);
    const [filter, setFilter] = useState("");
    const [noResults, setNoResults] = useState(true);

    const filterMoviesShort = (filterMovies) =>
        filterMovies.filter((m) => m.duration < 40);

    const checkClick = () => {
        setCheckActive(!checkActive);
        localStorage.setItem("check-box", !checkActive);
    };

    useEffect(() => {
        const checkLocal = localStorage.getItem("check-box");
        if (checkLocal === "true") {
            setIsShort(isShort);
            setCheckActive(true);
        }
    }, []);

    useEffect(() => {
        if (filterMovies.lenght === 0) {
            setNoResults(false);
        }
    }, []);

    const filterMovies = useMemo(
        () =>
            savedMovies.filter((savedMovies) =>
                savedMovies.nameRU.toLowerCase().includes(filter.toLowerCase())
            ),
        [filter, savedMovies]
    );

    return (
        <section className="saved-movies">
            <SearchForm
                onSubmit={setFilter}
                checkClick={checkClick}
                searchKeyword={searchKeyword}
                isShort={checkActive}
            />
            {isLoading && <Preloader />}
            {noResults && (
                <MoviesCardList
                    movies={filterMoviesShort(filterMovies)}
                    onDislike={onDislike}
                />
            )}
        </section>
    );
}



// function SavedMovies() {
//     return (
//         <section className="saved-movies">
//             <SearchForm />
//             <MoviesCardList />
//         </section>
//     )
// }
//
// export default SavedMovies;
