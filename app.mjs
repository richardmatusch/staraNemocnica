import { staraNemocnica } from "./timetables.mjs";


// logic to identify needed timetable (workday, holiday...)
const holidays = ["1.1", "6.1", "29.3", "1.4", "1.5", "8.5", "5.7", "29.8", "1.9", "15.9", "1.11", "17.11", "24.12", "25.12", "26.12"];

const today = new Date();
const todayMonth = today.getMonth() + 1; 
const todayDayOfMonth = today.getDate();

const todayHours = String(today.getHours()).padStart(2, '0');
const todayMinutes = String(today.getMinutes()).padStart(2, '0');
const todayTime = `${todayHours}:${todayMinutes}`; 

function isTodayHoliday(holidays) { // function to check if today is a holiday
    const formattedToday = `${todayDayOfMonth}.${todayMonth}`; 
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
console.log(todaysTimetable);    
console.log(todayTime);


// trying to retrieve relevant data from timetables

















