/**
 * Game App of board N * N with all cells coloured light grey
 */
angular.module('GameApp', []);

angular.module('GameApp')
    .controller('GameController', function ($scope, $interval) {

        $scope.getNumber = function (num) {
            return new Array(num);
        };

        // Initialization
        $scope.size = 3;
        $scope.score = 0;
        $scope.highest = localStorage.getItem("highest") || 0;
        $scope.gridSize = "3x3";


        $scope.setGridSize = function (size) {
            $scope.size = size;
            switch (size) {
                case 3: $scope.gridSize = "3x3"; break;
                case 4: $scope.gridSize = "4x4"; break;
                case 6: $scope.gridSize = "6x6"; break;
            }
        };

        $scope.onCellClick = function (event) {
            if (event.target.classList.contains('selected')) {
                $scope.score++;
            }
            else {
                $scope.score--;
            }
            if ($scope.score > $scope.highest) {
                $scope.highest = $scope.score;
                // Store highest score in localstorage
                localStorage.setItem("highest", $scope.highest);
            }
        };

        // Handle Timer
        var intervalCount = 0;
        var intervalHandle = $interval(function () {
            var size = $scope.size;
            if (intervalCount++ > 120) {
                resetGame();
                alert("Game Over")
            }

            var selectedCellIndex = Math.floor(Math.random() * (size * size));
            var matches = document.getElementsByClassName("grid-column");
            for (var i = 0; i < matches.length; i++) {
                matches[i].classList.remove('selected');
            }
            document.getElementsByClassName("grid-column")[selectedCellIndex].classList.add("selected");
        }, 1000);

        $scope.restartGame = function () {
            resetGame();
        };

        function resetGame() {
            intervalCount = 0;
            intervalHandle = null;
            $interval.cancel(intervalHandle);
            $scope.score = 0;
        }
    });