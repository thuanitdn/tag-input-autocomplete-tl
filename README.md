# tag-input-autocomplete-tl
Tags input Autocomplete Search directive for AngularJS
Requirements

AngularJS 1.4+
A modern browser (Chrome 31+, Firefox 29+, Safari 7+, Opera 12+, IE 10+)

Demo: http://thuanitdn.github.io/tag-input-autocomplete-tl/

Installing
```html
bower install taginautl --save
```

After then , we need to import tag-input-autocomplete-tl,jquery and angularjs.


```html
<script src="bower_components/taginautl/jquery.min.js"></script>
<script src="bower_components/taginautl/angular.js"></script>
<script src="bower_components/taginautl/lib/tag-input-autocomplete-tl.min.js"></script>
<link rel="stylesheet" href="bower_components/taginautl/lib/tag-input-autocomplete-tl.css">
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
`taglist` : Pass an array to the autocomplete directive.

`input-text`: What you typed in will be in this variable.

`tag-on-change` : List variable chosen.

`limit-set-tag`: limit display tag, should be >=1.

`class` : css class.

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



LICENSE
```html
The MIT License (MIT)

Copyright (c) 2016 Thuan Le

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
