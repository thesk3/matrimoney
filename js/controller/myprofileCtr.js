myApp.controller('myprofileCtr', function ($scope, $rootScope,$http,$location) {

console.log("hello");

var res1 = $http.get('json/myprofile.json')
	res1.success(function(data, status, headers, config) {

        console.log("data->",data);
        $scope.myProfileData=data;

	}), res1.error(function(data, status, headers, config) {
	
	
    });

  $scope.editMyProfile=function(){
$location.path("home/editmyprofile");
  }

});