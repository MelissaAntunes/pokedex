app.config(function ($routeProvider) {
    $routeProvider
    .when("/pokemons", {
        controller:"pokeCtrl",
        templateUrl:"view/pokedex.html",
        resolve:{
            pokemons: function(pokemonsAPI) {
                return pokemonsAPI.getPokemons();
            }
        }
    });
    $routeProvider
    .when("/pokemons/:id", {
        controller:"pokeInfoCtrl",
        templateUrl:"view/pokemons.html",
        resolve: {
            pokemon: function (pokemonsAPI, $route) {
                return pokemonsAPI.getPokemon($route.current.params.id);
            }
        }
    })
    .otherwise({
        redirectTo:"/pokemons"
    });
});