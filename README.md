# tag-input-autocomplete-tl
Tags input Autocomplete Search directive for AngularJS
Requirements

AngularJS 1.4+
A modern browser (Chrome 31+, Firefox 29+, Safari 7+, Opera 12+, IE 10+)

Demo: http://taginautl.herokuapp.com/

Installing
```html
bower install taginautl --save
```

After then , we need to import tag-input-autocomplete-tl,jquery and angularjs.


```html
<script src="bower_components/taginautl/jquery.min.js"></script>
<script src="bower_components/taginautl/angular.js"></script>
<script src="bower_components/taginautl/tag-input-autocomplete-tl.js"></script>
<link rel="stylesheet" href="bower_components/taginautl/tag-input-autocomplete-tl.css">
```

Usage

1.Add the tagInAuTl module as a dependency in your AngularJS app.

```html
var app = angular.module('app', ["tagInAuTl"]);
```

2.Add the element <tag-in-au-t /> to the HTML file where you want to use.

```html
<tag-in-au-tl taglist='listAutocomplete' input-text="inputText" tag-on-change="tagChange"></tag-in-au-tl>
```
taglist : Pass an array to the autocomplete directive.

input-text: What you typed in will be in this variable.

tag-on-change : List variable chosen.

Using $watching to listen change the input-text and tag-on-change.
Example: 
```html
 $scope.$watch("inputText", function (newVal,oldVal) {
            console.log("something is happening with input text:"+newVal);
        })

        $scope.$watch("tagChange", function (newVal,oldVal) {
            console.log("something is happening with tag change:"+newVal);
        })
```

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
    <label>Your list tag:{{ listAutocomplete }}</label>
    {{ tagChange }}
    <br />
    <div style="margin-left:250px">
        <tag-in-au-tl taglist='listAutocomplete' input-text="inputText" tag-on-change="tagChange"></tag-in-au-tl>
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


        $scope.listAutocomplete = ['oneeeeeeeeeeeeeeeeeeeeeeeeeeee','two','three'];

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
