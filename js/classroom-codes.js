import schedule from './schedule.js';

const codesList = document.querySelector('#classroom-codes');

codesList.innerHTML = '';
const provenProperties = [];

for (const dayOfWeek in schedule) {
    for (const lessonNumber in schedule[dayOfWeek]) {
        if (Number.isInteger(+lessonNumber)) {
            const lessonObject = schedule[dayOfWeek][lessonNumber]; 
            const lessonName = lessonObject.lessonName;
            const classroomCode = lessonObject.classroomCode;
    
            if (!provenProperties.includes(lessonName) && !lessonName.includes(' або ')) {
                codesList.innerHTML += `<li>${lessonName}: ${classroomCode}</li>`;
                provenProperties.push(lessonName);
            }
        }
    }
}
