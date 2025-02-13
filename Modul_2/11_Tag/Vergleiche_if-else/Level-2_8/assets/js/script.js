let enterUserName = window.prompt("Eingabe Name")
let enterPassword = window.prompt("Eingabe Passwort")

if (enterUserName === "admin" && enterPassword === "secure123") {
    console.log("Login erfolgreich!");    
} else if (enterUserName !== "admin" && enterPassword === "secure123") {
    console.log("Unbekannter User");    
} else if (enterUserName === "admin" && enterPassword !== "secure123") {
    console.log("Falsches Passwort");    
} else console.log("Versuchs komplett nochmal von vorne :)");
