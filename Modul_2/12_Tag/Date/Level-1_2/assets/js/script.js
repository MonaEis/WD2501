const today = new Date()
console.log(today);

console.log(today.getDate()); // Tag d. Monats

console.log(today.getMonth()); // Monat

console.log(today.getFullYear()); // Jahr

console.log(today.getHours()); // Uhrzeit: Stunde

console.log(today.getMinutes()); // Uhrzeit: Minuten

console.log(today.getSeconds()); // Uhrzeit: Sekunden

console.log(today.toLocaleDateString()); // Datum im Format "Tag.Monat.Jahr"

console.log(today.toLocaleTimeString()); // Uhrzeit im Format "Stunden:Minuten:Sekunden"
