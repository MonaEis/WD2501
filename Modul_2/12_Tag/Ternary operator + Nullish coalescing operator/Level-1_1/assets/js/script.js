let age = 17;

let adult = age >= 18 ? "Person ist volljährig" : "Person ist minderjährig";
console.log(adult);

let textHTML = document.querySelector(".text-alter")
textHTML.innerHTML = adult;