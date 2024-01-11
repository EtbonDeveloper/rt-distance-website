import schedule from './schedule.js';
import strDayOfWeekObject from './day-of-week.js';

const timetable = document.querySelector('#timetable');
timetable.innerHTML = '';

for (const dayOfWeek in schedule) {
    timetable.innerHTML += `${strDayOfWeekObject[dayOfWeek]}:<br>`;

    for (const lessonNumber in schedule[dayOfWeek]) {
        timetable.innerHTML += `${lessonNumber} пара - ${schedule[dayOfWeek][lessonNumber].lessonName}<br>`;
    }

    timetable.innerHTML += '<br>';
}
