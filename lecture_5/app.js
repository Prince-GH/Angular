(
    function () {
        'use strict'

        angular.module("Myapp", [])
        .controller('MyApp',function ($scope){
            $scope.name = "Prince"; //Send data from MV to V
            $scope.invite = () => "🍎 Apple is better then 🍌 banana"; //send data as function call
        })
    }
)();