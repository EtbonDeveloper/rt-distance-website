import schedule from './schedule.js';

const codesList = document.querySelector('#classroom-codes');
codesList.innerHTML = '';
const provenProperties = [];

for (const dayOfWeek in schedule) {
    for (const lessonTime in schedule[dayOfWeek]) {
        if (lessonTime === 'str_day_of_week')
            continue;

        const lessonInfoObj = schedule[dayOfWeek][lessonTime]; 
        const lesson = lessonInfoObj['lesson_name'];
        const classroomCode = lessonInfoObj['classroom_code'];

        if (provenProperties.includes(lesson) || lesson.includes(' або '))
            continue;

        codesList.innerHTML += `<li>${lesson}: ${classroomCode}</li>`;
        provenProperties.push(lesson);
    }
}