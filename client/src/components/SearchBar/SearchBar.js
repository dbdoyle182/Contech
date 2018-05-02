import React from "react";
import "./SearchBar.css";

const SearchBar = props => (

    <div className="search">
        <form>
            <input type="text" className="search-box" required/>
            <button type="submit" value="" className="search-btn"></button>
        </form>
    </div>
    
);

export default SearchBar;