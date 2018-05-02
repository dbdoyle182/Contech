import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import TermMain from "../TermMain";
import TermTags from "../TermTags";
import TermRelevant from "../TermRelevant";
import TermExtended from "../TermExtended";
import TermComments from "../TermComments";
import SearchBar from "../SearchBar";

const TermPage = () => (
    
    <Card className='container'>
        <CardTitle />
        <SearchBar/>
        <div className="TermPage-flex-container">
            <div className="row">
                <div>
                    <TermMain/>
                </div>
                <div className="TermPage-flex-container25">
                    <TermTags/>
                    <TermRelevant/>
                </div>
            </div>
            <TermExtended/>
            <TermComments/>
        </div>
    </Card>
);

export default TermPage;