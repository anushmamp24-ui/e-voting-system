app.controller("VoteController", function ($scope, $http, $location) {

    // AUTH GUARD
    if (!localStorage.getItem("loggedIn")) {
        $location.path("/login");
        return;
    }

    $scope.candidates = [];

    // Load candidates
    $http.get("backend/api/getCandidates.php")
        .then(function (response) {
            $scope.candidates = response.data;
        });

    // Vote function
    $scope.vote = function (candidateId) {

        $http.post("backend/api/vote.php", {
            candidate_id: candidateId
        }).then(function () {
            alert("Vote submitted successfully");
        }, function () {
            alert("You have already voted");
        });
    };

});
