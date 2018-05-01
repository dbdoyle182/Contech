import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import TermMain from "./TermMain";
import TermTags from "./TermTags";
import TermRelevant from "./TermRelevant";
import TermExtended from "./TermExtended";


const TermPage = () => (
    
    <Card className='container'>
        <CardTitle title="React Application" subtitle="This is the term page." />
        <SearchBar/>
        <div className="flex-container">
            <Browse/>
            <Quiz/>
            <WordOfTheDay/>
        </div>
    </Card>
);

export default TermPage;