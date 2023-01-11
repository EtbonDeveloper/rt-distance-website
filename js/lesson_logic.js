const timetable = {
    1: {
        '08:30': {
	        'lesson': 'Історія України',
	        'classroom_code': 'x4wh3k7',
            'zoom_refs': 'Discord: <a href="https://discord.gg/CWrxRjr6aT">Натисни на мене, щоб перейти до Discord сервера.</a>'
	    },
	    '10:00': {
	        'lesson': 'Теорія кіл',
	        'classroom_code': 'xbwv4zc',
            'zoom_refs': 'Постійного посилання на конференцію для цього предмета немає! Заходьте за новим посиланням у classroom.'
	    },
        '11:30': {
	        'lesson': 'Інженерна графіка',
	        'classroom_code': 'idfnskr',
            'zoom_refs': 'Постійного посилання на конференцію для цього предмета немає! Заходьте за новим посиланням у classroom.'
	    },
        
    },
    2: {
        '08:30': {
	        'lesson': 'Технологія',
	        'classroom_code': 'md3a47s',
            'zoom_refs': 'Постійне посилання на zoom: <a href="https://us04web.zoom.us/j/3197524662?pwd=mNgDz72VTb68NXISNR5hfGcOCp12Tl.1">Натисни на мене, щоб перейти до zoom конференції.</a>'
	    },
        '10:00': {
	        'lesson': 'Захист Вітчизни',
	        'classroom_code': 'npgncuz',
            'zoom_refs': 'Постійне посилання на конференцію: <a href="https://meet.google.com/qag-kqao-znf">Натисни на мене, щоб перейти до google meet конференції.</a>'
	    },
        '11:30': {
	        'lesson': 'Фізика',
	        'classroom_code': 'ioi25s6',
            'zoom_refs': 'Постійного посилання на конференцію для цього предмета немає! Заходьте за новим посиланням у classroom.'
	    },
        '13:00': {
	        'lesson': 'Фізична культура',
	        'classroom_code': '<a href="https://classroom.google.com/c/MTUxNTcxNTg1Nzkx?cjc=qgcrsap">Натисни на мене, щоб перейти у classroom Фізичної культури.</a>',
            'zoom_refs': 'Посилання на конференцію немає!'
	    }
    },
    3: {
        '08:30': {
	        'lesson': 'Охорона праці',
	        'classroom_code': 'Ще невідомо',
            'zoom_refs': 'Ще невідомо'
	    },
        '10:00': {
	        'lesson': 'Основи програмування',
	        'classroom_code': 'yw4r6xa',
            'zoom_refs': 'Ще невідомо'
	    },
        '11:30': {
	        'lesson': 'Математика',
	        'classroom_code': 'ikkjwrr',
            'zoom_refs': 'Постійного посилання на конференцію для цього предмета немає! Заходьте за новим посиланням у classroom.'
	    },
	'13:00': {
		'lesson': 'Захист Вітчизни або Укр. мова',
	        'classroom_code': 'Захист Вітчизни: npgncuz. Укр. мова: zuwqrzq',
            'zoom_refs': 'Постійне посилання на Захист Вітчизни: <a href="https://meet.google.com/qag-kqao-znf">Натисни на мене, щоб перейти до google meet конференції.</a><br>Постійне посилання на Укр. мову: <a href="http://meet.google.com/vrf-myve-ytb">Натисни на мене, щоб перейти до google meet конференції.</a>'
	    }
    },
    4: {
        '08:30': {
	        'lesson': 'Іноземна мова',
	        'classroom_code': 'Пугачова: <a href="https://classroom.google.com/c/NTQ0OTY5NTkyNDgw?cjc=x4z7qq7">Натисни на мене, щоб перейти у classroom Англійської мови.</a>',
            'zoom_refs': 'Постійного посилання на конференцію для цього предмета немає! Заходьте за новим посиланням у classroom або Discord.'
	    },
        '10:00': {
	        'lesson': 'Фізична культура',
	        'classroom_code': '<a href="https://classroom.google.com/c/MTUxNTcxNTg1Nzkx?cjc=qgcrsap">Натисни на мене, щоб перейти у classroom Фізичної культури.</a>',
            'zoom_refs': 'Посилання на конференцію немає!'
	    },
        '11:30': {
	        'lesson': 'Математика',
	        'classroom_code': 'ikkjwrr',
            'zoom_refs': 'Постійного посилання на конференцію для цього предмета немає! Заходьте за новим посиланням у classroom.'
	    },
        '13:00': {
	        'lesson': 'Стандартизація',
	        'classroom_code': 'xbwv4zc',
            'zoom_refs': 'Постійного посилання на конференцію для цього предмета немає! Заходьте за новим посиланням у classroom.'
	    }
    },
    5: {
        '08:30': {
	        'lesson': 'Вища математика',
	        'classroom_code': 'Ще невідомо',
            'zoom_refs': 'Постійного посилання на конференцію для цього предмета немає! Заходьте за новим посиланням у classroom.'
	    },
        '10:00': {
	        'lesson': 'Укр. літ',
	        'classroom_code': 'Укр. літ: pgeaznn',
            'zoom_refs': 'Постійне посилання на конференцію: <a href="http://meet.google.com/vrf-myve-ytb">Натисни на мене, щоб перейти до google meet конференції.</a>'
	    },
        '11:30': {
	        'lesson': 'Біологія',
	        'classroom_code': 'oeu36uo',
            'zoom_refs': 'Постійне посилання zoom: <a href="https://us05web.zoom.us/j/8411452864?pwd=ZVRXUlFrQ3B6YVVKZUt3eVozMTU3UT09">Натисни на мене, щоб перейти до zoom конференції.</a>'
	    }
    }
}

const daysDict = {1: 'Понеділок', 2: 'Вівторок', 3: 'Середа', 4: 'Четвер', 5: 'П\'ятниця'};

document.querySelector('#refresh-lesson-info-btn').onclick = () => writeLessonInfoInTag(getLessonInfoObj(getLessonTimeInfoObj()));

const getLessonTimeInfoObj = () => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const currentTime = new Date().toLocaleTimeString();
    let lessonTime;

    if (((hours >= 8 && minutes >= 30) || (hours >= 9)) && hours < 10)
        lessonTime = '08:30';
    else if (((hours >= 11 && minutes >= 30) || (hours >= 12)) && hours < 13)
        lessonTime = '11:30';
    else if (hours >= 10 && hours < 13)
        lessonTime = '10:00';
    else if (((hours >= 13 && hours < 14) || (hours >= 14 && minutes < 30)) && hours < 15)
        lessonTime = '13:00';

    return { lessonTime, hours, currentTime };
};

const getLessonInfoObj = lessonTimeInfoObj => {
    const dayOfWeek = new Date().getDay();
    lessonTimeInfoObj['dayOfWeek'] = dayOfWeek;

    try {
        lessonTimeInfoObj['lessonInfo'] = timetable[dayOfWeek][lessonTimeInfoObj['lessonTime']];
    } catch {
        lessonTimeInfoObj['lessonInfo'] = null;
    } finally {
        return lessonTimeInfoObj
    }
};

const writeLessonInfoInTag = lessonInfoObj => {
    const htmlLessonInfoParagraph = document.getElementById('lesson-info');
    const { lessonInfo, hours, dayOfWeek, currentTime } = lessonInfoObj;

    if (lessonInfo) {
        htmlLessonInfoParagraph.innerHTML = `${daysDict[dayOfWeek]}:<br>
        Сьогодні о ${currentTime} у нас за розкладом: ${lessonInfo['lesson']}.<br>
        Код або посилання classroom: ${lessonInfo['classroom_code']}<br>
        ${lessonInfo['zoom_refs']}`;
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
};

writeLessonInfoInTag(getLessonInfoObj(getLessonTimeInfoObj()));