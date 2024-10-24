(()=>{
    angular.module("app",[])
    .controller('ctrl',Ctrl)
    Ctrl.$inject = ['$scope', '$timeout']
    function Ctrl ($scope, $timeout){
        $scope.counterA = 0;
        $scope.counterB = 0;

        $scope.inc = ()=>{
            $timeout(()=>{
                $scope.counterA++;
                $scope.counterB++;
            },2000)
        } 
            
    }

})();

//
// IF YOU DON'T WANT TO USE $digest() or $apply() YOU CAN
// DIRICTLY USE '$timeout' angular services that works same !!
//

// Ctrl.$inject = ["$scope"];
// function Ctrl ($scope){
//     $scope.counterA = 0;
//     $scope.counterB = 0;

//     $scope.inc = ()=>{
        
//         //
//         //As it set in the setTimeout() watcher of angular doesn't read the changes.
//         //
//         // $scope.counterA++;
//         // setTimeout(()=>{
//             //     $scope.counterB++;
//             // },2000)
            
//         //
//         //We are using $digest services of angular so after time out all the changes will be updated.
//         //
//         // $scope.counterA++;
//         // setTimeout(()=>{
//         //     $scope.counterB++;
//         //     $scope.$digest();
//         // },2000)

//         //
//         // New way to do the same || But both the event happen at the same time
//         //
//         // setTimeout(()=>{
//         //     $scope.$apply(()=>{
//         //         $scope.counterA++;
//         //         $scope.counterB++;
//         //     });
//         // },2000)
//     }
// }