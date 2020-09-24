let txtLetter = document.getElementById("txtLetter");
let txtResult = document.getElementById("txtresult");
let pageCount = 1;
let characterCount;
txtLetter.addEventListener("keypress", countwords);
function countwords() {
  let letter = txtLetter.value;
  let splitWords = letter.split("");
  let characterCount = splitWords.length;
  if (characterCount > 0) {
    txtResult.value = `page count: 1 ${characterCount++}} / 160 used`;
    while (characterCount % 160 == 0) {
      pageCount = pageCount +1;
      characterCount++;
    }
  }
  txtResult.value =`page count: ${pageCount} (${characterCount++})/ 160 used`;
}


















