/**
 * @author Md. Nazmus Salahin Rocky | rocky.bgta@gmail.com
 * Created by Tuli on 4/09/2016.
 */

app.registerCtrl('phaseTwoController', function ($scope, phaseTwoResource ) {

    $scope.getJsonRequest = function() {
       /* var successCallback = function(responseHeaders) {

        };
        var errorCallback = function() {
            console.log('error');
        };*/

        phaseTwoResource.getJson();
    };

    $scope.getPlainTextRequest = function() {
        phaseTwoResource.getPlainText();
    };
});