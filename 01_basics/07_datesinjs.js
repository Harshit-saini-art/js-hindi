// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 6, 31)
// let myCreatedDate = new Date(2025, 6, 31, 11, 25)
// let myCreatedDate = new Date("2025-07-31")
let myCreatedDate = new Date("07-31-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);

`${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: ''
})