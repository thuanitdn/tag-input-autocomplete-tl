# tag-input-autocomplete-tl
Tags input Autocomplete Search directive for AngularJS
Requirements

AngularJS 1.4+
A modern browser (Chrome 31+, Firefox 29+, Safari 7+, Opera 12+, IE 10+)

Installing

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
<script src="tag-input-autocomplete-tl.js"></script>
<link rel="stylesheet" href="tag-input-autocomplete-tl.css">

Usage

1.Add the ngTagsInput module as a dependency in your AngularJS app.

2.Add the element <tag-in-au-t /> to the HTML file where you want to use.

3.You're done!

Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Tag input autocomplete Thuanle</title>
    <link rel="stylesheet" href="tag-input-autocomplete-tl.css">
</head>
<body ng-app="myApp">
<div ng-controller='FormCtrl'>
    <label>Your Input: {{ inputText }}</label>
    <br />
    <label>Your list tag:{{ listtwo }}</label>
    {{ tagChange }}
    <br />
    <div style="margin-left:250px">
        <tag-in-au-tl placeholder='add a tag' taglist='listtwo' input-text="inputText" tag-on-change="tagChange"></tag-in-au-tl>
    </div>

</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
<script src="tag-input-autocomplete-tl.js"></script>
<script>
    var app = angular.module("myApp", ["tagInAuTl"]);
</script>
<script>
    app.controller('FormCtrl', function ($scope) {


        $scope.listtwo = ['oneeeeeeeeeeeeeeeeeeeeeeeeeeee','two','three'];

        $scope.$watch("inputText", function (newVal,oldVal) {
            console.log("something is happening with input text:"+newVal);
        })

        $scope.$watch("tagChange", function (newVal,oldVal) {
            console.log("something is happening with tag change:"+newVal);
        })
    });
</script>
</body>
</html>
```
