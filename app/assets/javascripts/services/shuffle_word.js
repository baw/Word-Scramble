wordScramble.factory("shuffleWord", function () {
    return function (word) {
        var splitted = word.split("");
        
        for (var i = 0; i < splitted.length; i++) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = splitted[i];
            splitted[i] = splitted[j];
            splitted[j] = tmp;
        }
        
        return splitted.join("");
    };
});