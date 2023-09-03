import schedule from './schedule.js';

const codesList = document.querySelector('#classroom-codes');
codesList.innerHTML = '';
const provenProperties = [];

for (const dayOfWeek in schedule) {
    for (const lessonNumber in schedule[dayOfWeek]) {
        if (lessonNumber === 'strDayOfWeek' || lessonNumber === 'numberOfLessons') {
            continue;
        }

        const lessonInfoObj = schedule[dayOfWeek][lessonNumber]; 
        const lesson = lessonInfoObj['lessonName'];
        const classroomCode = lessonInfoObj['classroomCode'];

        if (provenProperties.includes(lesson) || lesson.includes(' або ')) {
            continue;
        }

        codesList.innerHTML += `<li>${lesson}: ${classroomCode}</li>`;
        provenProperties.push(lesson);
    }
}
