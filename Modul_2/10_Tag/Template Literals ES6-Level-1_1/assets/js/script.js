let firstName = "Mona";
let lastName = "Eismann";
let age = 38;
let birthPlace = "Dachau";
let height = "167 cm";
let hobby = "Konzerte";
let computerGame = "Hogwarts Legacy";
let favMeal = "Pho";
let favSport = "Tischtennis";
let favBrand = "Deus";
let favSeason = "Frühling";
let favHoliday = "Spanien";

let sentenceOne = firstName + " " + lastName + " ist " + age + " Jahre alt und ist in " + birthPlace + " geboren."

console.log(sentenceOne);

let sentenceTwo = `Am liebsten gehe ich auf ${hobby}, spiele auf der Switch ${computerGame} oder spiele ${favSport} im ${favSeason}.`;

console.log(sentenceTwo);

let sentenceThree = `${favMeal} ist mein Lieblingsessen, ich mag die Brand ${favBrand} und meinen schönsten Urlaub hatte ich in ${favHoliday}.`;

console.log(sentenceThree);

document.getElementById("output1").textContent = sentenceOne;
document.getElementById("output2").textContent = sentenceTwo;
document.getElementById("output3").textContent = sentenceThree;