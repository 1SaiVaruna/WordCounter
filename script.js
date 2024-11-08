function atLeastTwoCharacters(text){
    const letters = text.match(/[a-z]/gi) || [];

    return letters.length >= 2;
}

function absenceOfThreeConsecutiveCharacters(text){

}