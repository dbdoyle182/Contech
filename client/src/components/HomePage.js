import React from "react";
import { Card } from "material-ui/Card";
import SearchBar from "./SearchBar/SearchBar";
import Browse from "./Browse/Browse";
import Quiz from "./Quiz/Quiz";
import WordOfTheDay from "./WordOfTheDay/WordOfTheDay";
import "./HomePage.css";

const HomePage = () => (
  <Card className="container">
    <div className="homepage">
      <div className="main-header">
        <h1 className="main-title">ConTECH</h1>
        <h3 className="subtitle">Putting tech into context.</h3>
        <div className="search-container">
          <SearchBar />
        </div>
        <Browse />
      </div>
      <div className="flex-container">
        <Quiz />
        <WordOfTheDay />
      </div>
    </div>
  </Card>
);

export default HomePage;
