/**
 * Created by Tuli on 4/09/2016.
 */

app.factory('phaseTwoResource', function($resource){
    var baseUrl = 'rest/phaseTwo';
    var resource = {};
    resource = $resource( baseUrl,{},
        {
            'getJson':{ method: 'GET', url: baseUrl +'/Json', isArray: true},
            'getPlainText':{method: 'GET', url: baseUrl +'/plainText', isArray: false}
        }
    );
    return resource;
});
