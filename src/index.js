import './index.scss';
// Пример
// находим "главный" элемент нашей страницы и сохраняем ссылку на него в константу
const task_example = document.querySelector(".task_example"); // поиск по class

// находим другие необходимые эелменты внутри "главного" элементы
// и ссылки на них сохраняем в константы
const input_example = task_example.querySelector("#input"); // поиск по id
const btn_example = task_example.querySelector(".btn");
const result_example = task_example.querySelector('.result');

// Теперь необходимо добавить обработку введённых данных в поле ввода по нажатию на кнопку,
//  т.е. по нажатию на кнопку `"Отправить"` нужно получать данные (строку) из поля ввода, выполнить над этими некоторые манипуляции с помощью JavaScript,
//  получить результат и вывести его пользователя на экран внутрь элемента `<p>`.

// Событие нажатия на кнопку обрабатывается методом `addEventListener`. Добавим в `index.js` следующий код:

// на элемент <button> по ссылке btn с помощью метода addEventListener
// добавляется обработчик события "click" (нажатие на кнопку) - первый аргумент метода
// второй аргумент - callback-функция, которая будет вызваться каждый раз при клике на кнопку
// в данном случае callback-функция - это анонимная стрелочная функция
btn_example.addEventListener("click", () => {
    // ниже код, который выполняется при каждом клике на кнопку "Отправить"


    // из элемента <input> по ссылке input через свойство value
    // получаем введённые данные из поля ввода 
    const text = input_example.value;

    // проверяем, ввёл ли какой-либо текст пользователь
    if (text) {
        // разделяем предложение на слова и записываем их в массив words
        const words = text.split(" ");
        // создаём вспомогательный массив, в который будет хранить в себе перевёрнутые слова
        const revWords = [];

        // циклом идём по кадому слову в массиве words
        for (let word of words) {
            // вспомогательная переменная, в которую запишем новое перевёрнутое слово
            let revWord = "";
            // циклом идём по символам с конца слова word
            for (let i = word.length - 1; i >= 0; --i) {
                // записываем каждый символ с конца слова word в начало строки revWord 
                revWord += word[i];
            }
            // добавляем новое первёрнутое слово revWord в массив revWords
            revWords.push(revWord);
        }
        // соединяем все слова массива revWords в одну строку, соединительным символом является пробел " "
        const revText = revWords.join(" ");
        // добавляем в элемент <p> по ссылке result c помощью свойства textContent текст revText
        result_example.textContent = revText;
        // очищаем поле ввода
        input_example.value = "";
    }
});

// Таким образом, теперь мы можем внутри callback-функции написать код, который будет решать задачу,
// т.е. переворачивать задом наперёд каждое слово введённого предложения и выведить на экран результат.


// Задача 12.1
// находим "главный" элемент нашей страницы и сохраняем ссылку на него в константу
const task_1 = document.querySelector(".task_1"); // поиск по class
const input_1 = task_1.querySelector("#input"); // поиск по id
const btn_1 = task_1.querySelector(".btn");
const result_1 = task_1.querySelector('.result');


btn_1.addEventListener("click", () => {
    const phone = input_1.value;

    if (phone) {
        const arrStrPhone = phone.split("");

        let arrNumPhone = arrStrPhone.map((char) => parseInt(char));

        // let arrNumFiltered = arrNumPhone.filter((elem) => Boolean(elem) || elem === 0);
        let arrNumPhoneFiltered = arrNumPhone.filter((elem) => !isNaN(elem));


        let strPhone = arrNumPhoneFiltered.join("");

        if (strPhone[0] == "8" || strPhone[0] == "7") {
            strPhone = strPhone.slice(1);
        }

        if (strPhone.length != 10) {
            result_1.textContent = "Введите верный номер";
            return;
        }

        let resultPhone = "+7" + strPhone;

        result_1.textContent = resultPhone;

        input_1.value = "";
    }
});

//Задача 12.2

const task_2 = document.querySelector(".task_2"); // поиск по class
const input_2 = task_2.querySelector("#input"); // поиск по id
const btn_2 = task_2.querySelector(".btn");
const result_2 = task_2.querySelector('.result');


btn_2.addEventListener("click", () => {
    const text = input_2.value;
    if (text) {
        // разделяем текст на элементы и записываем их в массив 
        const textSplit = text.split("");

        // преобразуем строку в число, получаем 
        let textMap = textSplit.map((char) => parseInt(char));
        console.log(textMap)

        // соединяем в строку элементы массива
        let textJoin = textMap.join("");
        // console.log(textJoin)

        // делим строку по разделтьелю Nan и получаем массив строк
        let textSplit2 = textJoin.split("NaN");
        // console.log(textSplit2)

        // фильтруем только числа
        let numbers = textSplit2.filter((char) => Boolean(char));
        // console.log(numbers)


        result_2.textContent = numbers;

        // очищаем поле ввода
        input_2.value = "";

    }
}

);
// Задача 12.2 циклом
// btn2.addEventListener("click", () => {
//     const text = input2.value;

//     if (text) {
//         const textSplit = text.split("");

//         let textMap = textSplit.map((char) => parseInt(char));
//         console.log(textMap);

//         let numbers = [];
//         let str = "";
//         for (let elem of textMap) {
//             if (!isNaN(elem)) {
//                 str += elem;
//             } else if (str != "") {
//                 numbers.push(parseInt(str));
//                 str = "";
//             }

//             if (elem == textMap.at(-1) && str != "") {
//                 numbers.push(parseInt(str));
//                 str = "";
//             }
//         }

// let textJoin = textMap.join("");

// let textSplit2 = textJoin.split(NaN);

// let numbers = textSplit2.filter((elem) => Boolean(elem));

// result2.textContent = numbers;

// input2.value = "";
//     }
// });


//Задача 12.3
const task_3 = document.querySelector(".task_3"); // поиск по class
const input_3 = task_3.querySelector("#input"); // поиск по id
const btn_3 = task_3.querySelector(".btn");
const result_3 = task_3.querySelector('.result');


btn_3.addEventListener("click", () => {

    const text = input_3.value;

    if (text) {

        function getUpperCase(text) {
            let a = text.match(/[A-Z]/g);
            if (a === null) {
                return 0;
            }
            return a.length;
        }


        function getLowCase(text) {
            let c = text.match(/[a-z]/g)
            if (c === null) {
                return 0;
            }
            return c.length;
        }

        result_3.textContent = `Прописных:${getUpperCase(text)}, строчных: ${getLowCase(text)}`;
        input_3.value = "";

    }
}

);



//Задача 12.4
const task_4 = document.querySelector(".task_4"); // поиск по class
const input_4 = task_4.querySelector("#input"); // поиск по id
const btn_4 = task_4.querySelector(".btn");
const result_4 = task_4.querySelector('.result');


btn_4.addEventListener("click", () => {

    const text = input_4.value;

    if (text) {


        result_4.textContent = `ответ ${a}`;
        input_4.value = "";

    }
}

);