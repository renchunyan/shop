/*
app.controller("tabController",function($http,$scope) {
    $http({
        method:"get",
        url:"./Data/tab.json"
    }).then(function(data) {
        $scope.data = data.data;
    });
    $http({
        method:"get",
        url:"./Data/tab1.json"
    }).then(function(datas) {
        $scope.datas = datas.data;
    });
});*/
app.controller("tabController",['$scope', 'tabServer',function ($scope, tabServer) {
    tabServer.getNewList().then(function (result) {
        console.log(result);
        $scope.data = result;
    })
    tabServer.getNewLists().then(function (result) {
        console.log(result);
        $scope.datas = result;
    })
}]);
