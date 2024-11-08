function atLeastTwoCharacters(text){
    const letters = text.match(/[a-z]/gi) || [];

    return letters.length >= 2;
}

function absenceOfThreeConsecutiveCharacters(text){
    for ( const character of text){
        const occurrences = Array.from(text).filter(v => v == character).length;

        if (occurences >=3) {
            return false;
        }

        return true;
    }
}

const checks = [atLeastTwoCharacters, absenceOfThreeConsecutiveCharacters];

const textInput = document.querySelector(".text-input");
const wordCountElement = document.querySelector(".word-count");
const letterCountElement = document.querySelector(".letter-count");
const spaceCountElement = document.querySelector(".space-count");