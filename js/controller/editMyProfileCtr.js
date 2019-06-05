myApp.controller('editMyProfileCtr', function ($scope, $rootScope, $location, $mdDialog, $location, $filter,
    AuthenticationService, $http, countryService) {
    $('.getDate').datepicker({
        format: "dd-M-yyyy",
        todayBtn: "linked",
        multidate: false,
        todayHighlight: true,
        autoclose: true
    });
    var res1 = $http.get('json/myprofile.json')
    res1.success(function (data, status, headers, config) {

        console.log("data->", data);
        $scope.createProfile = data;

    }), res1.error(function (data, status, headers, config) {

      
       
    });


    console.log("country-->",countryService
    .getCountry());
    $scope.countries = countryService
        .getCountry();
        
        $scope.fetchStateFromCountry = function (val) {
            console.log("value-->",val);
            $scope.states = countryService.getStatefromCountry(val.country);
            console.log($scope.country);
    
        }
        $scope.fetchCityFromState = function (val) {
            console.log("value-->",val);
            $scope.citys = countryService.getStateCity(val.state);
            console.log($scope.country);
    
        }


        

    $('.getDate').datepicker({
        format: "dd-M-yyyy",
        todayBtn: "linked",
        multidate: false,

        todayHighlight: true,
        autoclose: true
    });
    var res = $http.get('json/dummy.json');
    res.success(function (data, status, headers, config) {
        $scope.religionList = data.Religion;
        $scope.langueageList = data.languages[0];
        $scope.CommunityList = data.Community;
        $scope.castList = data.cast;
        $scope.employmentType = data.employmentType;
        $scope.YesOrNo = data.YesOrNo;
        $scope.smoke = data.smoke;
        $scope.diet = data.Diet;
        $scope.familyValues = data.familyValues;
        console.log("dummydata", data);
        // console.log("languages-->", $scope.langueageList);

    }), res.error(function (data, status, headers, config) {
        console.log("fais DATA:", data);
    });


    $scope.submitData = function () {
        console.log("data--->", $scope.createProfile);

    }



    //new profile photo
    $scope.uploadNewPhoto = function (empPic) {
        setTimeout(function () {
            angular.element('#' + empPic + '').trigger('click');
        }, 0);

    };
    $scope.createProfile = {};
    // read and set image to logo header
    $scope.readImage = function (input, setTo) {
        if (input.files[0].size > 200000 &&
            (input.files[0].type !== "image/png" ||
                input.files[0].type !== "image/jpeg" || input.files[0].type !== "image/jpg")) {

            angular.element('#empPic').val("");
            //	$('#profileImg').attr('src',	'images/avatar.jpg');
            $scope.photoUploadStatus = true;
            $scope.uploadErr = true;
            console.log("upload error");
            $scope.$apply();
        } else {
            $scope.photoUploadStatus = false;
            $scope.uploadErr = false;
            console.log($scope.photoUploadStatus)
            $scope.$apply();
            var reader = new FileReader();
            console.log("upload success2");


            //uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url("+e.target.result+")");
            var uploadFile = $(this);
            reader.onload = function (e) {
                $('#' + setTo).attr('background-image', "url(" + e.target.result + ")");
                console.log("upload success3");
            }

            reader.readAsDataURL(input.files[0]);
            $scope.createProfile.photos.profilePic = $("#empPic")
                .prop("files")[0];

            console.log("new photo---", $scope.createProfile.photos.profilePic);
            $("#picSubmit").removeAttr("disabled", "disabled");
        }
        console.log("status", $scope.photoUploadStatus)

    }
    /// first pic read
    $scope.readImage1 = function (input, setTo) {
        if (input.files[0].size > 200000 &&
            (input.files[0].type !== "image/png" ||
                input.files[0].type !== "image/jpeg" || input.files[0].type !== "image/jpg")) {

            angular.element('#empPic').val("");
            //	$('#profileImg').attr('src',	'images/avatar.jpg');
            $scope.photoUploadStatus = true;
            $scope.uploadErr = true;
            console.log("upload error");
            $scope.$apply();
        } else {
            $scope.photoUploadStatus = false;
            $scope.uploadErr = false;
            console.log($scope.photoUploadStatus)
            $scope.$apply();
            var reader = new FileReader();
            console.log("upload success2");


            //uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url("+e.target.result+")");
            var uploadFile = $(this);
            reader.onload = function (e) {
                $('#' + setTo).attr('background-image', "url(" + e.target.result + ")");
                console.log("upload success3");
            }

            reader.readAsDataURL(input.files[0]);
            $scope.createProfile.photos.photoOne = $("#empPic1")
                .prop("files")[0];

            console.log("new photo---", $scope.createProfile.photos.photoOne);
            $("#picSubmit").removeAttr("disabled", "disabled");
        }
        console.log("status", $scope.photoUploadStatus)

    }

    /// second pic read
    $scope.readImage2 = function (input, setTo) {
        if (input.files[0].size > 200000 &&
            (input.files[0].type !== "image/png" ||
                input.files[0].type !== "image/jpeg" || input.files[0].type !== "image/jpg")) {

            angular.element('#empPic').val("");
            //	$('#profileImg').attr('src',	'images/avatar.jpg');
            $scope.photoUploadStatus = true;
            $scope.uploadErr = true;
            console.log("upload error");
            $scope.$apply();
        } else {
            $scope.photoUploadStatus = false;
            $scope.uploadErr = false;
            console.log($scope.photoUploadStatus)
            $scope.$apply();
            var reader = new FileReader();
            console.log("upload success2");


            //uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url("+e.target.result+")");
            var uploadFile = $(this);
            reader.onload = function (e) {
                $('#' + setTo).attr('background-image', "url(" + e.target.result + ")");
                console.log("upload success3");
            }

            reader.readAsDataURL(input.files[0]);
            $scope.createProfile.photos.photoTwo = $("#empPic2")
                .prop("files")[0];

            console.log("new photo---", $scope.createProfile.photos.photoTwo);
            $("#picSubmit").removeAttr("disabled", "disabled");
        }
        console.log("status", $scope.photoUploadStatus)

    }
    /// third pic read
    $scope.readImage3 = function (input, setTo) {
        if (input.files[0].size > 200000 &&
            (input.files[0].type !== "image/png" ||
                input.files[0].type !== "image/jpeg" || input.files[0].type !== "image/jpg")) {

            angular.element('#empPic').val("");
            //	$('#profileImg').attr('src',	'images/avatar.jpg');
            $scope.photoUploadStatus = true;
            $scope.uploadErr = true;
            console.log("upload error");
            $scope.$apply();
        } else {
            $scope.photoUploadStatus = false;
            $scope.uploadErr = false;
            console.log($scope.photoUploadStatus)
            $scope.$apply();
            var reader = new FileReader();
            console.log("upload success2");


            //uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url("+e.target.result+")");
            var uploadFile = $(this);
            reader.onload = function (e) {
                $('#' + setTo).attr('background-image', "url(" + e.target.result + ")");
                console.log("upload success3");
            }

            reader.readAsDataURL(input.files[0]);
            $scope.createProfile.photos.photoThree = $("#empPic3")
                .prop("files")[0];

            console.log("new photo---", $scope.createProfile.photos.photoThree);
            $("#picSubmit").removeAttr("disabled", "disabled");
        }
        console.log("status", $scope.photoUploadStatus)

    }
    /// forth pic read
    $scope.readImage4 = function (input, setTo) {
        if (input.files[0].size > 200000 &&
            (input.files[0].type !== "image/png" ||
                input.files[0].type !== "image/jpeg" || input.files[0].type !== "image/jpg")) {

            angular.element('#empPic').val("");
            //	$('#profileImg').attr('src',	'images/avatar.jpg');
            $scope.photoUploadStatus = true;
            $scope.uploadErr = true;
            console.log("upload error");
            $scope.$apply();
        } else {
            $scope.photoUploadStatus = false;
            $scope.uploadErr = false;
            console.log($scope.photoUploadStatus)
            $scope.$apply();
            var reader = new FileReader();
            console.log("upload success2");


            //uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url("+e.target.result+")");
            var uploadFile = $(this);
            reader.onload = function (e) {
                $('#' + setTo).attr('background-image', "url(" + e.target.result + ")");
                console.log("upload success3");
            }

            reader.readAsDataURL(input.files[0]);
            $scope.createProfile.photos.photoFour = $("#empPic4")
                .prop("files")[0];

            console.log("new photo---", $scope.createProfile.photos.photoFour);
            $("#picSubmit").removeAttr("disabled", "disabled");
        }
        console.log("status", $scope.photoUploadStatus)

    }








    $(".imgAdd").click(function () {
        $(this).closest(".row").find('.imgAdd').before('<div class="col-sm-2 imgUp"><div class="imagePreview"></div><label class="btn btn-primary">Upload<input type="file" class="uploadFile img" value="Upload Photo" style="width:0px;height:0px;overflow:hidden;"></label><i class="fa fa-times del"></i></div>');
    });
    $(document).on("click", "i.del", function () {
        $(this).parent().remove();
    });
    $(function () {
        $(document).on("change", ".uploadFile", function () {
            var uploadFile = $(this);
            var files = !!this.files ? this.files : [];
            if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

            if (/^image/.test(files[0].type)) { // only image file
                var reader = new FileReader(); // instance of the FileReader
                reader.readAsDataURL(files[0]); // read the local file

                reader.onloadend = function () { // set image data as background of div
                    //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
                    console.log("in image methoid");
                    uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url(" + this.result + ")");
                }
            }

        });
    });



});