import schedule from './schedule.js';

const lessonInfo = document.querySelector('#lesson-info');
let lessonTime;
let lessonInfoObj;
let strDayOfWeek;

function writeLessonInfoInTag() {
    const date = new Date;
    const currentUATime = date.toLocaleTimeString('ua', {timeZone: 'Europe/Kyiv'});
    const dayOfWeek = date.getDay();

    if (currentUATime >= '08:30' && currentUATime < '10:00') {
        lessonTime = '08:30';
    } else if (currentUATime >= '10:00' && currentUATime < '11:30') {
        lessonTime = '10:00';
    } else if (currentUATime >= '11:30' && currentUATime < '13:00') {
        lessonTime = '11:30';
    } else if (currentUATime >= '13:00' && currentUATime < '14:20') {
        lessonTime = '13:00';
    }

    try {
        lessonInfoObj = schedule[dayOfWeek][lessonTime];
        strDayOfWeek = schedule[dayOfWeek]['str_day_of_week'];
    } catch {
        lessonInfoObj = null;
        strDayOfWeek = null;
    }

    if (lessonInfoObj) {
        const { lesson_name, classroom_code, lesson_link } = lessonInfoObj;
        lessonInfo.innerHTML = `${strDayOfWeek}:<br>Сьогодні о ${currentUATime} у нас за розкладом: ${lesson_name}.<br>Код або посилання classroom: ${classroom_code}<br>${lesson_link}`;
    } else if (dayOfWeek === 6 || dayOfWeek === 0) {
        lessonInfo.innerHTML = `Зараз: ${currentUATime}. Сьогодні вихідний, відпочивайте!`;
    } else if (currentUATime >= '24:00' || currentUATime >= '01:00' && currentUATime < '08:30') {
        lessonInfo.innerHTML = `Зараз: ${currentUATime}. На сьогодні пари ще не розпочалися, відпочивайте!`;
    } else {
        lessonInfo.innerHTML = `Зараз: ${currentUATime}. На сьогодні пари вже закінчилися, відпочивайте!`;
    }

    lessonTime = null;
}

writeLessonInfoInTag();
setInterval(writeLessonInfoInTag, 1000);
