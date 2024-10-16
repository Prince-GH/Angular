(
    
    function () {
        'use strict'
        
        angular.module('app', [])
        .controller('ctrl',ctrl)
        //Register filter factory with module
        .filter('replaceText', CustomeFilterFactory);
        
        //inject in with name"Filter"
        ctrl.$inject = ['$scope', 'replaceTextFilter'];

        function ctrl ($scope, replaceTextFilter){
            $scope.text = "";
            $scope.target = "";
            $scope.replace = "";
            $scope.replaceText = replaceTextFilter($scope.text, $scope.target, $scope.replace);
        }
 
        //Define filter factory function 
        function CustomeFilterFactory () {
            return function (input, target, replace) {
                    let targetAll = new RegExp(target, "gi");
                    return input.replace(targetAll, replace);
                }
        }
    }
)();




















// (
    
//     function () {
//         'use strict'
        
//         angular.module('app', [])
//         .controller('ctrl',ctrl)
//         //Register filter factory with module
//         .filter('sqrt', CustomeFilterFactory);
        
//         //inject in with name"Filter"
//         ctrl.$inject = ['$scope', 'sqrtFilter'];

//         function ctrl ($scope, sqrtFilter){
//             $scope.num = 0;
//             $scope.output = () => sqrtFilter($scope.num)
//         }
 
//         //Define filter factory function 
//         function CustomeFilterFactory () {
//             return function (input) {
//                     return input*input
//                 }
//         }
//     }
// )();