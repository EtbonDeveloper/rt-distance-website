import schedule from './schedule.js';
import calls from './calls-object.js';

const dayOfWeekObject = {
    'понеділок': 1,
    'вівторок': 2,
    'середа': 3,
    'четвер': 4,
    'пʼятниця': 5,
    'субота': 6,
    'неділя': 0
};
const lessonInfo = document.querySelector('#lesson-info');

writeLessonInfo();
setInterval(writeLessonInfo, 1000);

function writeLessonInfo() {
    const currentUATime = new Intl.DateTimeFormat('uk-UA', {timeZone: 'Europe/Kyiv', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false}).format();
    const strDayOfWeek = new Intl.DateTimeFormat('uk-UA', {timeZone: 'Europe/Kyiv', weekday: 'long'}).format()
    const dayOfWeek = dayOfWeekObject[strDayOfWeek];

    let lessonNumber = null;

    for (const call in calls) {
        if (currentUATime >= calls[call].startTime && currentUATime <= calls[call].endTime) {
            lessonNumber = call;
        }
    }
    let lessonObject = null;

    try {
        lessonObject = schedule[dayOfWeek][lessonNumber];
    } catch {
        lessonObject = null;
    }
    if (lessonObject) {
        lessonInfo.innerHTML = `Сьогодні ${strDayOfWeek}, зараз в ${currentUATime} за розкладом ${lessonObject.lessonName}<br>Посилання на курс: ${lessonObject.courseLink}<br>Постійне посилання на конференцію: ${lessonObject.lessonLink}`;
    } else if (dayOfWeek === 6 || dayOfWeek === 0) {
        lessonInfo.innerText = `Сьогодні ${strDayOfWeek}, зараз в ${currentUATime} за розкладом вихідний, відпочивайте!`;
    } else {
        lessonInfo.innerText = `Сьогодні ${strDayOfWeek}, зараз в ${currentUATime} за розкладом пари немає, відпочивайте!`;
    }
}
