app.controller("RegisterController", function ($scope, $http, $location) {

    $scope.user = {};

    $scope.registerUser = function () {

        if (!$scope.user.name || !$scope.user.email || !$scope.user.password) {
            alert("All fields are required");
            return;
        }

        $http.post("backend/api/userregistration.php", $scope.user)
            .then(function (response) {
                alert("Registration successful");
                $location.path("/login");
            }, function () {
                alert("Registration failed");
            });
    };

});
