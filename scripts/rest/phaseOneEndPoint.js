/**
 * Created by Tuli on 4/09/2016.
 */

app.factory('phaseOneResource', function($resource){
    var baseUrl = 'rest/';
    var specificUrl= baseUrl+'phaseOne';
    var resource = {};
    resource = $resource(specificUrl);
    return resource;
});
