app.controller("pokeInfoCtrl", function ($scope, $routeParams,  pokemon) {
        $scope.pokemon = pokemon.data;
});