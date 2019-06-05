myApp.controller('searchProfileViewCtr', function ($scope, $rootScope, $location, $mdDialog, $location, $filter, dataService,
    AuthenticationService, $http) {
    var id = dataService.get();
    console.log("id-->", id);

    // for similar profiles
    var res = $http.get('json/similarprofiles.json');
    res.success(function (data, status, headers, config) {
        $scope.myProfileData = data[id-1];
        console.log("SUCCESS DATA:", $scope.myProfileData);

    }), res.error(function (data, status, headers, config) {
        console.log("fais DATA:", data);
    });
    
});