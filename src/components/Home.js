import React from 'react';
import "./home.css";

console.log("Home component loaded.");

var ingredientsCopy = [];
var measurementsCopy = [];

const fetchIngredients = async () => {
    try {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const data = await response.json();
        const drinkName = [];
        const ingredients = [];
        const measurements = [];
        drinkName.push(data.drinks[0]['strDrink']);
        ingredientsCopy = [...ingredients];
        measurementsCopy = measurements;

        for (let i = 1; i <= 15; i++) {
            const ingredient = data.drinks[0][`strIngredient${i}`];
            if (ingredient) {
                ingredients.push(ingredient);
            }
            const measurement = data.drinks[0][`strMeasure${i}`];
            if (measurement) {
                measurements.push(measurement);
            }
        }
        console.log(drinkName);
        console.log(ingredients);
        console.log(measurements);
        document.getElementById("randomCocktailName").innerHTML = drinkName;
        document.getElementById("randomImage").innerHTML = `<img src="${data.drinks[0]['strDrinkThumb']}" height="350px"/>`;
        document.getElementById("ingredientsList").innerHTML = ingredients.map(ingredient => `<li style="display: list-item;">${ingredient}</li>`).join('');
        document.getElementById("amountsList").innerHTML = measurements.map(measurement => `<li style="display: block;">${measurement}</li>`).join('');
        return drinkName;
    } catch (error) {
        console.error("Error fetching random cocktail:", error);
        return [];
    }
};

console.log("HELLO HELLO HELLO"+ingredientsCopy);
fetchIngredients();

const Home = () => {
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
            <div class="randomCocktail">
                <h2>Random Cocktail</h2>
                <h1 id="randomCocktailName"></h1>
                <div class="cockImage" id="randomImage"></div>
                <div class="recipe">
                    <div class="bulletList">
                        <h2>Ingredients</h2>
                        <p>
                            <ul id="ingredientsList">
                                
                            </ul>
                        </p>
                        
                    </div>
                    <div class="bulletList">
                        <h2>Amounts</h2>
                        <ul id="amountsList">
                            
                        </ul>
                    </div>

                    
                </div>
            </div>
        </body>
    );
};

export default Home;