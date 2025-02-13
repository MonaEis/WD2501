let einkaufsWert = window.prompt("Wie hoch ist dein Einkaufswert?")
console.log(Number(einkaufsWert));

if (einkaufsWert > 100) {
    console.log("Dein Einkaufswert beträgt €: " + einkaufsWert + " , und du bekommst einen Rabatt von 20%. Du zahlst somit €: " + (einkaufsWert * 0.8).toFixed(2));    
} else if (einkaufsWert >= 50 && einkaufsWert <= 100) {
    console.log("Dein Einkaufswert beträgt €: " + einkaufsWert + " , und du bekommst einen Rabatt von 10%. Du zahlst somit €: " + (einkaufsWert * 0.9).toFixed(2))
} else console.log("Erst ab 50€ gibts einen Rabatt - Sorry!");
