import React from "react";
import "./SearchForm.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const SearchForm = props => {
  return (
    <div className={props.active ? "search-form-active" : "search-form"}>
      <input
        type="text"
        className="search-input"
        name="search"
        placeholder="관심있는 청원을 검색해보세요"
        onFocus={props.toggleClass}
        onBlur={props.toggleClass}
        onChange={props.handleChange}
        onKeyPress={props.handleSubmit}
      />
      <Link to={`/search/${props.value}`}>
        <button className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </Link>
    </div>
  );
};

export default SearchForm;
