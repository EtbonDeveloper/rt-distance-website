import calls from './calls-object.js';

const callsElement = document.querySelector('#calls');

for (const numberOfLesson in calls) {
    const callElement = document.createElement('p');
    callElement.innerText = `${numberOfLesson} пара: ${calls[numberOfLesson].startTime} - ${calls[numberOfLesson].endTime}`;
    callsElement.append(callElement);
}
