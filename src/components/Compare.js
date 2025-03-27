import React from 'react';
import "./compare.css";
import CompareGraph from "./comparison.js";

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
            <div class="comparegraphstyle">
                <div style={{ flex: 1, maxWidth: "1000px" }}>
                    <CompareGraph />
                </div>
            </div>
            
        </body>
    );
};

export default Compare;