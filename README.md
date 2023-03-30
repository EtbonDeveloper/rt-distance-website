# **rt-distance-website**
![Deploy site status](https://github.com/EtbonDeveloper/rt-distance-website/actions/workflows/pages/pages-build-deployment/badge.svg)

## **Что вы можете делать используя этот веб-сайт:**
+ Получить полный доступ к информации о текущей паре в реальном времени;
+ Получить полный доступ к classroom кодам и ссылкам;
+ Посмотреть расписание звонков;
+ Посмотреть расписание предметов;
+ Создать собственное приложение используя возможности моего API или просто получить данные для своих нужд. 

## **Для чего был создан веб-сайт:**
> Первостепенная причина создания этого веб-сайта — это моё хобби, без моего желания и стремления всего этого не было бы. А второстепенная — это помощь моим одногрупникам, на моём веб-сайте они могут получить любую нужную им информацию в реальном времени и даже больше..

***Перейдите по этой ссылке чтобы посетить мой веб-сайт: https://etbondeveloper.github.io/rt-distance-website/***

## **Документация по API:**
### **1. Как я храню данные:**
> В этом разделе вы узнаете как я храню данные.

Все данные иерархически структурированы в JSON (JavaScript Object Notation) файле. Почему именно JSON? Во-первых, данные в таком формате имеют человекочитаемый вид, во-вторых, большинство языков программирования нативно умеют работать с JSON и правильно обрабатывать данные, в-третьих, для такой логической связи данных которую использую я, лучше JSON не подойдёт нечего.
### **2. Как получить данные:**
> В этом разделе вы узнаете как получить данные.

Как мы уже знаем, данные которые мы хотим получить хранятся в JSON файле, а сам этот файл храниться на сервере по определённому URL адресу. В моём API есть два варианта получения данных (русский и украинский вариант данных). Вот два URL адреса на разные варианты данных:
+ Русский вариант: https://etbondeveloper.github.io/rt-distance-website/api/ru/schedule.json
+ Украинский вариант: https://etbondeveloper.github.io/rt-distance-website/api/ua/schedule.json

Как видно, они отличаются лишь названием папки на сервере "ru" и "ua". После перехода по ссылке, ваш браузер отобразит JSON файл так, как это заложено в его алгоритме, нас такой вариант не интересует, мы же не будем постоянно переходить вручную по адресу чтобы посмотреть на данные. Зная адресс файла мы можем автоматизировать процесс получения данных и их корректной обработки, используя практически любой язык программирования, про это пойдёт речь в следующем разделе.
### **3. Как работать с данными:**
> В этом разделе вы узнаете как работать с данными.

Работу с JSON на сегодняшний день поддерживает любой современный язык программирования. Это значит что вы можете использовать свой любимый язык программирования для работы с JSON. Я покажу пример работы лишь на 3 языках: Python, JavaScript и C#. Стоит сразу сказать, вы должны быть знакомы с программированием хоть чуть-чуть чтобы правильно использовать эти данные, возможности применения ограничиваются лишь вашей фантазией и опытом програмирования. Примеры того, что вы можете сделать используя эти данные: Telegram бот который работает онлайн и может подсказать вам какая сейчас идёт пара, какой classroom код этой пары и какая ссылка на пару. Приложение на Android или IOS которое оповещает вас что пора идити на пару, даёт ссылку на неё и classroom код в придачу. JSON файл содержит расписание занятий на неделю в виде объекта с свойствами:
+ `weekday_numbers` - объект, содержащий информацию для каждого дня недели. Каждый день имеет свой порядковый номер, это числовое представление дня недели указанное в качестве ключей объекта weekday_numbers.
+ `str_day_of_week` - список из двух элементов: полное название дня недели и его сокращенное название.
+ `number_of_lessons` - количество занятий в этот день.
+ `lessons_time` - объект, содержащий другие объекты предсталяющие информацию о кадом предмете. Ключами являются время начала занятия в формате "ЧЧ:ММ".

Каждый объект занятия содержит следующие свойства:
+ `lesson_name` - название занятия. Обратите внимание, может содержать в качестве значения два имя занятия (если они меняются через неделю) разделённых символом "/", вы можете использовать функцию для разбивания строки на 2 части в вашем языке программирования.
+ `classroom_code` - свойство предоставляет значение classroom кода для конкретного предмета. Обратите внимание, может содержать ссылку или сивольный код, также может быть разделено символом "/" как в свойстве lesson_name.
+ `lesson_link` - ссылка на конференцию для проведения онлайн-урока, если ссылка на конференцию постоянная. Обратите внимание, если ссылка на конференцию меняется, то значением этого свойства будет null (нечего), в любом языке программирования вы можете делать проверку на null или на аналог null и выполнять соответствующие действия. Также может быть разделена символом "/", аналогично как у 2 предыдущих свойств.
+ `lesson_number` - порядковый номер занятия в этот день.
+ `start_time` - время начала занятия.
+ `end_time` - время конца занятия без учёта 10 минутного перерыва после окончания.

Вот наглядный пример того как выглядит структура этого JSON файла (русский вариант):
```json
{
	"weekday_numbers": {
		"1": {
			"str_day_of_week": ["Понедельник", "Пн"],
			"number_of_lessons": "3",
			"lessons_time": {
				"08:30": {
					"lesson_name": "История Украины",
					"classroom_code": "x4wh3k7",
					"lesson_link": "https://discord.gg/CWrxRjr6aT",
					"lesson_number": "1",
					"start_time": "08:30",
					"end_time": "09:50"
				},
				"10:00": {
					"lesson_name": "Основы теории цепей",
					"classroom_code": "xbwv4zc",
					"lesson_link": null,
					"lesson_number": "2",
					"start_time": "10:00",
					"end_time": "11:20"
				},
				"11:30": {
					"lesson_name": "Инженерная и компьютерная графика",
					"classroom_code": "idfnskr",
					"lesson_link": null,
					"lesson_number": "3",
					"start_time": "11:30",
					"end_time": "12:50"
				}
			}
		},
		"2": {
			"str_day_of_week": ["Вторник", "Вт"],
			"number_of_lessons": "4",
			"lessons_time": {
				"08:30": {
					"lesson_name": "Технологии",
					"classroom_code": "md3a47s",
					"lesson_link": "https://us04web.zoom.us/j/3197524662?pwd=mNgDz72VTb68NXISNR5hfGcOCp12Tl.1",
					"lesson_number": "1",
					"start_time": "08:30",
					"end_time": "09:50"
				},
				"10:00": {
					"lesson_name": "Защита Отечества",
					"classroom_code": "npgncuz",
					"lesson_link": "https://meet.google.com/qag-kqao-znf",
					"lesson_number": "2",
					"start_time": "10:00",
					"end_time": "11:20"
				},
				"11:30": {
					"lesson_name": "Физика и астрономия",
					"classroom_code": "ioi25s6",
					"lesson_link": null,
					"lesson_number": "3",
					"start_time": "11:30",
					"end_time": "12:50"
				},
				"13:00": {
					"lesson_name": "Физическая культура",
					"classroom_code": "https://classroom.google.com/c/MTUxNTcxNTg1Nzkx?cjc=qgcrsap",
					"lesson_link": null,
					"lesson_number": "4",
					"start_time": "13:00",
					"end_time": "14:20"
				}
			}
		},
		"3": {
			"str_day_of_week": ["Среда", "Ср"],
			"number_of_lessons": "4",
			"lessons_time": {
				"08:30": {
					"lesson_name": "Безопасность жизнедеятельности",
					"classroom_code": "p766acy",
					"lesson_link": "https://meet.google.com/met-uedi-wko",
					"lesson_number": "1",
					"start_time": "08:30",
					"end_time": "09:50"
				},
				"10:00": {
					"lesson_name": "Основы программирования и алгоитмические языки",
					"classroom_code": "yw4r6xa",
					"lesson_link": "https://meet.google.com/uxe-ebcb-dbs",
					"lesson_number": "2",
					"start_time": "10:00",
					"end_time": "11:20"
				},
				"11:30": {
					"lesson_name": "Математика/Защита Отечества",
					"classroom_code": "ikkjwrr/npgncuz",
					"lesson_link": "null/https://meet.google.com/qag-kqao-znf",
					"lesson_number": "3",
					"start_time": "11:30",
					"end_time": "12:50"
				},
				"13:00": {
					"lesson_name": "Украинский язык",
					"classroom_code": "zuwqrzq",
					"lesson_link": "https://meet.google.com/kgj-repw-nmh",
					"lesson_number": "4",
					"start_time": "13:00",
					"end_time": "14:20"
				}
			}
		},
		"4": {
			"str_day_of_week": ["Четверг", "Чт"],
			"number_of_lessons": "4",
			"lessons_time": {
				"08:30": {
					"lesson_name": "Иностранный язык",
					"classroom_code": "https://classroom.google.com/c/NTQ0OTY5NTkyNDgw?cjc=x4z7qq7",
					"lesson_link": "https://us04web.zoom.us/j/8683630851?pwd=d5TMWY",
					"lesson_number": "1",
					"start_time": "08:30",
					"end_time": "09:50"
				},
				"10:00": {
					"lesson_name": "Физическая культура",
					"classroom_code": "https://classroom.google.com/c/MTUxNTcxNTg1Nzkx?cjc=qgcrsap",
					"lesson_link": null,
					"lesson_number": "2",
					"start_time": "10:00",
					"end_time": "11:20"
				},
				"11:30": {
					"lesson_name": "Математика",
					"classroom_code": "ikkjwrr",
					"lesson_link": null,
					"lesson_number": "3",
					"start_time": "11:30",
					"end_time": "12:50"
				},
				"13:00": {
					"lesson_name": "Стандартизация",
					"classroom_code": "6ogqnj7",
					"lesson_link": null,
					"lesson_number": "4",
					"start_time": "13:00",
					"end_time": "14:20"
				}
			}
		},
		"5": {
			"str_day_of_week": ["Пятница", "Пт"],
			"number_of_lessons": "3",
			"lessons_time": {
				"08:30": {
					"lesson_name": "Высшая математика",
					"classroom_code": "https://classroom.google.com/c/NTgyNzMwODg5MjAy?cjc=r4qjdss",
					"lesson_link": null,
					"lesson_number": "1",
					"start_time": "08:30",
					"end_time": "09:50"
				},
				"10:00": {
					"lesson_name": "Украинская литература",
					"classroom_code": "pgeaznn",
					"lesson_link": "https://meet.google.com/kgj-repw-nmh",
					"lesson_number": "2",
					"start_time": "10:00",
					"end_time": "11:20"
				},
				"11:30": {
					"lesson_name": "Биология и экология",
					"classroom_code": "oeu36uo",
					"lesson_link": "https://us05web.zoom.us/j/8411452864?pwd=ZVRXUlFrQ3B6YVVKZUt3eVozMTU3UT09",
					"lesson_number": "3",
					"start_time": "11:30",
					"end_time": "12:50"
				}
			}
		}
	}
}
```
Дальше пойдут простые примеры обращения к данным API на 3 языках программирования (Python, JavaScript и C#).
### 3.1. Python:
```python
import requests  # Подключаем библиотеку requests для работы с запросами.

# Получаем объект response делая get запрос на адрес с нашим json файлом.
response = requests.get('https://etbondeveloper.github.io/rt-distance-website/api/ru/schedule.json')

# Конвертируем объект response к типу данных dict в python для представления данных в виде словаря.
schedule = response.json()

# Обращаемся к словарю schedule, потом к объекту 'weekday_numbers', потом к объекту дня недели '1' и наконец получаем объект по ключу 'lessons_time' и присваиваем в переменную monday_lessons.
monday_lessons = schedule['weekday_numbers']['1']['lessons_time']

# В цикле обращаемся к обращаемся к кадому ключу, представляющий время начала занятия и к объекту по этому ключу.
for start_time, lesson_info in monday_lessons.items():
    print(f"{start_time}: {lesson_info['lesson_name']}")  # Выводим полученные данные (время начала занятия и к свойству 'lesson_name' объекта lesson_info которое представляет имя занятия).
```
### 3.2. JavaScript:
```javascript
// Получаем объект response делая get запрос на адрес с нашим json файлом.
fetch('https://etbondeveloper.github.io/rt-distance-website/api/ru/schedule.json')
    .then(response => response.json()) // Конвертируем объект response к объекту в javascript.
    .then(schedule => {
        // Обращаемся к объекту schedule, потом к объекту 'weekday_numbers', потом к объекту дня недели '1' и наконец получаем объект по ключу 'lessons_time' и присваиваем в переменную mondayLessons.
        const mondayLessons = schedule['weekday_numbers']['1']['lessons_time'];

        // В цикле обращаемся к обращаемся к кадому ключу, представляющий время начала занятия и к объекту по этому ключу.
        for (const startTime in mondayLessons) {
            const lessonInfo = mondayLessons[startTime];

            // Выводим полученные данные (время начала занятия и к свойству 'lesson_name' объекта lessonInfo которое представляет имя занятия).
            console.log(`${startTime}: ${lessonInfo['lesson_name']}`);
        }
    })
    .catch(error => console.error(error)); // Ловим ошибки если не получится обратится по ключам
```
### 3.3. C#:
```csharp
using System;
using System.Net.Http;
using System.Text.Json;

class Program
{
    static async Task Main()
    {
        // Создаём экземпляр HttpClient для отправки запросов.
        using var client = new HttpClient();

        var response = await client.GetStringAsync("https://etbondeveloper.github.io/rt-distance-website/api/ru/schedule.json");

        // Десериализуем полученную строку JSON в объект типа JsonDocument.
        var document = JsonDocument.Parse(response);

        // Получаем объект JsonElement, представляющий словарь по ключу 'weekday_numbers' и '1'.
        var mondayLessons = document.RootElement.GetProperty("weekday_numbers").GetProperty("1").GetProperty("lessons_time");

        // Итерируемся по всем элементам объекта mondayLessons и выводим информацию о занятиях в понедельник.
        foreach (JsonProperty lessonTime in mondayLessons.EnumerateObject())
        {
            var startTime = lessonTime.Name;
            var lessonInfo = lessonTime.Value;

            // Выводим на консоль информацию о времени начала занятия и свойства "lesson_name"
            Console.WriteLine($"{startTime}: {lessonInfo.GetProperty("lesson_name")}");
        }
    }
}
```
Если вас заинтересовала тема API взаимодействий вы можете найти больше информации на счёт этого в интернете, а также попробовать поработать с данными в других языках программирования, на этом информация по API закончилась, приятного написания кода и удачи во всех свершениях.