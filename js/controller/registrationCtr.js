myApp.controller('registrationCtr', function($scope, $rootScope, $location, $mdDialog, $location,$filter,
    AuthenticationService, $http) {
       
        $('.getDate').datepicker({
            format : "dd-M-yyyy",
            todayBtn : "linked",
            multidate : false,
          
            todayHighlight : true,
            autoclose : true
        });
$scope.register =function(event){
    console.log("details-->",$scope.registration);
    
			
				$('#success').modal('show');
}
$scope.closePopup =function(event){
    console.log("details1-->",$scope.registration);
    
			
                $('#success').modal('hide');
                $scope.showtext=true;
}
// create a message to display in our view

var res = $http.get('json/dummy.json');
res.success(function(data, status, headers, config) {
    console.log("SUCCESS DATA:", data);	
    $scope.createdBy=data.profileCreateFor;
    $scope.Children=data.YesOrNo;
    $scope.maritalOption = data.maritialStatus;
    $scope.religion =data.Religion;
    $scope.gender =data.gender;
    $scope.bodyType =data.bodyType;
    $scope.casteList=data.cast;
}), res.error(function(data, status, headers, config) {
    console.log("fais DATA:", data);
});



$scope.createProfile1=function(){
    console.log("date before-->",$scope.dob)
   // $scope.createProfile.personalDetails="fg";
	//var d=$filter('date')(new Date($scope.dob),'dd-MMM-yyyy');
	//console.log("date after-->",d)
	console.log("data12-->",$scope.createProfile)
//$location.path("myprofile")
}












//new profile photo
$scope.uploadNewPhoto = function (empPic) {
setTimeout(function () {
    angular.element('#'+empPic+'').trigger('click');	
}, 0);

};
$scope.createProfile={};
// read and set image to logo header
$scope.readImage = function (input, setTo) {
    if (input.files[0].size > 200000
        && (input.files[0].type !== "image/png"
            || input.files[0].type !== "image/jpeg" || input.files[0].type !== "image/jpg")) {
        
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
        $('#' + setTo).attr('background-image', "url("+e.target.result+")");
        console.log("upload success3");
        }
        
        reader.readAsDataURL(input.files[0]);
        $scope.createProfile.profilePic = $("#empPic")
            .prop("files")[0];	
        
        console.log("new photo---", $scope.createProfile.profilePic);
        $("#picSubmit").removeAttr("disabled", "disabled");
    }
    console.log("status", $scope.photoUploadStatus)
    
}	
/// first pic read
$scope.readImage1 = function (input, setTo) {
    if (input.files[0].size > 200000
        && (input.files[0].type !== "image/png"
            || input.files[0].type !== "image/jpeg" || input.files[0].type !== "image/jpg")) {
        
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
        $('#' + setTo).attr('background-image', "url("+e.target.result+")");
        console.log("upload success3");
        }
        
        reader.readAsDataURL(input.files[0]);
        $scope.createProfile.photoOne = $("#empPic1")
            .prop("files")[0];	
        
        console.log("new photo---", $scope.createProfile.photoOne);
        $("#picSubmit").removeAttr("disabled", "disabled");
    }
    console.log("status", $scope.photoUploadStatus)
    
}	

/// second pic read
$scope.readImage2 = function (input, setTo) {
    if (input.files[0].size > 200000
        && (input.files[0].type !== "image/png"
            || input.files[0].type !== "image/jpeg" || input.files[0].type !== "image/jpg")) {
        
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
        $('#' + setTo).attr('background-image', "url("+e.target.result+")");
        console.log("upload success3");
        }
        
        reader.readAsDataURL(input.files[0]);
        $scope.createProfile.photoTwo = $("#empPic2")
            .prop("files")[0];	
        
        console.log("new photo---", $scope.createProfile.photoTwo);
        $("#picSubmit").removeAttr("disabled", "disabled");
    }
    console.log("status", $scope.photoUploadStatus)
    
}	
/// third pic read
$scope.readImage3 = function (input, setTo) {
    if (input.files[0].size > 200000
        && (input.files[0].type !== "image/png"
            || input.files[0].type !== "image/jpeg" || input.files[0].type !== "image/jpg")) {
        
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
        $('#' + setTo).attr('background-image', "url("+e.target.result+")");
        console.log("upload success3");
        }
        
        reader.readAsDataURL(input.files[0]);
        $scope.createProfile.photoThree = $("#empPic3")
            .prop("files")[0];	
        
        console.log("new photo---", $scope.createProfile.photoThree);
        $("#picSubmit").removeAttr("disabled", "disabled");
    }
    console.log("status", $scope.photoUploadStatus)
    
}	
/// forth pic read
$scope.readImage4 = function (input, setTo) {
    if (input.files[0].size > 200000
        && (input.files[0].type !== "image/png"
            || input.files[0].type !== "image/jpeg" || input.files[0].type !== "image/jpg")) {
        
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
        $('#' + setTo).attr('background-image', "url("+e.target.result+")");
        console.log("upload success3");
        }
        
        reader.readAsDataURL(input.files[0]);
        $scope.createProfile.photoFour = $("#empPic4")
            .prop("files")[0];	
        
        console.log("new photo---", $scope.createProfile.photoFour);
        $("#picSubmit").removeAttr("disabled", "disabled");
    }
    console.log("status", $scope.photoUploadStatus)
    
}	












































$(".imgAdd").click(function(){
    $(this).closest(".row").find('.imgAdd').before('<div class="col-sm-2 imgUp"><div class="imagePreview"></div><label class="btn btn-primary">Upload<input type="file" class="uploadFile img" value="Upload Photo" style="width:0px;height:0px;overflow:hidden;"></label><i class="fa fa-times del"></i></div>');
  });
  $(document).on("click", "i.del" , function() {
      $(this).parent().remove();
  });
  $(function() {
      $(document).on("change",".uploadFile", function()
      {
              var uploadFile = $(this);
          var files = !!this.files ? this.files : [];
          if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support
   
          if (/^image/.test( files[0].type)){ // only image file
              var reader = new FileReader(); // instance of the FileReader
              reader.readAsDataURL(files[0]); // read the local file
   
              reader.onloadend = function(){ // set image data as background of div
                  //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
                  console.log("in image methoid");
  uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url("+this.result+")");
              }
          }
        
      });
  });
});