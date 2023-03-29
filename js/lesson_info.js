import schedule from './schedule.js';

setInterval(() => writeLessonInfoInTag(), 1000);

const htmlLessonInfoParagraph = document.getElementById('lesson-info');
let lessonTime;
let lessonInfoObj;
let strDayOfWeek;

const writeLessonInfoInTag = () => {
    const date = new Date();
    const currentTime = date.toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' });
    const dayOfWeek = date.getDay();

    if (currentTime >= '08:30' && currentTime < '10:00') {
        lessonTime = '08:30';
    } else if (currentTime >= '10:00' && currentTime < '11:30') {
        lessonTime = '10:00';
    } else if (currentTime >= '11:30' && currentTime < '13:00') {
        lessonTime = '11:30';
    } else if (currentTime >= '13:00' && currentTime < '14:20') {
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
        htmlLessonInfoParagraph.innerHTML = `${strDayOfWeek}:<br>Сьогодні о ${currentTime} у нас за розкладом: ${lesson_name}.<br>Код або посилання classroom: ${classroom_code}<br>${lesson_link}`;
    } else if (dayOfWeek === 6 || dayOfWeek === 0) {
        htmlLessonInfoParagraph.innerHTML = `Зараз: ${currentTime}. Сьогодні вихідний, відпочивайте!`;
    } else if (currentTime >= '24:00' || currentTime >= '01:00' && currentTime < '08:30') {
        htmlLessonInfoParagraph.innerHTML = `Зараз: ${currentTime}. На сьогодні пари ще не розпочалися, відпочивайте!`;
    } else {
        htmlLessonInfoParagraph.innerHTML = `Зараз: ${currentTime}. На сьогодні пари вже закінчилися, відпочивайте!`;
    }
    lessonTime = undefined;
}

writeLessonInfoInTag();