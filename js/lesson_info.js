import schedule from './schedule.js';

document.querySelector('#refresh-lesson-info-btn').onclick = () => writeLessonInfoInTag(getLessonInfoObj(getLessonTimeObj(getCurrentDateTimeObj())));

const getCurrentDateTimeObj = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const currentTime = date.toLocaleTimeString();
    const dayOfWeek = date.getDay();
    return { hours, minutes, currentTime, dayOfWeek };
}

const getLessonTimeObj = (currentDateTimeObj) => {
    const { hours, minutes } = currentDateTimeObj;
    let lessonTime;

    if (((hours >= 8 && minutes >= 30) || (hours >= 9)) && hours < 10)
        lessonTime = '08:30';
    else if (((hours >= 11 && minutes >= 30) || (hours >= 12)) && hours < 13)
        lessonTime = '11:30';
    else if (hours >= 10 && hours < 13)
        lessonTime = '10:00';
    else if (((hours >= 13 && hours < 14) || (hours >= 14 && minutes < 30)) && hours < 15)
        lessonTime = '13:00';
    
    currentDateTimeObj['lessonTime'] = lessonTime;
    return currentDateTimeObj;
}

const getLessonInfoObj = (lessonTimeObj) => {
    const { dayOfWeek, lessonTime } = lessonTimeObj;

    try {
        lessonTimeObj['lessonInfo'] = schedule[dayOfWeek][lessonTime];
        lessonTimeObj['strDayOfWeek'] = schedule[dayOfWeek]['strDayOfWeek'];
    } catch {
        lessonTimeObj['lessonInfo'] = null;
    } finally {
        return lessonTimeObj;
    }
}

const writeLessonInfoInTag = (lessonInfoObj) => {
    const htmlLessonInfoParagraph = document.getElementById('lesson-info');
    const { lessonInfo, hours, dayOfWeek, currentTime, strDayOfWeek } = lessonInfoObj;

    if (lessonInfo) {
        const { lesson, classroom_code, zoom_refs } = lessonInfo;
        htmlLessonInfoParagraph.innerHTML = `${strDayOfWeek}:<br>
        Сьогодні о ${currentTime} у нас за розкладом: ${lesson}.<br>
        Код або посилання classroom: ${classroom_code}<br>${zoom_refs}`;
    } else if (dayOfWeek === 6 || dayOfWeek === 7) {
        htmlLessonInfoParagraph.innerHTML = `Зараз: ${currentTime}. Сьогодні вихідний,
        відпочивайте!`;
    } else if (hours >= 0 && hours < 9) {
        htmlLessonInfoParagraph.innerHTML = `Зараз: ${currentTime}. На сьогодні пари ще не розпочалися,
        відпочивайте!`;
    } else {
        htmlLessonInfoParagraph.innerHTML = `Зараз: ${currentTime}. На сьогодні пари вже закінчилися,
        відпочивайте!`;
    }
}

writeLessonInfoInTag(getLessonInfoObj(getLessonTimeObj(getCurrentDateTimeObj())));