let weekdayAsNumber = Number(
    window.prompt("“Please insert a number from 1 to 7”")
);
let weekdayAsString;

console.log(weekdayAsNumber);

switch (weekdayAsNumber) {
    case 1:
        console.log("Montag");
        break;
    case 2:
        console.log("Dienstag");
        break;
    case 3:
        console.log("Mittwoch");
        break;
    case 4:
        console.log("Donnerstag");
        break;
    case 5:
        console.log("Freitag");
        break;
    case 6:
        console.log("Samstag");
        break;
    case 7:
        console.log("Sonntag");
        break;
    default:
        console.log("Weekday must be between 1 and 7");
        break;        
}
