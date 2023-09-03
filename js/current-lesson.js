import schedule from './schedule.js';

const lessonInfo = document.querySelector('#lesson-info');

let lessonNumber;
let lessonObject;
let strDayOfWeek;
let numberOfLessons;

const writeLessonInfoInTag = () => {
    const date = new Date;
    const currentUATime = date.toLocaleTimeString('ua', {timeZone: 'Europe/Kyiv'});
    const dayOfWeek = date.getDay();

    if (currentUATime >= '08:30' && currentUATime <= '09:50') {
        lessonNumber = 1;
    } else if (currentUATime >= '10:00' && currentUATime <= '11:20') {
        lessonNumber = 2;
    } else if (currentUATime >= '11:50' && currentUATime <= '13:10') {
        lessonNumber = 3;
    } else if (currentUATime >= '13:20' && currentUATime <= '14:40') {
        lessonNumber = 4;
    } else {
        lessonNumber = null;
    }

    try {
        lessonObject = schedule[dayOfWeek][lessonNumber];
        strDayOfWeek = schedule[dayOfWeek]['strDayOfWeek'];
        numberOfLessons = schedule[dayOfWeek]['numberOfLessons'];
    } catch {
        lessonObject = null;
    }

    if (lessonObject) {
        const {lessonName, classroomCode, lessonLink} = lessonObject;
        lessonInfo.innerHTML = `${strDayOfWeek}:<br>Сьогодні о ${currentUATime} у нас за розкладом: ${lessonName}.<br>Код або посилання classroom: ${classroomCode}<br>${lessonLink}`;
    } else if (dayOfWeek === 6 || dayOfWeek === 0) {
        lessonInfo.innerHTML = `Зараз: ${currentUATime}. Сьогодні вихідний, відпочивайте!`;
    } else if (currentUATime >= '00:00' && currentUATime < '08:30') {
        lessonInfo.innerHTML = `Зараз: ${currentUATime}. На сьогодні пари ще не розпочалися, відпочивайте!`;
    } else if ((numberOfLessons === 3 && currentUATime > '13:10') || (numberOfLessons === 4 && currentUATime > '14:40')) {
        lessonInfo.innerHTML = `Зараз: ${currentUATime}. На сьогодні пари вже закінчилися, відпочивайте!`;
    } else {
        lessonInfo.innerHTML = `Зараз: ${currentUATime}. Ідіть на перерву та відпочивайте!`;
    }
}

writeLessonInfoInTag();
setInterval(writeLessonInfoInTag, 1000);
