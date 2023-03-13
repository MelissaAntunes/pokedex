app.factory("pokemonsAPI", function($http, config) {

    var _getPokemons = function() {
		return $http.get(config.baseUrl + "/pokemons");
	};

    var _getPokemon = function(id){
        return $http.get(config.baseUrl + "/pokemons/" + id);
    };
    return {
        getPokemons: _getPokemons,
        getPokemon: _getPokemon

    };
});