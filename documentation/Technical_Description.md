# Brief Technical Breakdown

This site has been created to compare and contrast attributes of cocktails from an API, namely using the properties:
- Name
- An Image of each one
- Their Ingredients
- The amounts of these ingredients


## Please Note

This site is lacking functionality, but the intended outcomes for each component are explained below

## Pages

The site contains the following pages.
- Home: Displays a random cocktail fetched from the API, listing name, photo, and two bulleted lists of ingredients and their corresponding amounts.
- Graphs: Intended to display a photo of the cocktail accompanied by a visual representation of their ingredients in a stacked line graph with the ratios of each ingredient represented by a corresponding coloured section, intended to look like a glass containing layered ingredients. Adding milliliter converters for each unpredictable measurement system given by the API caused problems, with some listings using oranges as a unit of measurement
- Comparisons: Encountering similar problems to the Graphs page, this was intended to fetch five random cocktails, and compare their respective additive total volumes in a bar graph, showcasing the volume difference between things such as a shooter or a jug

## Data Handling

The API gives large quantities of raw data, which needs to be selectively filtered and stored as either strings or arrays. 