/**
 * @author Md. Nazmus Salahin Rocky | rocky.bgta@gmail.com
 * Created by Tuli on 4/09/2016.
 */

app.registerCtrl('phaseOneController', function ($scope, $location, phaseOneResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.phaseOne = $scope.phaseOne || {};



    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            $.growl.notice({ message: "Added successfully!" });
            $scope.displayError = false;
            $scope.resetFieldsValue();
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        phaseOneResource.save($scope.phaseOne, successCallback, errorCallback);
    };

    $scope.resetFieldsValue = function() {
        $scope.phaseOne.title=null;
        $scope.phaseOne.body=null;
        $scope.phaseOne.author=null;

    };
});