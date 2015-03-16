wordScramble.factory("Chars", function () {
    var Chars = function () {
        this.cs = {};
    };
    
    Chars.prototype.addChar = function (char) {
        this.chars[char]++;
    };
    
    Chars.prototype.removeChar = function (char) {
         if (this.chars[char] !== undefined && this.chars[char] > 0) {
             this.chars[char]--;
             
             return true;
         } else {
             return false;
         }
    };
    
    Chars.prototype.updateChars = function (word) {
        var splitted = word.split("");
        
        this.chars = splitted.reduce(function (acc, c) {
            if (acc[c] === undefined) {
                acc[c] = 1;
            } else {
                acc[c]++;
            }
            
            return acc;
        }, {});
    };
    
    return Chars;
});