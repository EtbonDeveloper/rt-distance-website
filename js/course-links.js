import schedule from './schedule.js';

const courseLinks = document.querySelector('#course-links');

courseLinks.innerHTML = '';
const provenProperties = [];

for (const dayOfWeek in schedule) {
    for (const lessonNumber in schedule[dayOfWeek]) {
        const lessonObject = schedule[dayOfWeek][lessonNumber];
        const lessonName = lessonObject.lessonName;
        const courseLink = lessonObject.courseLink;

        if (!provenProperties.includes(lessonName) && !lessonName.includes('/')) {
            const courseLinkItem = document.createElement('li');
            courseLinkItem.innerHTML = `${lessonName}:<br>${courseLink}`;
            courseLinks.append(courseLinkItem);
            provenProperties.push(lessonName);
        }
    }
}
