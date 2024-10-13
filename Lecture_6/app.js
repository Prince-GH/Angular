(
    function (){
        'use strict';
        angular.module("CalculateApp",[])
        .controller("CalAscii",function ($scope) {
            
            $scope.name = "";
            $scope.totalCount = 0;


            $scope.CalASCIItotal = function (){
                let totalNumVal = calNum($scope.name);
                $scope.totalCount = totalNumVal;
            };

            function calNum(str){
                let strVal = 0;
                for(let i = 0; i < str.length; i++){
                    strVal += str.charCodeAt(i);
                }
                return strVal;
            }


        })
    }
)();