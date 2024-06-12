import schedule from './schedule.js';
import calls from './calls-object.js';
import strDayOfWeekObject from './day-of-week.js';

const lessonInfo = document.querySelector('#lesson-info');
const dayOfWeekObject = {'пн': 1, 'вт': 2, 'ср': 3, 'чт': 4, 'пт': 5, 'сб': 6, 'вс': 0};

writeLessonInfo();
setInterval(writeLessonInfo, 1000);

function writeLessonInfo() {
    const date = new Date();
    const currentUATime = new Intl.DateTimeFormat('ua', {timeZone: 'Europe/Kyiv', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false}).format(date);
    const dayOfWeek = dayOfWeekObject[new Intl.DateTimeFormat('ua', {timeZone: 'Europe/Kyiv', weekday: 'short'}).format(date)];

    let lessonNumber = null;

    for (const call in calls) {
        if (currentUATime >= calls[call].startTime && currentUATime <= calls[call].endTime) {
            lessonNumber = call;
            break;
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
        const lessonName = lessonObject.lessonName;
        const courseLink = lessonObject.courseLink;
        const lessonLink = lessonObject.lessonLink;
        lessonInfo.innerHTML = `Сьогодні ${strDayOfWeek}, зараз в ${currentUATime} у нас за розкладом: ${lessonName}<br>Посилання на курс: ${courseLink}<br>Постійне посилання на конференцію: ${lessonLink}`;
    } else if (dayOfWeek === dayOfWeekObject['сб'] || dayOfWeek === dayOfWeekObject['вс']) {
        lessonInfo.innerText = `Зараз: ${currentUATime}. Сьогодні вихідний, відпочивайте!`;
    } else {
        lessonInfo.innerText = `Зараз: ${currentUATime}. Пари немає, відпочивайте!`;
    }
}
