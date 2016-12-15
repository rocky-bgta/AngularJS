/**
 * @author Md. Nazmus Salahin Rocky | rocky.bgta@gmail.com
 * Created by Tuli on 4/09/2016.
 */


'use strict';

var app = angular.module ('mainModule',['ngRoute','ngResource']);
app.config(['$routeProvider', '$controllerProvider', function($routeProvider, $controllerProvider) {
    app.registerCtrl = $controllerProvider.register;

    function loadController(controllerSubPath){
        $.ajaxSetup({async:true});
        $.getScript("scripts/controllers/" + controllerSubPath + ".js").done(function( script, textStatus ) {
        }).fail(function( jqxhr, settings, exception ) {
            console.log( exception );
        });
    }

    $routeProvider
        .when('/',{templateUrl:'/app.html'})
        .when('/phaseOne',{templateUrl:'views/phaseOne.html', controller:'phaseOneController', resolve: { load: function () {loadController("phaseOneController");}}})
        .when('/phaseTwo',{templateUrl:'views/phaseTwo.html', controller:'phaseTwoController', resolve: { load: function () {loadController("phaseTwoController");}}})
        .otherwise({
            redirectTo: '/'
        });
}]);