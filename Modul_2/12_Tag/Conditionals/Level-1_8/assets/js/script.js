let auswahl = Number(window.prompt("Tippe bitte dein gewünschtes Getränk ein! (Nummer von 1 - 5)"));
console.log(auswahl);

switch (auswahl) {
    case 1:
        console.log("Wasser");
        break;
    case 2:
        console.log("Cola");
        break;
    case 3:
        console.log("Orangensaft");
        break;
    case 4:
        console.log("Kaffee");
        break;
    case 5:
        console.log("Tee");
        break;
    default: 
    console.log("Ungültige Ausgabe");    
}
