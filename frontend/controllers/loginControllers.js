// // Login Controller
// app.controller("LoginCtrl", function ($scope, $http, $location) {

//     // model for login form
//     $scope.login = {};

//     // login function
//     $scope.loginUser = function () {

//         if (!$scope.login.email || !$scope.login.password) {
//             alert("Please enter email and password");
//             return;
//         }

//         // call backend API
//         $http.post("backend/api/login.php", $scope.login)
//             .then(function (response) {

//                 if (response.data.success) {
//                     alert("Login successful");

//                     // redirect to vote page
//                     $location.path("/vote");
//                 } else {
//                     alert(response.data.message);
//                 }

//             }, function () {
//                 alert("Server error");
//             });
//     };

// });
alert("LoginCtrl JS file loaded");

app.controller("LoginCtrl", function ($scope) {
    alert("LoginCtrl registered");
});
