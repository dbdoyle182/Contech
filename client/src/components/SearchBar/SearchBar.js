import React from "react";
import "./SearchBar.css";

const SearchBar = props => (
    <div className="button_box2">
        <form className="form-wrapper-2 cf">
        <input type="text" placeholder="Search here..." required/>
        <button type="submit">Search</button>
        </form>
    </div>
);

export default SearchBar;