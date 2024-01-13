import { staraNemocnica } from "./timetables.js";


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


// retrieving relevant data from timetables
let nowMinutesTotal = (today.getHours() * 60) + today.getMinutes(); // current time in minutes

function getNextTwoTrams(stopTimetable, nowMinutesTotal) {
    let nextTwoTrams = [];
    for (let i = 0; i < stopTimetable.length; i++) {
        let split = stopTimetable[i].split(':').map(Number);
        let splitToMin = split[0] * 60 + split[1];

        if (nextTwoTrams.length < 2 && splitToMin > nowMinutesTotal) {
            nextTwoTrams.push(stopTimetable[i]); // retrieving next 2 trams based on current time and day
        }
    }
    return nextTwoTrams;
}

var zastavka = [];
for (let line in staraNemocnica) {
    if (staraNemocnica.hasOwnProperty(line)) {
        for (let stop in staraNemocnica[line]) {
            if (staraNemocnica[line].hasOwnProperty(stop)) {
                let timetable = staraNemocnica[line][stop][todaysTimetable];
                let nextTrams = getNextTwoTrams(timetable, nowMinutesTotal);
                zastavka.push([[line],[stop],nextTrams]); // looping through staraNemocnica with getNextTwoTrams and building array
            }
        }
    }
}

for (let i = 0; i < zastavka.length; i++) {
    if (zastavka[i][2][0] !== undefined) {
        let split = zastavka[i][2][0].split(':').map(Number);
        let splitToMin = split[0] * 60 + split[1];
        zastavka[i][2][0] = splitToMin - nowMinutesTotal; // converting 1st tram time to minutes till departure
    } 
}

zastavka.sort((a, b) => a[2][0] - b[2][0]); // sorting from earliest departure

for (let i = 0; i < zastavka.length; i++) {
    if (zastavka[i][2][0] !== undefined) {
        zastavka[i][2][0] += " min."
    } else {
        zastavka[i][2][0] = "-" // adding " min." and "-" to the first time value of each tram
    }
}

export { zastavka };







