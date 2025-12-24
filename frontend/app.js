var app = angular.module("evoteApp", []);

app.controller("RegisterCtrl", function($scope, $http){
  $scope.register = function(){
    $http.post("../backend/api/register.php", $scope.user)
    .then(res => alert(res.data.message));
  }
});
