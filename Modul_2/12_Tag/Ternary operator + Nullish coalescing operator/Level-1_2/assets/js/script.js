let punkte = 55;

let ergebnis = punkte >= 50 ? "Bestanden" : "Nicht bestanden";
console.log(ergebnis);

let textHTML = document.querySelector(".output-here")
textHTML.innerHTML = ergebnis

