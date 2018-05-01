import React from "react";
import "./SearchBar.css";

const SearchBar = props => (
   <div>
        <form className="inputbox">
        <input type="text" placeholder="Search here..." required/>
        <button className="del" type="submit"></button>
        </form>
    </div>
);

export default SearchBar;