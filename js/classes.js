import schedule from './schedule.js';

const timetable = document.querySelector('#timetable');
timetable.innerHTML = '';

for (const dayOfWeek in schedule) {
    let numberOfLesson = schedule[dayOfWeek].numberOfLessons === 4 ? 1 : 2;
    timetable.innerHTML += `${schedule[dayOfWeek].strDayOfWeek}:<br>`;

    for (const lessonNumber in schedule[dayOfWeek]) {
        if (Number.isInteger(+lessonNumber)) {
            const lessonObject = schedule[dayOfWeek][lessonNumber];
            const lessonName = lessonObject.lessonName;
            timetable.innerHTML += `${numberOfLesson++} пара - ${lessonName}<br>`;
        }
    }
    
    timetable.innerHTML += '<br>';
}
