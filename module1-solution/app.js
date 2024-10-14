(
  ()=>{
    'use strict'
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController)

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){
        $scope.Items = "";
        $scope.msg = "";
        $scope.textColor = 'black';
        $scope.CheckNow = function () {

            if($scope.Items===""){
                $scope.textColor = 'red';
                $scope.msg = "Please enter data first !!";
                return;
            }

            let ItemList = $scope.Items.trim().split(',');

            ItemList = ItemList.filter(item => item.length>0);

            let ItemCount = ItemList.length;

            if(ItemCount<=3){
                 $scope.textColor = 'green';
                 $scope.msg = "Enjoy !!";
            }else if(ItemCount>3){
                $scope.textColor = 'green';
                $scope.msg = "Too much !!"
            }
        }
    }
  }
)();