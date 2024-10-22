console.log("Hello");
let now = new Date();
console.log(now);
let msec = Date.parse(now);
console.log(msec);
let birthday = new Date("October 16, 1996 05:35:32");

console.log(msec);

let today = moment().format("dddd Do MMMM");
console.log(today);
