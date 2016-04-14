/**
 * THUANLE
 * Tag input search suggestion
 */

angular.module('tagInAuTl', []).directive('tagInAuTl', function () {
        return {
            restrict: 'E',
            scope: {
                inputTags: '=taglist',
                inputText:'=inputText',
                listSetToView:'=tagOnChange',
                limitSetTag:'=limitSetTag'
            },
            link: function ($scope, element) {
                $scope.tagText = '';
                $scope.chopSetTagToView=false;
                $scope.selectedIndex=-1;
                $scope.tagArrayListSetView= function () {
                    if ($scope.listSetToView === undefined) {
                        return [];
                    }
                    return $scope.listSetToView.split(',').filter(function (tag) {
                        return tag !== '';
                    });
                };

                $scope.deleteTag = function (key) {
                    var tagArray;
                    tagArray = $scope.tagArrayListSetView();
                    if (tagArray.length > 0 && $scope.tagText.length === 0 && key === undefined) {
                        tagArray.pop();
                    } else {
                        if (key !== undefined) {
                            tagArray.splice(key, 1);
                        }
                    }
                    return $scope.listSetToView = tagArray.join(',');
                };
                
                $scope.removeEachTag= function () {
                    var tagArray;
                    tagArray = $scope.tagArrayListSetView();
                    if (tagArray.length > 0 && $scope.tagText.length === 0) {
                        tagArray.splice(0, 1);
                    }
                    return $scope.listSetToView = tagArray.join(',');
                };

                $scope.setTagToView= function (data) {
                    var tagArray;
                    if (data.length === 0) {
                        return;
                    }

                    tagArray = $scope.tagArrayListSetView();
                    if(angular.isUndefined($scope.limitSetTag)){
                        if (tagArray.indexOf(data) == -1) {
                            tagArray.push(data);
                            $scope.listSetToView = tagArray.join(',');
                            $scope.chopSetTagToView=false;
                            $scope.tagText = ''
                        }
                        else{
                            $scope.chopSetTagToView=false;
                            $scope.tagText = ''
                        }
                    }
                    else if($scope.limitSetTag >=1){
                        if (tagArray.indexOf(data) == -1 && tagArray.length < $scope.limitSetTag) {
                            tagArray.push(data);
                            $scope.listSetToView = tagArray.join(',');
                            $scope.chopSetTagToView=false;
                            $scope.tagText = ''
                        }
                        else{
                            $scope.chopSetTagToView=false;
                            $scope.tagText = ''
                        }
                    }
                };

                $scope.setSeletedValue= function (index,data) {
                        if(index == $scope.selectedIndex) $scope.selectedValue=data;
                        return true;
                };
                
                $scope.$watch('tagText', function (newVal, oldVal) {
                    if (!(newVal === oldVal && newVal === undefined)) {
                        $scope.inputText=newVal;
                        if($scope.tagText != ''){
                            $scope.chopSetTagToView=true;
                        }
                        $scope.searchFilter = newVal;
                    }

                });


                
                
                $('html').click(function() {
                    $scope.chopSetTagToView=false;
                    $scope.$apply();
                });

                element.bind('keydown', function (e) {
                    var l = element.find('.list_autocomplete_child').length;
                    var key;
                    key = e.which;
                    switch (key){
                        case 38:
                            if ($scope.selectedIndex == -1) $scope.selectedIndex=0;
                            else
                            $scope.selectedIndex--;
                            $scope.$apply();
                            break;
                        case 40:
                            if ($scope.selectedIndex >= l) $scope.selectedIndex=0;
                            else
                            $scope.selectedIndex++;
                            $scope.$apply();
                            break;
                        case 13:
                            if($scope.selectedIndex == -1 || $scope.selectedValue == '') break;
                            else
                            $scope.setTagToView($scope.selectedValue);
                            $scope.selectedIndex=-1;
                            $scope.selectedValue='';
                            $scope.$apply();
                            break;
                        case 8:
                            $scope.removeEachTag();
                            $scope.$apply();
                            break;
                    };

                });

            },
            template: '<div class=\'tag-input-tl\'>' +
            '<button class="button_autocomplete">S</button>'+
            '<div class="box_tag_right">' +
                '<div class=\'input-tag\' data-ng-repeat="tag in tagArrayListSetView() track by $index"><span>{{tag}}</span><div class=\'delete-tag\' data-ng-click=\'deleteTag($index)\'>&times;</div>' + '</div>' +
                '<input type=\'text\' data-ng-model=\'tagText\' placeholder="Search..." />' +
            '</div>' +
            '<div ng-show="inputTags && chopSetTagToView" id="list_autocomplete" class="list_autocomplete">' +
            '<div class="list_autocomplete_child" data-ng-repeat="d in inputTags | filter:searchFilter track by $index" ng-class=\'{ active_autocomplete: ($index === selectedIndex) }\' ng-if="setSeletedValue($index,d)" ng-click=\'setTagToView(d)\'>{{ d }}</div>' +
            '</div>' +
            '</div>'
        };
    });
