const loadingMessage = document.querySelector('.loading-message');

function showLoadingMessage() {
  loadingMessage.style.display = 'block';
}

function hideLoadingMessage() {
  loadingMessage.style.display = 'none';
}

const pokemonRepository = (function () {
    // Array containing Pokémon objects
    const pokemonList = [];
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

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
            'detailsUrl' in pokemon
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
        loadDetails(pokemon).then(function () {
            console.log(pokemon); // Log Pokémon details
        });
    }

    function addListItem(pokemon) {
        const listItem = createListItem(pokemon);

        // Append the <li> element to the 'pokemon-list' ul in the HTML
        pokemonListElement.appendChild(listItem);
    }

    function loadList() {
        return fetch(apiUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                data.results.forEach(function (item) {
                    const pokemon = {
                        name: item.name,
                        detailsUrl: item.url,
                    };
                    add(pokemon);
                });
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    function loadDetails(pokemon) {
        const url = pokemon.detailsUrl;
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (details) {
                pokemon.imgUrl = details.sprites.front_default;
                pokemon.height = details.height;
                // Add more details if needed
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    // Return the public functions and variables
    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
    };
})();

// Call the LoadList() function and then execute getAll from the pokemonRepository
pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});
