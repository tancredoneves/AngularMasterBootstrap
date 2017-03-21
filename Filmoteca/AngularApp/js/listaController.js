(function (app) {
    var listaController = function ($scope, filmeService) {
        filmeService
            .getFilmes()
            .success(function (data) {
                $scope.filmes = data;
            });
    };
    app.controller("listaController", listaController)
}(angular.module("filmoteca")));