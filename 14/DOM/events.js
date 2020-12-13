window.addEventListener('DOMContentLoaded', function() {
    console.log(document.querySelector('.block'))//объект window - вьюпорт (окно браузера), DOMContentLoaded - обработчик событий исполняющий скрипт после загрузки DOM - дерева
//если мы вместо класса .block будем выводить элемент который имеет одноклассников или ряд элементов с одинаковыми селекторами
//то обработчик событий все равно выведет один элемент в консоль (4)

    console.log(document.querySelectorAll('.text'))//выведет все элементы с данным селектором (5)

    document.querySelector('.text').style.color = 'blue' // меняем цвет текста (6)

    document.querySelector('.text').style.backgroundColor = 'yellow' // Те стили, которые в CSS пишутся через "-" в JS второе слово
    //пишется через заглавную букву! (7)

    document.querySelector('#text').classList.add('alert') //добавляет класс 'alert' к элементу '#text' (8)

    document.querySelector('#text').classList.remove('alert') //удаляет класс 'alert' у элемента '#text' (9)

    document.querySelector('#text').classList.toggle('alert') //делаяет оба действия, в зависимости от исходного положения элемента
    //если у элемента есть класс то функция toggle удаляет его, если его нет тогда добавляет (10)

    document.querySelectorAll('.text').forEach(function (domElemnt){
        domElemnt.style.fontSize = '24px' //для массива, который нам нашла функция querySelector() по классу '.text', мы прописываем
        //функцию forEach в которой в атрибуте 'domElement' (название мы придумываем сами) меняем поочередно каждому элементу стили
        //В данном примере мы изменили размер текста. Так же с помощью функции classList можно добавить или удалить класс и т.д. (11)
    })

    document.getElementsByTagName('p') // функция с помощью которой мы можем получить элемент по тегу в DOM - дереве. 
    // отличие от querySelectorAll в том, что второй создает Node - списко (своего рода массив), так как первый
    // получает список элементов по тегу, но массивом это не является! Среди разработчиков принято использовать вторую функцию (12)

    document.querySelector('#burger').addEventListener('click', function(){
        document.querySelector('#menu').classList.toggle('is-active') 
    }) // событие на клик по бургеру, добавляет или убирает класс "is-active"

    document.querySelectorAll('.text').forEach(function(el){ //в объекте документ ищем все элемента с классом  '.text', создаем функцию
    // в которой каждому елементу присваиваем переменную el (просто так назвали)
        el.addEventListener('click', function(event){ //В этой переменной el мы создаем функцию, которая передает в el событие event
            // (тоже просто так назвали)
            console.log(event) // выводи событие в консоль
            event.target.classList.toggle('alert') // в событие целенаправленно (функция target) добавляем или удаляем (classList.toggle)
            // класс 'alert'
        })
    })
})


console.log('Hello world! from index.js') //(1)
document.querySelector('.block') //Объект document, querySelector() - функция которая помогает нам найти html элемент dom-дерева (2)

console.log(document.querySelector('.block'))//в консоль мы можем вывести не только текст, но так же и любые объекты (3)

