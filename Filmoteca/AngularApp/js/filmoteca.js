﻿(function () {

    var app = angular.module("filmoteca", ["ngRoute"]);

    var config = function ($routeProvider) {

        $routeProvider
        .when("/",
               { templateUrl: "/cliente/html/lista.html", controller: "listaController" })
        .when("/detalhes/:id",
               { templateUrl: "/cliente/html/detalhes.html", controller: "detalhesController" })
        .otherwise(
               { redirecTo: "/"});
    };
    app.config(config);
    app.constant("filmeApiUrl", "/api/filme/");
}());
