const text = 'Susi is back from codingschool'

let varOne = text.substring(0, 4)
console.log(varOne);

let varTwo = text.substring(5, 7) 
console.log(varTwo);

let varThree = text.substring(24)
console.log(varThree);

let varFour = text.substring(0, 8) + text.substring(24) 
console.log(varFour);

document.getElementById("output1").textContent = varOne;
document.getElementById("output2").textContent = varTwo;
document.getElementById("output3").textContent = varThree;
document.getElementById("output4").textContent = varFour;
