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

const thresholdHeight = 1.5;

pokemonList.forEach((pokemon) => {
    const pokemonName = pokemon.name;
    const pokemonHeight = pokemon.height;

    let label = '';

    if (pokemonHeight > thresholdHeight) {
        label = " - Wow that's a big pokemon!";
    }

    document.write(`${pokemonName} (height: ${pokemonHeight}${label})<br>`);
});