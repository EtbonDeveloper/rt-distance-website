import schedule from './schedule.js';

const timetable = document.querySelector('#timetable');
timetable.innerHTML = '';

for (const dayOfWeek in schedule) {
    let lessonCounter = 1;
    timetable.innerHTML += `${schedule[dayOfWeek].strDayOfWeek}:<br>`;

    for (const lessonNumber in schedule[dayOfWeek]) {
        if (Number.isInteger(+lessonNumber)) {
            const lessonObject = schedule[dayOfWeek][lessonNumber];
            const lessonName = lessonObject.lessonName;
            timetable.innerHTML += `${lessonCounter++} пара - ${lessonName}<br>`;
        }
    }
    
    timetable.innerHTML += '<br>';
}
