(function (app) {
    var detalhesController = function ($scope, $routeParams, filmeService) {
        var id = $routeParams.id;

        filmeService
            .getFilmePorId(id)
            .success(function (data) {
                $scope.filme = data;
            });
    };
    app.controller("detalhesController", detalhesController)
}(angular.module("filmoteca")));