import calls from './calls-object.js';

const callsElement = document.querySelector('#calls');

const numberOfLessons = 4;

for (let i = 1; i <= numberOfLessons; ++i) {
    const callElement = document.createElement('p');
    callElement.innerText = `${i} пара: ${calls[i].startTime} - ${calls[i].endTime}`;
    callsElement.append(callElement);
}
