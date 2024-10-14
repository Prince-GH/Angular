//create the services as in array

// (
//     function (){
//         angular.module('DIapp', [])
//         .controller('DIcontroller',['$scope', '$filter', DIcontroller])
        
//         function DIcontroller($scope, $filter){
//             $scope.name = "Prince";
//             $scope.upCase = function () {
//                 let upcase = $filter('uppercase');
//                 $scope.name = upcase($scope.name);
//             }
//         }
//     }
// )();

//create the services as a injector

// (
//     function (){
//         angular.module('DIapp', [])
//         .controller('DIcontroller',DIcontroller);

//         DIcontroller.$inject = ['$scope', '$filter'];

//         function DIcontroller($scope, $filter){
//             $scope.name = "Prince";
//             $scope.upCase = function () {
//                 let upcase = $filter('uppercase');
//                 $scope.name = upcase($scope.name);
//             }
//         }
//     }
// )();

//minification of above code

!function(){function e(e,n){e.name="Prince",e.upCase=function(){let c=n("uppercase");e.name=c(e.name)}}angular.module("DIapp",[]).controller("DIcontroller",e),e.$inject=["$scope","$filter"]}();