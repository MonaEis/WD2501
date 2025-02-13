let budget = window.prompt("Gib ein Budget ein:")
let favClimate = window.prompt("Was ist dein Lieblingsklima? (warm/kalt/mild)")
let activity = window.prompt("Lieber Abenteuer oder Entspannung?")

console.log(Number(budget));

if (budget < 1200) {
    console.log("Bleib lieber in Deutschland und besuche die Berge oder die Ostsee.");    
} else if (favClimate === "warm" && activity === "Abenteuer") {
    console.log("Reise nach Thailand für ein Dschungelabenteuer!");    
} else if (favClimate === "warm" && activity === "Entspannung") {
    console.log("Reise nach Bali für einen Strandurlaub!");    
} else if (favClimate === "kalt" && activity === "Abenteuer") {
    console.log("Norwegen: Perfekt für eine Nordlicht-Wanderung!");    
} else if (favClimate === "kalt" && activity === "Entspannung") {
    console.log("Island: Heiße Quellen und wunderschöne Landschaften!");    
} else if (favClimate === "mild") {
    console.log("Spanien oder Portugal sind großartige Reiseziele für dich!");    
} else console.log("Frag besser Google und nicht mich");
