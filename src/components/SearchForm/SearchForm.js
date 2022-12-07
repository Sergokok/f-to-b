import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = ({ onSubmit, checkClick, searchKeyword, isShort }) => {

    const location = useLocation();

    const [movie, setMovies] = useState("");

    useEffect(() => {
        if (searchKeyword && location.pathname === "/movies") {
            setMovies(searchKeyword);
        }
    }, []);

    const handleInputChange = (event) => {
        setMovies(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        onSubmit(movie);
    }

    return (
        <section className="search-form">
            <form className="search-form__container" onSubmit={handleSearch}>
                <input
                    type="search"
                    className="search-form__input"
                    placeholder="Фильм"
                    required={true}
                    onChange={handleInputChange}
                    value={movie}
                />
                <button className="search-form__button" type="submit">Поиск</button>
            </form>
            <FilterCheckbox
                checkClick={checkClick}
                isShort={isShort}
            />
        </section>
    )
}

export default SearchForm;

// function SearchForm() {
//     return (
//         <section className="search-form">
//             <form className="search-form__container">
//                 <input className="search-form__input" type="text" placeholder="Фильм" required/>
//                 <button className="search-form__button" type="submit">Поиск</button>
//             </form>
//             <FilterCheckbox />
//         </section>
//     )
// }

// export default SearchForm;
