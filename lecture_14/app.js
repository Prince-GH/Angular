(function (){
    'use strict'

    angular.module('watcherApp', [])
    .controller('watcherControl',ctrlWatcher)
    $inject.ctrlWatcher = ['$scope', '$filter'];
    function ctrlWatcher ($scope){

        $scope.Count = 0;
        $scope.CountInc = 0;

        $scope.WatcherCount = function () {
            console.log($scope);
            console.log("No. of watchers: ",$scope.$$watchersCount);
            
        }

        $scope.OnceCount = function () {
            $scope.Count = 1;
        }

        $scope.OnceCountIncrement = function () {
            $scope.CountInc++;
        }


        //Watcher 1 to focus on Count
        $scope.$watch('Count',function (newVal, oldVal) {
            console.log("Old Value: ",oldVal);
            console.log("New Value: ",newVal);
        })
        
        //Watcher 2 to focus on CountInc
        $scope.$watch('CountInc', (newVal, oldVal)=>{
            console.log("Inc newVal: ",newVal);
            console.log("Inc oldVal: ",oldVal);
        })
    }
})();