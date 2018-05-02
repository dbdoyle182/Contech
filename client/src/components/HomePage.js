import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import SearchBar from "./SearchBar/SearchBar";
import Browse from "./Browse/Browse";
import Quiz from "./Quiz/Quiz";
import WordOfTheDay from "./WordOfTheDay/WordOfTheDay";
import "./HomePage.css";

const HomePage = () => (
    
    <Card className='container'>
        <CardTitle title="ConTech" subtitle="Putting tech into context." />
        <SearchBar/>
        <div className="flex-container">
            <Browse/>
            <Quiz/>
            <WordOfTheDay/>
        </div>
    </Card>
);

export default HomePage;