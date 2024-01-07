import { staraNemocnica } from "./timetables.mjs";


// logic to identify needed timetable (workday, holiday...)
const holidays = ["1.1", "6.1", "29.3", "1.4", "1.5", "8.5", "5.7", "29.8", "1.9", "15.9", "1.11", "17.11", "24.12", "25.12", "26.12"];

let today = new Date();
let todayMonth = today.getMonth() + 1; 
let todayDayOfMonth = today.getDate();

function isTodayHoliday(holidays) { // function to check if today is a holiday
    let formattedToday = `${todayDayOfMonth}.${todayMonth}`; 
    return holidays.includes(formattedToday) || today.getDay() === 6 || today.getDay() === 0;
}

let todaysTimetable;
if (isTodayHoliday(holidays)) {
    todaysTimetable = "holidays";
} else if ((!isTodayHoliday(holidays)) && (todayMonth === 7 || todayMonth === 8)) { // check if school holiday
    todaysTimetable = "schoolHolidays";
} else {
    todaysTimetable = "workDays"; // otherwise workday
}   


// trying to retrieve relevant data from timetables
let nowMinutesTotal = (today.getHours() * 60) + today.getMinutes(); // current time to minutes

let numOneHavlickova = staraNemocnica[1].havlickova[todaysTimetable];

let test = [];
for (let i = 0; i < numOneHavlickova.length; i++) {
    let split = (numOneHavlickova[i]).split(':').map(Number); 
    let splitToMin = split[0] * 60 + split[1];

    if (test.length < 3 && splitToMin > nowMinutesTotal) {
        test.push(numOneHavlickova[i]) // retrieved next 3 trams based on current time and day
    }

}
console.log("Linka: 1, Smer: Havlíčkova, Nasledujúce spoje: " + test);














