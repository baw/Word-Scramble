wordScramble.factory("shuffleWord", function () {
    return function shuffleWordInternal(word) {
        var splitted = word.split("");
        
        for (var i = 0; i < splitted.length; i++) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = splitted[i];
            splitted[i] = splitted[j];
            splitted[j] = tmp;
        }
        
        var result = splitted.join("");
        
        if (result === word) {
            return shuffleWordInternal(word);
        } else {
            return result;
        }
        
    };
});