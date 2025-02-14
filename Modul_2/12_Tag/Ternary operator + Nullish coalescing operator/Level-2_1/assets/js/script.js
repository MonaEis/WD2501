let varNumb = 3;

let check = varNumb > 0 ? "Positivie Zahl" : varNumb < 0 ? "Negative Zahl" : "Die Zahl ist Null";
console.log(check);

let outputCheck = document.querySelector(".output-text");
outputCheck.innerHTML = check;