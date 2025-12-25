app.controller("AdminController", function ($scope, $http, $location) {

    // ADMIN AUTH GUARD
    if (!localStorage.getItem("adminLoggedIn")) {
        $location.path("/login");
        return;
    }

    $scope.results = [];

    $http.get("backend/api/results.php")
        .then(function (response) {
            $scope.results = response.data;
        });

});
