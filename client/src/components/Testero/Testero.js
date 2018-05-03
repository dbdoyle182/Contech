import React from "react";
import "./Testero.css";
import { Card, CardTitle } from 'material-ui/Card';
import TermMain from "../TermMain";
import TermTags from "../TermTags";
import TermRelevant from "../TermRelevant";
import TermExtended from "../TermExtended";
import TermComments from "../TermComments";
import SearchBar from "../SearchBar";

const Testero = props => (
    <div className="entire-container">
        <div className="row-container">
            <div className="float-left">
                <TermMain />
            </div>
            <div className="float-right">
                <TermTags />
                <TermRelevant />
            </div>
        </div>
        <TermExtended/>
        <TermComments/>
    </div>
);

export default Testero;