angular.module('FlickrApp', [])
    .controller('flickrCtrl', function ($scope, $http) {
        $scope.isSearching = true;
        $scope.flickrSearch = function (keyword) {
            var url = "https://api.flickr.com/services/rest";
            var photoparams = {
                method: 'flickr.photos.search',
                api_key: '23d67b1c61e2e05e99bd91280fd1f0d6',
                extras: 'url_c, views',
                text: keyword,
                nojsoncallback: 1,
                format: 'json',
                per_page: 15
            };
            $http({
                    method: "GET",
                    url: url,
                    params: photoparams
                })
                .then(function (results) {
                        $scope.isSearching = false;
                        console.log(results);
                        console.log(results.data.photos.photo);
                        $scope.results = results;
                    },
                    function (results) {
                        $scope.isSearching = false;
                        console.log("There was an error");
                    }); //end of flickrSearch function

        };
    });
//Flickr API
/*var flickrurl = 'https://api.flickr.com/services/rest/';
var photoparams = {
    method: 'flickr.groups.pools.getPhotos',
    api_key: '23d67b1c61e2e05e99bd91280fd1f0d6',
    group_id: '1601790@N20',
    extras: 'url_c, views',
    nojsoncallback: 1,
    format: 'json',
    per_page: 15

};
$.ajax({
    url: flickrurl,
    data: photoparams,
    //dataType: 'jsonp',
    type: 'GET'
})
    .done(function (result) {
    console.log(result.photos.photo);
    $.each(result.photos.photo, function (i, item) {
        var photos = showPhotoIdeas(item);
        $('.ideas-content').append(photos);
    });

})
    .fail(function (jqXHR, error) {
    console.log(error);
    $('.ideas-content').append(error);

});*/
