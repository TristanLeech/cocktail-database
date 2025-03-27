import React from 'react';
import "./home.css";

const Graphs = () => {
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

            <div class="graphPage">
                

                <div class="graphCocktail">
                    <h2>Ingredient Graph</h2>
                    <h1 id="randomCocktailName"></h1>
                    <div class="cockImage" id="randomImage"></div>
                </div>
            </div>
            
        </body>
    );
};

export default Graphs;