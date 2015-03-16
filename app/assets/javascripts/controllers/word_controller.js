wordScramble.controller("WordController",
["randomWord", "shuffleWord", "$scope", function (randomWord, shuffleWord, $scope) {
    $scope.word = "";
    $scope.scrambled = [];
    $scope.guess = [];
    $scope.min = 4;
    $scope.max = 6;
    $scope.correct = false;
    $scope.wrong = false;
    
    var chars = {};
    
    $scope.handleKeyPress = function ($event) {
        if  (isMobile() || isInput($event.target)) return;
        var char = String.fromCharCode($event.keyCode).toLowerCase();
        var charLeft = removeChar(char);
        
        if (!$scope.correct && charLeft) {
            $scope.guess.push(char);
            checkGuess();
        } else if ($event.keyCode === 8) {
            $event.preventDefault();
            
            $scope.guess.pop();
        }
    };
    
    $scope.mobileGuess = function (guess) {
        if (angular.isDefined(guess)) {
            $scope.guess = guess.split("");
            checkGuess();
        }
        
        return $scope.guess.join("");
    };
    
    $scope.newRandomWord = function () {
        randomWord($scope.min, $scope.max, updateWord);
    };
    
    var checkGuess = function () {
        if ($scope.guess.length !== $scope.word.length) return;
        
        if ($scope.word === $scope.guess.join("")) {
            $scope.correct = true;
        } else {
            
            resetGuess();
        }
    };
    
    var isInput = function (elm) {
        return elm.tagName === "INPUT";
    };
    
    var isMobile = function () {
        return typeof window.orientation !== "undefined";
    };
    
    var removeChar = function (char) {
         if (chars[char] !== undefined && chars[char] > 0) {
             chars[char]--;
             
             return true;
         } else {
             return false;
         }
    };
    
    var resetGuess = function () {
        $scope.guess = [];
        $scope.correct = false;
        updateChars($scope.word);
    };
    
    var updateChars = function (word) {
        var splitted = word.split("");
        
        chars = splitted.reduce(function (acc, c) {
            if (acc[c] === undefined) {
                acc[c] = 1;
            } else {
                acc[c]++;
            }
            
            return acc;
        }, {});
    };
    
    var updateWord = function (err, data) {
        if (err) throw err;
        
        $scope.word = data.word;
        $scope.scrambled = shuffleWord(data.word).split("");
        
        updateChars(data.word);
        
        resetGuess();
    };
    
    $scope.newRandomWord();
}]);