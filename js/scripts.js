// Array containing Pokémon objects
const pokemonList = [
    {
        name: "Charizard",
        type: ['fire', 'Flying'],
        species: 'Lizard',
        height: 1.7
    },
    {
        name: "Pikachu",
        type: ['Electric'],
        species: 'Mouse',
        height: 0.4
    },
    {
        name: "Squirtle",
        type: ['Water'],
        species: 'Turtle',
        height: 0.5
    }
];

// Define the threshold height for a special Pokémon
const thresholdHeight = 1.5;

// Iterate over each Pokémon object in the pokemonList array
for (let i = 0; i < pokemonList.length; i++) {
    // Get the name and height of the Pokémon
    const pokemonName = pokemonList[i].name;
    const pokemonHeight = pokemonList[i].height;
    
    // Initialize a variable to store the label
    let label = '';
    
    // Check if the Pokémon's height is above the threshold
    if (pokemonHeight > thresholdHeight) {
        label = " - Wow that's a big pokemon!";
    }
    
    // Write the Pokémon name, height, and label to the DOM
    document.write(`${pokemonName} (height: ${pokemonHeight}${label})<br>`);
}