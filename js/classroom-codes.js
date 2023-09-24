import schedule from './schedule.js';

const codesList = document.querySelector('#classroom-codes');
const classroomButton = document.querySelector('#classroom-btn');
const popup = document.querySelector('#popup');

let className;
let buttonText;
let alreadyCopied = true;

classroomButton.onclick = function () {
    if (className == 'codes') {
        className = 'links';
        classroomButton.innerText = buttonText = 'Конвертувати у коди';
    } else {
        className = 'codes';
        classroomButton.innerText = buttonText = 'Конвертувати у посилання';
    }

    writeClassroomCodes();
}

onload = function () {
    className = localStorage.getItem('className');
    classroomButton.innerText = buttonText = localStorage.getItem('buttonText');

    if (className == null || buttonText == null) {
        className = 'codes';
        classroomButton.innerText = buttonText = 'Конвертувати у посилання';
    }

    writeClassroomCodes();
}

onbeforeunload = function () {
    localStorage.setItem('className', className);
    localStorage.setItem('buttonText', buttonText);
}

function showPopup(popupText) {
    popup.innerText = popupText;
    popup.className = '';
    alreadyCopied = false;
    setTimeout(hidePopup, 1000);
}

function hidePopup() {
    popup.className = 'hidden';
    alreadyCopied = true;
}

function codeToCopy(event) {
    if (alreadyCopied) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(event.target.innerText).then(function () {
                showPopup(`Код: ${event.target.innerText} успішно скопійован в буфер!`);
            });
        } else {
            showPopup('Не вдалося скопіювати код в буфер!');
        }
    }
}

function createClassroomCodeElement(classroomCode) {
    const classroomCodeElement = document.createElement('span');
    classroomCodeElement.onclick = codeToCopy;
    classroomCodeElement.className = 'underline';
    classroomCodeElement.innerText = classroomCode;
    return classroomCodeElement;
}

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
                    const classroomCodeElement = document.createElement('span');

                    if (className == 'codes') {
                        const matches = [...classroomCode.matchAll(/cjc=([A-Za-z0-9]{7})/g)];
                        let classroomCodes = [];

                        for (const match of matches) {
                            classroomCodes.push(match[1]);
                        }

                        classroomCode = [...new Set(classroomCodes)].toString();
                        classroomCodes = classroomCode.split(',');

                        if (classroomCodes.length == 2) {
                            classroomCodeElement.append(createClassroomCodeElement(classroomCodes[0]));
                            classroomCodeElement.append(', ');
                            classroomCodeElement.append(createClassroomCodeElement(classroomCodes[1]));
                        } else {
                            classroomCodeElement.append(createClassroomCodeElement(classroomCode));
                        }

                        classroomCodeItem.innerHTML = `${lessonName}: `;
                        classroomCodeItem.append(classroomCodeElement);
                    } else {
                        classroomCodeItem.innerHTML = `${lessonName}: ${classroomCode}`;
                    }

                    codesList.prepend(classroomCodeItem);
                    provenProperties.push(lessonName);
                }
            }
        }
    }
}
