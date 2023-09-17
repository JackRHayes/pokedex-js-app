const pokemonRepository = (function () {
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

    // Public functions and variables (accessible from outside)
    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        // Add a new Pokémon to the list if it's an object with the correct properties
        if (typeof pokemon === 'object' && 'name' in pokemon && 'type' in pokemon && 'species' in pokemon && 'height' in pokemon) {
            pokemonList.push(pokemon);
        } else {
            console.error('Invalid Pokémon object:', pokemon);
        }
    }

    // Return an object with the same names for keys as values
    return {
        getAll: getAll,
        add: add
    };
})();

// Get the div where you want to display the Pokémon list
const pokemonListElement = document.getElementById('pokemon-list');

// Define the thresholdHeight within the scope of the callback function
const thresholdHeight = 1.5;

// Iterate over the Pokémon list using forEach
pokemonRepository.getAll().forEach(function (pokemon) {
    const pokemonName = pokemon.name;
    const pokemonHeight = pokemon.height;

    let label = '';

    if (pokemonHeight > thresholdHeight) {
        label = " - Wow, that's a big Pokémon!";
    }

    // Create a new paragraph element for each Pokémon's details
    const pokemonDetails = document.createElement('p');
    pokemonDetails.textContent = `${pokemonName} (height: ${pokemonHeight}${label})`;

    // Append the paragraph element to the 'pokemon-list' div in the HTML
    pokemonListElement.appendChild(pokemonDetails);
});

// Add a new Pokémon
const newPokemon = {
    name: "Blastoise",
    type: ['Water'],
    species: 'Shellfish',
    height: 1.6
};
pokemonRepository.add(newPokemon);
