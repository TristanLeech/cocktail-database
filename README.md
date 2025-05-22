
# Cocktail Database

This site has been designed to showcase various cocktails making use of an API providing data and images, as well as ChartJs to help make sense of this data.




## Authors

- [Tristan Leech](https://github.com/TristanLeech)

# How to run locally

To run the site there are two main steps after opening the folder in VSCode:

- Install the required dependencies found under "dependencies" in the package.json file. This can be done by typing the name listed after "npm install "
- Open the site by typing "npm start" into the integrated terminal
- If the site opens to a page containing only headings, click one of the navbar links to take you to the pages required.

## Features

- Home Page provides a random cocktail as well as the ingredients, and a fetched image
- The Graph Page provides a cocktail with a stacked bar chart representing the ratios of the ingredients of the cocktail
- The Comparison page compares the volumes of different cocktails


## API Reference

#### Get all items

```http
  [The CocktailDB API](https://www.thecocktaildb.com/api.php)
```

#### API Documentation Below
 Free Cocktail API Support
The API and site will always remain free to access at its basic level.

 Test API Key
You can use the test API key "1" during development of your app or for educational use (see test links below)
However you must sign up to Premium API for a small one-off fee if you want a production API key if releasing publicly on an appstore.

 API Upgrade
All Premium API subscribers have access to the beta version of the API which allows mutiple ingredient filters.
Supporters also get special lookups for Popular and Recent Cocktails. You can also list the full database rather than limited to 100 items.
You also get access to the latest and random image API methods.
Go Premium ($10)

 Contact
Email: thedatadb@gmail.com

V1 API
 API Methods using the developer test key '1' in the URL

Search cocktail by name
www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

List all cocktails by first letter
www.thecocktaildb.com/api/json/v1/1/search.php?f=a

Search ingredient by name
www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka

Lookup full cocktail details by id
www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

Lookup ingredient by ID
www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552

Lookup a random cocktail
www.thecocktaildb.com/api/json/v1/1/random.php

Lookup a selection of 10 random cocktails *Premium API only
www.thecocktaildb.com/api/json/v1/1/randomselection.php

List Popular cocktails *Premium API only
www.thecocktaildb.com/api/json/v1/1/popular.php

List most latest cocktails *Premium API only
www.thecocktaildb.com/api/json/v1/1/latest.php

Search by ingredient
www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka

Filter by multi-ingredient *Premium API only
www.thecocktaildb.com/api/json/v1/1/filter.php?i=Dry_Vermouth,Gin,Anis

Filter by alcoholic
www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic

Filter by Category
www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail

Filter by Glass
www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass
www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute

List the categories, glasses, ingredients or alcoholic filters
www.thecocktaildb.com/api/json/v1/1/list.php?c=list
www.thecocktaildb.com/api/json/v1/1/list.php?g=list
www.thecocktaildb.com/api/json/v1/1/list.php?i=list
www.thecocktaildb.com/api/json/v1/1/list.php?a=list


 Images
Drink thumbnails
Add /small to the end of the cocktail image URL
/images/media/drink/vrwquq1478252802.jpg/small (200x200 px)
/images/media/drink/vrwquq1478252802.jpg/medium (350x350 px)
/images/media/drink/vrwquq1478252802.jpg/large (500x500 px)


Ingredient Thumbnails
www.thecocktaildb.com/images/ingredients/gin-small.png
(100x100 px)
www.thecocktaildb.com/images/ingredients/gin-medium.png
(350x350 px)
www.thecocktaildb.com/images/ingredients/gin.png
(700x700 px)

## Acknowledgements

 - The Open Window Institute, for provision of education and assistance
  - Tsungai Katsuro for assisting in contact sessions and teaching coding
 - Student Licenced Adobe [Stock Background](https://stock.adobe.com/za/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bfetch_excluded_assets%5D=1&filters%5Binclude_stock_enterprise%5D=1&filters%5Bcontent_type%3Aimage%5D=1&filters%5Borientation%5D=horizontal&k=cocktail+ingredients+wallpaper+white+background&order=relevance&limit=100&search_page=1&search_type=usertyped&acp=&aco=cocktail+ingredients+wallpaper+white+background&get_facets=0&asset_id=1154464576)
 - [readme.so Website](https://readme.so/editor), for assistance in making this readme file more legible.


## Appendix

:')