

// disable buttton after click
myApp.directive('clickedDisable', function(){
    return {
        restrict: 'A',
        link: function(scope, ele, attrs){
            $(ele).click(function(){
                $(ele).attr('disabled', true);
            });
        }
    }
    });
    myApp.directive('equalWith', function() {
        return {
            require: 'ngModel',
            scope: { equalWith: '&'},
            link: function(scope, elem, attrs, ngModelCtrl) {
                ngModelCtrl.$validators.equalWith = 
                  function (modelValue){
                    return (modelValue === scope.equalWith())
                  }
                scope.$watch(scope.equalWith, function(value){
                    ngModelCtrl.$validate()
                })
            }
        }
    });

    myApp.directive("showPassword", function() { 
        return function linkFn(scope, elem, attrs) {
            scope.$watch(attrs.showPassword, function(newValue) {
                console.log("element-->",newValue);
                if (newValue) {
                    elem.attr("type", "text");
                } else {
                    elem.attr("type", "password");
                };
            });
        };
    });