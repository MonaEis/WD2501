let pointCount = window.prompt("gib eine Punktzahl an: Schnell!")

if (pointCount >= 90 && pointCount <= 100) {
    console.log("Sehr gut");    
} else if (pointCount >= 75 && pointCount <= 89){
    console.log("Gut");    
} else if (pointCount >= 50 && pointCount <= 74){
    console.log("Befriedigend");    
} else if (pointCount >= 0 && pointCount <= 49) {
    console.log("Nicht bestanden");    
} else console.log("Ungültige Punktzahl");
