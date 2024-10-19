function toTakeLetterPage() {
    // Ask to play page
    document.getElementById('play-game').hidden = true;
    document.getElementById('play').hidden = true;

    // Take a letter page
    document.getElementById('goToHome').hidden = false;
    document.getElementById('next').hidden = false;

}

function openCardOne() {
    document.getElementById('next').hidden = true;
    document.getElementById('card-1').hidden = false;
}

var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
var card_2 = 0;
var card_3 = 0;
var card_4 = 0;
var card_5 = 0;


function openCardTwo(selectedLetters) {

    document.getElementById('card-1').hidden = true;
    document.getElementById('card-2').hidden = false;

    if (selectedLetters == "nToZ") {
        letters = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    }
}

function openCardThree(answer) {
    document.getElementById('card-2').hidden = true;
    document.getElementById('card-3').hidden = false;

    if (answer == "yes_2") {
        card_2 = 1;
    }

}

function openCardFour(answer) {
    document.getElementById('card-3').hidden = true;
    document.getElementById('card-4').hidden = false;


    if (answer == "yes_3") {
        card_3 = 2;
    }
}

function openCardFive(answer) {
    document.getElementById('card-4').hidden = true;
    document.getElementById('card-5').hidden = false;

    if (answer == "yes_4") {
        card_4 = 3;
    }
}

function getResult(answer) {
    document.getElementById('card-5').hidden = true;
    document.getElementById('result').hidden = false;

    if (answer == "yes_5") {
        card_5 = 7;
    }

    const totalLetterValue = card_2 + card_3 + card_4 + card_5;
    document.getElementById('magic-letter').innerHTML = letters[totalLetterValue - 1];

}