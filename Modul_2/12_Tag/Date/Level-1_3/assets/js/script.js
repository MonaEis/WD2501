let date1 = new Date("September 2, 2019 09:00:00");
console.log(date1);

let date2 = new Date (0);
console.log(date2);

let date3 = new Date (31556908800);
console.log(date3);

let date4 = new Date (86400000);
console.log(date4);

let newDate1 = document.querySelector(".datum-1")
newDate1.innerHTML = date1 + ' = new Date("September 2, 2019 09:00:00")'

let newDate2 = document.querySelector(".datum-2")
newDate2.innerHTML = date2 + " = new Date (0)"

let newDate3 = document.querySelector(".datum-3")
newDate3.innerHTML = date3 + " = new Date (31556908800)"

let newDate4 = document.querySelector(".datum-4")
newDate4.innerHTML = date4 + " = new Date (86400000"