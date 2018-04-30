import React from 'react';
import { Link } from 'react-router-dom';


const BrowseBar = () => {

    const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    return (<div>
        {alpha.map(letter => (
            <Link to={`/search/${letter}`}>{(letter).toUpperCase()}</Link>
        ))}
    </div>)


}

export default BrowseBar;