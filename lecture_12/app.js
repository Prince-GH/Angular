(function () {
    angular.module('filter-app', [])
    .controller('filter-control', fc)

    fc.$inject=['$scope', '$filter'];

    function fc ($scope, $filter){
        $scope.Salary = "";
        $scope.ExchangeSalary = () => $filter('currency')($scope.Salary,"$ ",2);
    }
})();