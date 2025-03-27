import React from 'react';
import "./compare.css";

const Compare = () => {
    return (
        <body>
            <div class="topNav">
                <h1>Cocktail Comparisons</h1>
                <img id='logo' src="cocktailIcon.png" height="50px"/>
                <div id="links">
                    <a href="/home">Home</a>
                    <a href="/graphs">Graphs</a>
                    <a href="/compare">Compare</a>
                </div>
            </div>
        </body>
    );
};

export default Compare;