wordScramble.factory("shuffleWord", function () {
    return function shuffleWordInternal(word) {
        var splitted = word.split("");
        
        for (var i = 0; i < splitted.length; i++) {
            var j = Math.floor(Math.random() * (i + 1));
            swap(splitted, i, j);
        }
        
        var result = splitted.join("");
        
        if (result === word) {
            return shuffleWordInternal(word);
        } else {
            return result;
        }
    };
});

var swap = function (array, i, j) {
    var tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};