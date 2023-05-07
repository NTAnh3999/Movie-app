import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../../context/MovieContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBox = () => {
  const { search, setSearch } = useContext(MovieContext);
  const navigate = useNavigate();
  const { query } = search;
  function submitHandle(e) {
    e.preventDefault();
    !query ? navigate("/") : navigate(`/search/${query}`);
  }
  const inputHandle = function (e) {
    const query = e.target.value;
    setSearch((prevState) => ({ ...prevState, query }));
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
          value={query}
          onChange={inputHandle}
          autoComplete="off"
        />
      </form>
    </div>
  );
};

export default SearchBox;
