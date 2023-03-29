import schedule from './schedule.js';

const timetable = document.querySelector('#timetable');
timetable.innerHTML = '';

for (const dayOfWeek in schedule) {
    let lessonCounter = 1;
    for (const lessonTime in schedule[dayOfWeek]) {
        if (lessonTime === 'strDayOfWeek')
            timetable.innerHTML += `${schedule[dayOfWeek][lessonTime]}:<br>`;
        else {
            const lessonInfoObj = schedule[dayOfWeek][lessonTime]; 
            const lesson = lessonInfoObj['lesson'];
            timetable.innerHTML += `${lessonCounter} пара - ${lesson}<br>`;
            lessonCounter++;
        } 
    }
    timetable.innerHTML += '<br>';
}