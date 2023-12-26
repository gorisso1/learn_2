export interface Category {
    id: number;
    name: string;

}

export  interface Word {
    category_id:number;
    id:number;
    text:string
    translation:string;
}

export const CategoryData: Category[] = [
    {
        id: 1,
        name: "Приветствия на чеченском",
    },
    {
        id: 2,
        name: "Еда",
    },
    {
        id: 3,
        name: "В дороге",
    },
    {
        id: 4,
        name: "На почте",
    },
    {
        id: 5,
        name: "В магазине",
    },
    {
        id: 6,
        name: "Цвета",
    },
    {
        id: 7,
        name: "О времени",
    },
    {
        id: 8,
        name: "Дни недели на чеченском",
    },
    {
        id: 9,
        name: "Семья",
    },
    {
        id: 10,
        name: "Профессии",
    },
    
    {
        id: 14,
        name: "Качества",
    },
];

export const Words: Word[]=[
    {
        category_id: 1,
        id: 1,
        text: "Дружба",
        translation: "ДоттагІалла",
    },
    {
        category_id: 1,
        id: 2,
        text: "Добро пожаловать",
        translation: "Марша догІийла",
    },
    {
        category_id: 1,
        id: 3,
        text: "Здравствуйте",
        translation: "Маршалла хуьлда",
    },
    {
        category_id: 1,
        id: 4,
        text: "Доброе утро",
        translation: "Іуьйре дика хуьлда",
    },
    {
        category_id: 1,
        id: 5,
        text: "Скажите, пожалуйста",
        translation: "Алахьа (мн.ч. - алийша)",
    },
    {
        category_id: 1,
        id: 6,
        text: "Спасибо",
        translation: "Баркалла",
    },
    {
        category_id: 1,
        id: 7,
        text: "Подождите",
        translation: "Собар де",
    },
    {
        category_id: 1,
        id: 8,
        text: "Минутку",
        translation: "КІеззиг собар де (хІинцца)",
    },
    {
        category_id: 1,
        id: 9,
        text: "Знаете ли вы?",
        translation: "Хаьий те шуна?",
    },
    {
        category_id: 1,
        id: 10,
        text: "Извините",
        translation: "Бехк ма билла",
    },
    {
        category_id: 1,
        id: 11,
        text: "Да",
        translation: "ХІаъ",
    },




    {
        category_id: 3,
        id: 12,
        text: "В пути",
        translation: "Новкъахь",
    },
    {
        category_id: 3,
        id: 13,
        text: "Вокзал",
        translation: "Вокзал",
    },
    {
        category_id: 3,
        id: 14,
        text: "Поезд",
        translation: "ЦІерпошт",
    },
    {
        category_id: 3,
        id: 15,
        text: "Вагон",
        translation: "Вагон",
    },
    {
        category_id: 3,
        id: 16,
        text: "Свободно",
        translation: "ПаргІат, паргІат ву",
    },
    {
        category_id: 3,
        id: 17,
        text: "Занято",
        translation: "Мукъа вац (яц, бац, дац)",
    },
    {
        category_id: 3,
        id: 18,
        text: "Автобус",
        translation: "Автобус",
    },
    {
        category_id: 3,
        id: 19,
        text: "Водитель",
        translation: "Лелорхо, йигархо",
    },
    {
        category_id: 3,
        id: 20,
        text: "Легковая машина",
        translation: "ТІехуу машен",
    },
    {
        category_id: 3,
        id: 21,
        text: "Чемодан",
        translation: "Чамда",
    },
    {
        category_id: 3,
        id: 22,
        text: "Портфель",
        translation: "Портфель",
    },
    {
        category_id: 3,
        id: 23,
        text: "Сумка",
        translation: "ТІоьрмаг",
    },
    {
        category_id: 3,
        id: 24,
        text: "Пальто",
        translation: "Палто",
    },
    {
        category_id: 3,
        id: 25,
        text: "Шляпа",
        translation: "Куй",
    },
    {
        category_id: 3,
        id: 26,
        text: "Гостиница",
        translation: "ХьешацІа, гостиниц",
    },
    {
        category_id: 3,
        id: 27,
        text: "Этаж",
        translation: "Г1ат",
    },
    {
        category_id: 3,
        id: 28,
        text: "Комната",
        translation: "Чоь",
    },
    {
        category_id: 3,
        id: 29,
        text: "Ключ",
        translation: "ДогІа",
    },
    {
        category_id: 3,
        id: 30,
        text: "Ванная",
        translation: "Ваннин чоь",
    },
    {
        category_id: 3,
        id: 31,
        text: "Туалет",
        translation: "ХьаштагІа",
    },
    {
        category_id: 3,
        id: 32,
        text: "Телевизор",
        translation: "Телевизор",
    },
    {
        category_id: 3,
        id: 33,
        text: "Ресторан",
        translation: "Ресторан",
    },
    {
        category_id: 3,
        id: 34,
        text: "Официант",
        translation: "Официант",
    },
    {
        category_id: 3,
        id: 35,
        text: "Стол",
        translation: "Стол",
    },
    {
        category_id: 3,
        id: 36,
        text: "Стул",
        translation: "Г1ант",
    },
    {
        category_id: 3,
        id: 37,
        text: "Тарелка",
        translation: "Бошхап",
    },
    {
        category_id: 3,
        id: 38,
        text: "Нож",
        translation: "Урс",
    },
    {
        category_id: 3,
        id: 39,
        text: "Вилка",
        translation: "МІара",
    },
    {
        category_id: 3,
        id: 40,
        text: "Ложка",
        translation: "Іайг",
    },
    {
        category_id: 3,
        id: 41,
        text: "Чашка",
        translation: "Кад",
    },
    {
        category_id: 3,
        id: 42,
        text: "Стакан",
        translation: "Стака",
    },
    {
        category_id: 3,
        id: 43,
        text: "Пепельница",
        translation: "Чимтосург",
    },

    {
        category_id: 2,
        id: 44,
        text: "На здоровье",
        translation: "Могушаллина, хьанал хуьлда",
    },
    {
        category_id: 2,
        id: 45,
        text: "Хлеб",
        translation: "Кхаллар, бепиг",
    },
    {
        category_id: 2,
        id: 46,
        text: "Соль",
        translation: "Туьха",
    },
    {
        category_id: 2,
        id: 47,
        text: "Молоко",
        translation: "Шура",
    },
    {
        category_id: 2,
        id: 48,
        text: "Кефир",
        translation: "Йетта шура",
    },
    {
        category_id: 2,
        id: 49,
        text: "Вода",
        translation: "Хи",
    },



    {
        category_id: 4,
        id: 50,
        text: "Почта",
        translation: "Пошта",
    },
    {
        category_id: 4,
        id: 51,
        text: "Письмо",
        translation: "Кехат",
    },
    {
        category_id: 4,
        id: 52,
        text: "Конверт",
        translation: "Конверт",
    },
    {
        category_id: 4,
        id: 53,
        text: "Открытка",
        translation: "Открытка",
    },
    {
        category_id: 4,
        id: 54,
        text: "Почтовая марка",
        translation: "Почтови марка",
    },
    {
        category_id: 4,
        id: 55,
        text: "Телеграмма",
        translation: "ЗІе, телеграмм",
    },

    {
        category_id: 5,
        id: 56,
        text: "Магазин",
        translation: "Туька",
    },
    {
        category_id: 5,
        id: 57,
        text: "Универмаг",
        translation: "Универмаг",
    },
    {
        category_id: 5,
        id: 58,
        text: "Есть ли у вас?",
        translation: "Шугахь юй те?",
    },
    {
        category_id: 5,
        id: 59,
        text: "Сколько стоит?",
        translation: "ХІун мах бу? ХІун доьху?",
    },
    {
        category_id: 5,
        id: 60,
        text: "Можно ли примерить?",
        translation: "Юста мегий те?",
    },
    {
        category_id: 5,
        id: 61,
        text: "Велико",
        translation: "Йоккха ю",
    },
    {
        category_id: 5,
        id: 62,
        text: "Мало",
        translation: "Жима ю/КІезигду (ю)",
    },
    {
        category_id: 5,
        id: 63,
        text: "Дорого",
        translation: "Еза ю",
    },
    {
        category_id: 5,
        id: 64,
        text: "Дешево",
        translation: "Йорах ю",
    },
    {
        category_id: 5,
        id: 65,
        text: "Сувенир",
        translation: "Сувенир",
    },

    {
        category_id: 6,
        id: 66,
        text: "Цвета",
        translation: "Беснаш",
    },
    {
        category_id: 6,
        id: 67,
        text: "Белый",
        translation: "КІайн",
    },
    {
        category_id: 6,
        id: 68,
        text: "Серый",
        translation: "Сира",
    },
    {
        category_id: 6,
        id: 69,
        text: "Светлый",
        translation: "Сирла",
    },
    {
        category_id: 6,
        id: 70,
        text: "Темный",
        translation: "Бодане",
    },
    {
        category_id: 6,
        id: 71,
        text: "Красный",
        translation: "ЦІен",
    },
    {
        category_id: 6,
        id: 72,
        text: "Синий",
        translation: "Сийна",
    },
    {
        category_id: 6,
        id: 73,
        text: "Желтый",
        translation: "Можаниг",
    },
    {
        category_id: 6,
        id: 74,
        text: "Зеленый",
        translation: "Баьццарниг",
    },
    {
        category_id: 6,
        id: 75,
        text: "Коричневый",
        translation: "Боьмаша(ниг)",
    },

    {
        category_id: 7,
        id: 76,
        text: "Время",
        translation: "Хан",
    },
    {
        category_id: 7,
        id: 77,
        text: "Который час?",
        translation: "Маса сахьт даьлла?",
    },
    {
        category_id: 7,
        id: 78,
        text: "Сейчас",
        translation: "ХІинцца",
    },
    {
        category_id: 7,
        id: 79,
        text: "Раньше",
        translation: "Хьалха",
    },
    {
        category_id: 7,
        id: 80,
        text: "Когда",
        translation: "Маца",
    },
    {
        category_id: 7,
        id: 81,
        text: "Где?",
        translation: "Мичахь?",
    },
    {
        category_id: 7,
        id: 82,
        text: "День",
        translation: "Де",
    },
    {
        category_id: 7,
        id: 83,
        text: "Час",
        translation: "Сахьт",
    },
    {
        category_id: 7,
        id: 84,
        text: "Неделя",
        translation: "КІира",
    },
    {
        category_id: 7,
        id: 85,
        text: "Месяц",
        translation: "Бутт",
    },
    {
        category_id: 7,
        id: 86,
        text: "Год",
        translation: "Шо",
    },
    {
        category_id: 7,
        id: 87,
        text: "Сегодня",
        translation: "Тахана",
    },
    {
        category_id: 7,
        id: 88,
        text: "Вчера",
        translation: "Селхана",
    },
    {
        category_id: 7,
        id: 89,
        text: "Завтра",
        translation: "Кхана",
    },
    {
        category_id: 7,
        id: 90,
        text: "Утром",
        translation: "Іуьйранна",
    },
    {
        category_id: 7,
        id: 91,
        text: "Днем",
        translation: "Дийнахь",
    },
    {
        category_id: 7,
        id: 92,
        text: "Вечером",
        translation: "Сарахь",
    },
    {
        category_id: 7,
        id: 93,
        text: "Ночью",
        translation: "Буса/буьйсан",
    },

    {
        category_id: 8,
        id: 94,
        text: "Понедельник",
        translation: "Оршот",
    },
    {
        category_id: 8,
        id: 95,
        text: "Вторник",
        translation: "Шинара",
    },
    {
        category_id: 8,
        id: 96,
        text: "Среда",
        translation: "Кхаара",
    },
    {
        category_id: 8,
        id: 97,
        text: "Четверг",
        translation: "Еара",
    },
    {
        category_id: 8,
        id: 98,
        text: "Пятница",
        translation: "ПІераска",
    },
    {
        category_id: 8,
        id: 99,
        text: "Суббота",
        translation: "Шот",
    },
    {
        category_id: 8,
        id: 100,
        text: "Воскресенье",
        translation: "КІиранде",
    },

    {
        category_id: 9,
        id: 101,
        text: "Семья",
        translation: "Доьзал",
    },
    {
        category_id: 9,
        id: 102,
        text: "Есть ли у Вас семья?",
        translation: "Хьан доьзал буй?",
    },
    {
        category_id: 9,
        id: 103,
        text: "Отец",
        translation: "Да",
    },
    {
        category_id: 9,
        id: 104,
        text: "Мать",
        translation: "Нана",
    },
    {
        category_id: 9,
        id: 105,
        text: "Брат",
        translation: "Ваша",
    },
    {
        category_id: 9,
        id: 106,
        text: "Сестра",
        translation: "Йиша",
    },
    {
        category_id: 9,
        id: 107,
        text: "Муж",
        translation: "Мар, майра",
    },
    {
        category_id: 9,
        id: 108,
        text: "Жена",
        translation: "Зуда",
    },
    {
        category_id: 9,
        id: 109,
        text: "Сын",
        translation: "КІант, воІ",
    },
    {
        category_id: 9,
        id: 110,
        text: "Дочь",
        translation: "ЙоІ",
    },
    {
        category_id: 9,
        id: 111,
        text: "Дедушка",
        translation: "Деда, ненда",
    },
    {
        category_id: 9,
        id: 112,
        text: "Бабушка",
        translation: "Денана, ненанана",
    },
    {
        category_id: 9,
        id: 113,
        text: "Дядя",
        translation: "Ваша, деваша, ненаваша",
    },

    {
        category_id: 10,
        id: 114,
        text: "Профессия",
        translation: "Корматалла",
    },
    {
        category_id: 10,
        id: 115,
        text: "Рабочий",
        translation: "Белхало",
    },
    {
        category_id: 10,
        id: 116,
        text: "Служащий",
        translation: "Пуллакххо",
    },
    {
        category_id: 10,
        id: 117,
        text: "Врач",
        translation: "Лор",
    },
    {
        category_id: 10,
        id: 118,
        text: "Инженер",
        translation: "Инженер",
    },
    {
        category_id: 10,
        id: 119,
        text: "Техник",
        translation: "Техник",
    },
    {
        category_id: 10,
        id: 120,
        text: "Архитектор",
        translation: "Архитектор",
    },
    {
        category_id: 10,
        id: 121,
        text: "Преподаватель",
        translation: "Хьехархо",
    },
    {
        category_id: 10,
        id: 122,
        text: "Студент/учащийся",
        translation: "Дешархо",
    },
    {
        category_id: 10,
        id: 123,
        text: "Земледелец",
        translation: "Латталелорхо",
    },

    {
        category_id: 14,
        id: 150,
        text: "Хороший(ая).",
        translation: "Дика(ниг).",
    },
    {
        category_id: 14,
        id: 151,
        text: "Плохой(ая).",
        translation: "Вон, вониг.",
    },
    {
        category_id: 14,
        id: 152,
        text: "Красивый(ая).",
        translation: "Хаза(ниг).",
    },
    {
        category_id: 14,
        id: 153,
        text: "Некрасивый(ая).",
        translation: "Хаза йоцу(орг)/воцург, ирча.",
    },


]

