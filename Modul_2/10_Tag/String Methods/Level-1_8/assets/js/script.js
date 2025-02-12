const text = "Sam is going to codingschool";

// Sam
let a = text.slice(0, 3);

// is
let b = text.slice(4,6)

// going
let c = text.slice(7,12)

// to
let d = text.slice(13,15)

// school
let e = text.slice(22)

console.log(a.toUpperCase() +" "+ b.toUpperCase()+" "+c.toUpperCase()+" "+d.toUpperCase()+" "+e.toUpperCase() );

console.log(a.toLowerCase() +" "+ b.toLowerCase()+" "+c.toLowerCase()+" "+d.toLowerCase()+" "+e.toLowerCase() );

console.log(a.toUpperCase() +" "+ b.toLowerCase()+" "+c.toLowerCase()+" "+d.toLowerCase()+" "+e.toUpperCase() );

console.log(a.slice(0,1).toUpperCase() + a.slice(1,3).toLowerCase() +" "+ b.toUpperCase()+" "+c.toUpperCase()+" "+d.toUpperCase()+" "+e.toLowerCase() );

console.log(a.slice(0,1).toUpperCase() + a.slice(1,3).toLowerCase() + " " + b.slice(0,1).toUpperCase() + b.slice(1,2) + " " + c.slice(0,1).toUpperCase() + c.slice(1,5).toLowerCase() + " " + d.slice(0,1).toUpperCase() + d.slice(1,2).toLowerCase() + " "+ e.slice(0,1).toUpperCase() + e.slice(1,6).toLowerCase() );





