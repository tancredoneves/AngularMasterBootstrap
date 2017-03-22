var app = angular.module("filmoteca", ['ngMask', 'ngRoute']);

app.config(function ($routeProvider, $locationProvider) {

    $routeProvider
        .when("/", { templateUrl: "/cliente/html/lista.html", controller: "listaController" })
        .when("/detalhes/:id", { templateUrl: "/cliente/html/detalhes.html", controller: "detalhesController" })
        .otherwise({ redirecTo: "/" });


    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    app.constant("filmeApiUrl", "/api/filme/");
});