var app = angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when('/tab',{
            templateUrl:"./App/View/tab.html",
            controller:"tabController"
        })
        .when('/tabs',{
            templateUrl:"./App/View/tabs.html",
            controller:"tabsController"
        })

        .otherwise({redirectTo:"/tab"});
});