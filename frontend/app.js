
var app = angular.module("evoteApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/login", {
            templateUrl: "login.html",
            controller: "LoginCtrl"
        })
        .when("/register", {
            templateUrl: "register.html",
            controller: "RegisterController"
        })
        .when("/vote", {
            templateUrl: "vote.html",
            controller: "VoteController"
        })
        .when("/admin", {
            templateUrl: "admin.html",
            controller: "AdminController"
        })
        .otherwise({
            redirectTo: "/login"
        });
});
