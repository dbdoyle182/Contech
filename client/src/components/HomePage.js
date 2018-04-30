import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import SearchBar from "./SearchBar/SearchBar";
import Browse from "./Browse/Browse";
import Quiz from "./Quiz/Quiz";
import WordOfTheDay from "./WordOfTheDay/WordOfTheDay";

const HomePage = () => (
    <Card className='container'>
        <CardTitle title="React Application" subtitle="This is the home page." />
        <SearchBar/>
        <Browse/>
        <Quiz/>
        <WordOfTheDay/>
    </Card>
);

export default HomePage;