import schedule from './schedule.js';
import calls from './calls-object.js';
import strDayOfWeekObject from './day-of-week.js';

const lessonInfo = document.querySelector('#lesson-info');
const dayOfWeekObject = {'пн': 1, 'вт': 2, 'ср': 3, 'чт': 4, 'пт': 5, 'сб': 6, 'вс': 0};

writeLessonInfo();
setInterval(writeLessonInfo, 1000);

function writeLessonInfo() {
    const date = new Date;
    const currentUATime = date.toLocaleTimeString('ua', {timeZone: 'Europe/Kyiv'});
    const dayOfWeek = dayOfWeekObject[date.toLocaleDateString('ua', {timeZone: 'Europe/Kyiv', weekday: 'short'})];
    
    let lessonNumber = null;

    for (const call in calls) {
        if (currentUATime >= calls[call].startTime && currentUATime <= calls[call].endTime) {
            lessonNumber = call;
        }
    }

    let lessonObject;
    let strDayOfWeek = null;
    let numberOfLessons = null;

    try {
        lessonObject = schedule[dayOfWeek][lessonNumber];
        strDayOfWeek = strDayOfWeekObject[dayOfWeek];
        numberOfLessons = schedule[dayOfWeek].numberOfLessons;
    } catch {
        lessonObject = null;
    }

    if (lessonObject) {
        const {lessonName, courseLink, lessonLink} = lessonObject;
        lessonInfo.innerHTML = `Сьогодні ${strDayOfWeek}, зараз в ${currentUATime} у нас за розкладом: ${lessonName}<br>Посилання на курс: ${courseLink}<br>Посилання на конференцію: ${lessonLink}`;
    } else if (dayOfWeek === dayOfWeekObject['сб'] || dayOfWeek === dayOfWeekObject['вс']) {
        lessonInfo.innerText = `Зараз: ${currentUATime}. Сьогодні вихідний, відпочивайте!`;
    } else {
        lessonInfo.innerText = `Зараз: ${currentUATime}. Пари зараз немає, відпочивайте!`;
    }
}
