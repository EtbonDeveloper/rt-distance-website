import schedule from './schedule.js';

const timetable = document.querySelector('#timetable');
timetable.innerHTML = '';

for (const dayOfWeek in schedule) {
    let lessonCounter = 1;
    timetable.innerHTML += `${schedule[dayOfWeek]['strDayOfWeek']}:<br>`;

    for (const lessonNumber in schedule[dayOfWeek]) {
        if (lessonNumber !== 'numberOfLessons' && lessonNumber !== 'strDayOfWeek') {
            const lessonInfoObj = schedule[dayOfWeek][lessonNumber];
            const lesson = lessonInfoObj['lessonName'];
            timetable.innerHTML += `${lessonCounter++} пара - ${lesson}<br>`;
        }
    }
    
    timetable.innerHTML += '<br>';
}
