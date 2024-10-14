(
    function () {
        angular.module('mood-app', [])
        .controller('mood-control',['$scope',($scope)=>{
            $scope.mood = "sleep";
            $scope.myMoodChange = ()=>{
                if($scope.mood==="sleep"){
                    $scope.mood = "food";
                }else{
                    $scope.mood = "sleep";
                }
            }
        }])
    }
)();