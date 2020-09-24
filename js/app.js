//select all elements of interest that have been given ids

const txtLetter = document.getElementById("txtLetter");

const txtResult = document.getElementById("txtResult");


txtLetter.addEventListener("keypress", countWords);

function countWords(){
    let letter = txtLetter.value;

    //sanitize user input by taking away multiple white spaces and replacing them with a single space

    letter = letter.replace(/\s+/g, " ");

    //break the sanitized user input(letter) into word press so that they can be counted one by one.

    let wordPieces = letter.split("");

    //count the total number of words retrieved using the split () method

    let numOfWords = wordPieces.length;

    let numOfWordsRemaining = 200 - numOfWords;

    if(numOfWordsRemaining > 0){
        // update the txResult value so that the user can get some feedback
        txtResult.value = numOfWordsRemaining + " words remaining";
    }else {
        txtResult.style.backgroundColor ="crimson";
        txtResult.style.color = "#eee";
        txtResult.value ="sorry you have exceeded the maximum number of words allowed";
    }
}