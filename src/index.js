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
// Спросите у пользователя телефонный номер и выведете его в нормализованном виде. На вход может прийти номер в формате:

// - +79235050505
// - 89235050505
// - 8 923 5050505
// - 7(923) 5050-505

// И с любым сочетанием пробелов, скобок и тире.

// Программа должна вывести номер в формате: `+79235050505`

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
// Пользователь вводит строку. Нужно сформировать и вывести массив из всех чисел в этой строке.

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
// Задача 12.2 решение циклом
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
// Подсчитайте количество строчных и прописных букв в строке. Считается, что в строке могут быть только английские буквы и пробелы.
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

        result_3.textContent = `Прописных: ${getUpperCase(text)}, строчных: ${getLowCase(text)}`;
        input_3.value = "";

    }
}

);
// ***********Решение без регулярных выражений
// const task_3 = document.querySelector(".task_3"); // поиск по class
// const input_3 = task_3.querySelector("#input"); // поиск по id
// const btn_3 = task_3.querySelector(".btn");
// const result_3 = task_3.querySelector('.result');


// btn_3.addEventListener("click", () => {

//     const text = input_3.value;

//     if (text) {


//         let arrText = text.split("");
//         let result = arrText.filter((elem) => elem !== " ");
//         let arrTextToLowerCase = result.map((elem) => elem.toLowerCase());



//         console.log(result);

//         let counterUpper = 0;
//         let counterLower = 0;
//         for (let i = 0; i < result.length; i++) {
//             if (result[i] === arrTextToLowerCase[i]) {
//                 counterLower += 1;
//             } else {
//                 counterUpper += 1;
//             }
//         }
//         //["O", "n", "e", "T", "w", "o"]
//         //["o", "n", "e", "t", "w", "o"]

//         //"O" == "o"

//         result_3.textContent = `Прописных:${counterUpper}, строчных: ${counterLower}`;
//         input_3.value = "";
//     }
// });


// const task_3 = document.querySelector(".task_3"); // поиск по class
// const input_3 = task_3.querySelector("#input"); // поиск по id
// const btn_3 = task_3.querySelector(".btn");
// const result_3 = task_3.querySelector('.result');


// btn_3.addEventListener("click", () => {

//     const text = input_3.value;

//     if (text) {
//         let counterUpper = 0;
//         let counterLower = 0;

//         let arrText = text.split("").filter((elem) => elem !== " ");

//         arrText.forEach((elem) => {
//             if (elem == elem.toLowerCase()) {
//                 counterLower++;
//             } else {
//                 counterUpper++;
//             }
//         });

//         result_3.textContent = `Прописных:${counterUpper}, строчных: ${counterLower}`;
//         input_3.value = "";
//     }
// });


//Задача 12.4
// Выведете самое длинное слово в предложении и его длину (слова разбиты пробелами).
const task_4 = document.querySelector(".task_4"); // поиск по class
const input_4 = task_4.querySelector("#input"); // поиск по id
const btn_4 = task_4.querySelector(".btn");
const result_4 = task_4.querySelector('.result');


btn_4.addEventListener("click", () => {

    const text = input_4.value;

    if (text) {

        //"Один два три"
        let arrWords = text.split(" ");
        //["Один", "два", "три"]

        let arrLength = arrWords.map((elem) => elem.length);
        //[4, 3, 3]
        let maxLength = Math.max(...arrLength);

        let indexMax = arrLength.indexOf(maxLength);

        let word = arrWords[indexMax];

        result_4.textContent = `Слово: "${word}", длина: ${maxLength}`;

        input_4.value = "";
    }
});


// const task_4 = document.querySelector(".task_4"); // поиск по class
// const input_4 = task_4.querySelector("#input"); // поиск по id
// const btn_4 = task_4.querySelector(".btn");
// const result_4 = task_4.querySelector('.result');

// btn_4.addEventListener("click", () => {

//     const text = input_4.value;

//     if (text) {
//         //"Один два три"
//         let textSplit = text.split(" ");
//         //["Один", "два", "три"]
//         let maxWord = textSplit[0]; предположим что самое длинное слово -самое первое
//         let maxLength = textSplit[0].length;

//         textSplit.forEach((elem) => {
//             if (elem.length > maxLength) {
//                 maxWord = elem;
//                 maxLength = elem.length;
//             }
//         });

//         result_4.textContent = `Слово: "${maxWord}", длина: ${maxLength}`;
//         input_4.value = "";
//     }
// });


//Задача 12.5
// Пользователь вводит слово. Если оно является перевёртышем выведете true иначе false. Слово-перевёртыш - это слово, которое одинаково читается с начала и с конца. Слова могут быть как на английском, так и на русском.
const task_5 = document.querySelector(".task_5"); // поиск по class
const input_5 = task_5.querySelector("#input"); // поиск по id
const btn_5 = task_5.querySelector(".btn");
const result_5 = task_5.querySelector('.result');


btn_5.addEventListener("click", () => {

    const word = input_5.value;

    if (word) {


        let arrChar = word.split("");

        let arr = [];

        for (let i = arrChar.length - 1; i >= 0; i--) {

            let elem = arrChar[i];
            arr.push(elem)
        }

//  цикл ниже не нужнен, т.к. можно просто сранвить строки, не сравнивая массивы.
        let changeling = "";

        for (let a = 0; a < arr.length; a++) {
            if (arr[a] === arrChar[a]) {

                changeling = true;
            } else {
                changeling = false;
                break;
            }

        } result_5.textContent = changeling;
        input_5.value = "";
    }
    //************** */
    //  2 решение

    // let a = string.split("");

    //   let b = a.toReversed(); 

    //   let newString = b.join("");

    // 	console.log(string === newString);
    // сократили
    // let newString = string.split("").toReversed().join("");

    // console.log(string === newString);

}
);

//Задача 12.6
// Удалите лишние пробелы из строки. Пробелы лишние если они в начале или в конце строки, а также если между словами больше одного пробела. Считается, что строка состоит только из букв и пробелов.
const task_6 = document.querySelector(".task_6"); // поиск по class
const input_6 = task_6.querySelector("#input"); // поиск по id
const btn_6 = task_6.querySelector(".btn");
const result_6 = task_6.querySelector('.result');


btn_6.addEventListener("click", () => {

    const text = input_6.value;

    if (text) {

        let arr = text.split(" ");
        let arrWithoutEmpty = arr.filter((elem) => elem != "")
        let arrToString = arrWithoutEmpty.join(" ");

        result_6.textContent = `"${arrToString}"`;
        input_6.value = "";
    }
    //     const s = text.trim();  метод trim для удаления слева- справа

    //     let arrWithoutEmpty = arr.split(" ").filter((elem) => elem != "").join(" ");
}
);


//Задача 12.7.
// Дана строка, сделайте первую букву каждого слова прописной (большой).

const task_7 = document.querySelector(".task_7"); // поиск по class
const input_7 = task_7.querySelector("#input"); // поиск по id
const btn_7 = task_7.querySelector(".btn");
const result_7 = task_7.querySelector('.result');


btn_7.addEventListener("click", () => {

    const text = input_7.value;

    if (text) {

        let arr = text.split(" ");
        let arrUpFirstLetter = arr.map((elem) => elem[0].toUpperCase() + elem.slice(1));

        result_7.textContent = arrUpFirstLetter;
        input_7.value = "";
    }

}
);

//Задача 12.8.
// На вход подаётся строка вида "12+23=35". 
// Выведете на экран true если выражение верно или false если выражение не верно.

const task_8 = document.querySelector(".task_8"); 
const input_8 = task_8.querySelector("#input"); 
const btn_8 = task_8.querySelector(".btn");
const result_8 = task_8.querySelector('.result');


btn_8.addEventListener("click", () => {

    const text = input_8.value;

    if (text) {

        let total;
        let res;
        
        let textDevide = text.split("=");
        const task = textDevide[0];        
        let taskElem = task.split("");        
        let taskElemNum = taskElem.map((elem) => parseInt(elem));        
        let taskElemNumUnite = taskElemNum.join("");          
        let indexOperation  = taskElemNumUnite.indexOf("NaN");        
        let result = parseInt(textDevide[1]);        
        let onePart  = text.slice(0, indexOperation);        
        let oneNum = parseInt(onePart);        
        let twoPart  = text.slice(indexOperation + 1,text.lenth);        
        let twoNum = parseInt(twoPart);
                          
        if( text.includes("+")){
          res = oneNum + twoNum;    
          }else  if( text.includes("-")){
           res = oneNum - twoNum;
          }else  if( text.includes("*")){
           res = oneNum * twoNum;
          }else {
           res = oneNum / twoNum;
          }
            
        if (res === result) {
            total = true;
        } else {
            total = false};
          
        result_8.textContent = `${text}  - ${total}`;
        input_8.value = "";
     }
        
}
);
        

// // ------------------ 2- е решение
//         let total;
//         let res;
//         let arrOperations = ["+", "-", "*", "/"];
        
//         let textDevide = text.split("=");
//         let task = textDevide[0];
//         let taskElem = task.split("");
//         let operation = taskElem.filter( (elem) => arrOperations.indexOf(elem)>-1).toString();
//         // ищем одинаковые элементы в разныx массивах
//         let indexOperation = text.indexOf(operation);
//         let result = parseInt(textDevide[1]);
//         let onePart  = taskElem.slice(0, indexOperation).join("");
//         let oneNum = parseInt(onePart);
//         let twoPart  = taskElem.slice(indexOperation+1,taskElem.length).join("");
//         let twoNum = parseInt(twoPart);
        
//         if( operation == "+"){
//           res = oneNum + twoNum;    
//           }else  if( operation =="-"){
//            res = oneNum - twoNum;
//           }else  if( operation =="*"){
//            res = oneNum * twoNum;
//           } else {
//            res = oneNum / twoNum;
//           }
                   
//         if (res === result) {
//             total = true;
//         } else {
//             total = false};
//             result_8.textContent = `${text}  - ${total}`;
//             input_8.value = "";
//       }
                    
// }
// );
        
           

       




// ************************
// черновик
// const text = "12+23=35";
  
// //1
// const arr = text.split("="); --> ["12+23", "35"]
// const result = parseInt(arr[1]);

// //2
// const arrOperations = ["+", "-", "*", "/"];

// arr[0].split("") --> ["1","2","+","2","3",]

// const operation = arrOperations[0];

// //3
// const numOne = 12;
// const numTwo = 23;

// //4
// let res;
// switch (operation) {
//   case "+":
//     res = numOne + numTwo;
//     break;
//   case "-":
//     res = numOne - numTwo;
//     break;
//   case "*":
//     res = numOne * numTwo;
//     break;
//   case "/":
//     res = numOne / numTwo;
//     break;
//   }

// //5
// if (res !== undefined) {
//   res === result
// } else {
    
// }


