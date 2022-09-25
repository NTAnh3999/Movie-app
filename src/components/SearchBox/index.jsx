import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../../context/MovieContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBox = () => {
    const { searchQuery, setSearchQuery } = useContext(MovieContext);
    const navigate = useNavigate();
    function submitHandle(e) {
        e.preventDefault();
        if (!searchQuery) {
            navigate("/");
        } else {
            navigate(`/search/${searchQuery}`);
        }
    }
    const inputHandle = function (e) {
        const query = e.target.value;
        setSearchQuery(query);
    };
    return (
        <div className="search-container">
            <button className="search-btn" type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <form className="search-box" onSubmit={submitHandle}>
                <input
                    id="search-input"
                    placeholder="Search for movies"
                    value={searchQuery}
                    onChange={inputHandle}
                    autoComplete="off"
                />
            </form>
        </div>
    );
};

export default SearchBox;
