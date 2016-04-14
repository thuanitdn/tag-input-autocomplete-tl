var app = angular.module("app", ["tagInAuTl"]);

app.controller('tlCtr', function ($scope) {
    $scope.listAutocomplete = ['one','two','three','four','five','fix','seven',"something is happening"];
    $scope.listAutocomplete2 = ['one','two','three','four','five','fix','seven',"something is happening"];
    $scope.$watch("inputText", function (newVal,oldVal) {
        console.log("something is happening with input text:"+newVal);
    })
    $scope.$watch("tagChange", function (newVal,oldVal) {
        console.log("something is happening with tag change:"+newVal);
    })
});