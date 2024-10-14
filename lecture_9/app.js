(
    function () {
        'use strict'


        angular.module('DIapp', [])
        .controller('DIcontroller', dictrl);


        function dictrl ($scope, $filter, $injector){
            
            $scope.name = "Prince";
            
            $scope.upper = function (){
                let upCase = $filter('uppercase');
                $scope.name = upCase($scope.name);
            }

            console.log($injector.annotate(dictrl));

        }
    }
)();