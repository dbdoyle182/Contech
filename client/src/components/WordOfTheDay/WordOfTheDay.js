import React from "react";
import "./WordOfTheDay.css";

const WordOfTheDay = props => (
    <div className="wordoftheday">
        <h2 className="title">Word of the Day</h2>
        <h1 className="word">React</h1>
        <p className="definition">A declarative, efficient, and flexible JavaScript library for building user interfaces.</p>
    </div>
);

export default WordOfTheDay;