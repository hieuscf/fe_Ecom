import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBox = (props) => {
    return (
        <form className="d-flex mx-auto">
            <input
                className="form-control me-2 search-input"
                type="search"
                placeholder="Search for products, brands and more"
                aria-label="Search"
            />
            <button className="btn btn-light" type="submit">
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{ color: "#74C0FC" }}
                />
            </button>
        </form>
    );
};

export default SearchBox;
