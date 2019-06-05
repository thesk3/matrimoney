myApp.controller('searchpageCtr', function($scope, $rootScope, $http, dataService,
    $location, $compile) {


        //in srach based on years for girl and all less than boys for boys
        //for girls greater than 4 years 
        //for boys lesss than boys age
 console.log("admin ctr");
 var res = $http.get('json/similarprofiles.json');
        res.success(function (data, status, headers, config) {
            $scope.profiles = data;
            console.log("SUCCESS DATA:", data);
    
        }), res.error(function (data, status, headers, config) {
            console.log("fais DATA:", data);
        });
        var res = $http.get('json/dummy.json');
        res.success(function (data, status, headers, config) {
            $scope.religionList = data.Religion;
            $scope.langueageList=data.languages[0];
            console.log("dummydata", data);
            // console.log("languages-->", $scope.langueageList);
    
        }), res.error(function (data, status, headers, config) {
            console.log("fais DATA:", data);
        });



        $scope.viewImage=function(path){
         $scope.photoModel=path;   
        }
    

});

