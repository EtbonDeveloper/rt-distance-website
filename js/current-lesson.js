import schedule from './schedule.js';
import calls from './calls-object.js';

const lessonInfo = document.querySelector('#lesson-info');

let lessonObject;
let strDayOfWeek;
let numberOfLessons;

const dayOfWeekObject = {'пн': 1, 'вт': 2, 'ср': 3, 'чт': 4, 'пт': 5, 'сб': 6, 'вс': 0};
const lessonsInDay = 4;

const writeLessonInfoInTag = () => {
    const date = new Date;
    const currentUATime = date.toLocaleTimeString('ua', {timeZone: 'Europe/Kyiv'});
    const dayOfWeek = dayOfWeekObject[date.toLocaleDateString('ua', {timeZone: 'Europe/Kyiv', weekday: 'short'})];
    
    let lessonNumber = null;

    for (let i = 1; i <= lessonsInDay; ++i) {
        if (currentUATime >= calls[i].startTime && currentUATime <= calls[i].endTime) {
            lessonNumber = i;
        }
    }

    try {
        lessonObject = schedule[dayOfWeek][lessonNumber];
        strDayOfWeek = schedule[dayOfWeek].strDayOfWeek;
        numberOfLessons = schedule[dayOfWeek].numberOfLessons;
    } catch {
        lessonObject = null;
    }

    if (lessonObject) {
        const {lessonName, classroomCode, lessonLink} = lessonObject;
        lessonInfo.innerHTML = `${strDayOfWeek}:<br>Сьогодні о ${currentUATime} у нас за розкладом: ${lessonName}.<br>Код або посилання classroom: ${classroomCode}<br>${lessonLink}`;
    } else if (dayOfWeek === dayOfWeekObject['сб'] || dayOfWeek === dayOfWeekObject['вс']) {
        lessonInfo.innerHTML = `Зараз: ${currentUATime}. Сьогодні вихідний, відпочивайте!`;
    } else if (currentUATime < calls[1].startTime || (currentUATime < calls[2].startTime && numberOfLessons === 3)) {
        lessonInfo.innerHTML = `Зараз: ${currentUATime}. На сьогодні пари ще не розпочалися, відпочивайте!`;
    } else if (currentUATime > calls[4].endTime) {
        lessonInfo.innerHTML = `Зараз: ${currentUATime}. На сьогодні пари вже закінчилися, відпочивайте!`;
    } else {
        lessonInfo.innerHTML = `Зараз: ${currentUATime}. Ідіть на перерву та відпочивайте!`;
    }
}

writeLessonInfoInTag();
setInterval(writeLessonInfoInTag, 1000);
