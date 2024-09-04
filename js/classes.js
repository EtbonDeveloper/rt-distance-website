import schedule from './schedule.js';

const strDayOfWeekObject = {
    1: 'Понеділок',
    2: 'Вівторок',
    3: 'Середа',
    4: 'Четвер',
    5: 'П\'ятниця'
};
const timetable = document.querySelector('#timetable');
timetable.innerHTML = '';

for (const dayOfWeek in schedule) {
    timetable.innerHTML += `${strDayOfWeekObject[dayOfWeek]}:<br>`;

    for (const lessonNumber in schedule[dayOfWeek]) {
        timetable.innerHTML += `${lessonNumber} пара - ${schedule[dayOfWeek][lessonNumber].lessonName}<br>`;
    }

    timetable.innerHTML += '<br>';
}
