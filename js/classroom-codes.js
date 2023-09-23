import schedule from './schedule.js';

const codesList = document.querySelector('#classroom-codes');
const classroomButton = document.querySelector('#classroom-btn');

classroomButton.addEventListener('click', function () {
    if (this.className == 'codes') {
        this.className = 'links';
        this.innerText = 'Конвертувати у коди';
    } else {
        this.innerText = 'Конвертувати у посилання';
        this.className = 'codes';
    }

    writeClassroomCodes();
});

window.addEventListener('DOMContentLoaded', () => {
    const className = localStorage.getItem('className');
    const buttonText = localStorage.getItem('buttonText');

    if (className && buttonText) {
        classroomButton.className = className;
        classroomButton.innerText = buttonText;
    }

    writeClassroomCodes();
});

window.addEventListener('beforeunload', () => {
    localStorage.setItem('className', classroomButton.className);
    localStorage.setItem('buttonText', classroomButton.innerText);
});

function writeClassroomCodes() {
    codesList.innerHTML = '';
    const provenProperties = [];

    for (const dayOfWeek in schedule) {
        for (const lessonNumber in schedule[dayOfWeek]) {
            if (Number.isInteger(+lessonNumber)) {
                const lessonObject = schedule[dayOfWeek][lessonNumber];
                const lessonName = lessonObject.lessonName;
                let classroomCode = lessonObject.classroomCode;

                if (!provenProperties.includes(lessonName) && !lessonName.includes(' або ')) {
                    const classroomCodeItem = document.createElement('li');

                    if (classroomButton.className == 'codes') {
                        const matches = [...classroomCode.matchAll(/cjc=([A-Za-z0-9]{7})/g)];
                        const classroomCodes = [];

                        for (const match of matches) {
                            classroomCodes.push(match[1]);
                        }

                        classroomCode = [...new Set(classroomCodes)].join(', ');
                    }

                    classroomCodeItem.innerHTML = `${lessonName}: ${classroomCode}`;
                    codesList.prepend(classroomCodeItem);
                    provenProperties.push(lessonName);
                }
            }
        }
    }
}
