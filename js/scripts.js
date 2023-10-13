// Wrap your code in an immediately-invoked function expression (IIFE) to create a private scope.
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

    // Get the ul element with the class 'pokemon-list'
    const pokemonListElement = document.querySelector('.pokemon-list');

    // Public functions and variables (accessible from outside)
    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        // Add a new Pokémon to the list if it's an object with the correct properties
        if (isValidPokemon(pokemon)) {
            pokemonList.push(pokemon);
        } else {
            console.error('Invalid Pokémon object:', pokemon);
        }
    }

    function isValidPokemon(pokemon) {
        return (
            typeof pokemon === 'object' &&
            'name' in pokemon &&
            'type' in pokemon &&
            'species' in pokemon &&
            'height' in pokemon
        );
    }

    function createListItem(pokemon) {
        // Create an <li> element
        const listItem = document.createElement('li');

        // Create a <button> element
        const button = document.createElement('button');

        // Set the innerText of the button to the Pokémon's name
        button.innerText = pokemon.name;

        // Add a class to the button using classList.add
        button.classList.add('custom-button');

        // Add an event listener to the button to call showDetails when clicked
        button.addEventListener('click', function () {
            showDetails(pokemon);
        });

        // Append the button to the <li> element
        listItem.appendChild(button);

        return listItem;
    }

    function showDetails(pokemon) {
        console.log(pokemon); // Log Pokémon details (you can do more with this function later)
    }

    function addListItem(pokemon) {
        const listItem = createListItem(pokemon);

        // Append the <li> element to the 'pokemon-list' ul in the HTML
        pokemonListElement.appendChild(listItem);
    }

    // Return the public functions and variables
    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
    };
})();

// Iterate over the Pokémon list using forEach and add them to the list
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});
