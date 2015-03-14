wordScramble.factory("randomWord", ["$http", function ($http) {
    return function (min, max, callback) {
        $http.get("/api/random_word/" + min +"/"+ max )
        .success(function (data, status, headers, config) {
            callback(null, data);
        })
        .error(function (data, status, headers, config) {
            var error = new Error("new random word request failed");
            
            callback(error);
        });
    };
}]);