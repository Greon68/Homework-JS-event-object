 
// Раскрываем всплывающее меню:

// Находим элемент - заголовок выпадающего списка
let dropdownValue = document.querySelector('.dropdown__value');
// console.log(dropdownValue) ;

// находим элемент - список курсов ( тег ul )
let dropdownList = document.querySelector('.dropdown__list');

// При клике на заголовок , делаем список курсов видимым ,
// записывая  для списка ul доп. класс 'dropdown__list_active' ,
//  который делает список курсов видимым ( свойство display: block;)
dropdownValue.onclick = function() {
        dropdownList.classList.toggle('dropdown__list_active')
};






// Ищем все элементы li списка ul ( класс dropdown__list ),
// формируем массив NodeList из найденных элементов 

let dropdownListItem = document.querySelectorAll(".dropdown__item");
console.log(dropdownListItem); 

//  Для элементов массива dropdownListItem:
for ( let elem of dropdownListItem) {
    //  При клике на одном из элементе:
    elem.onclick = (event)=>{
        // Избавляемся от работы ссылки по умолчанию:
        event.preventDefault();
        // Записываем в заголовок значение выбранного курса
        dropdownValue.textContent = elem.textContent;

        // Закрываем список ul , удаляя  дополнительный 
        // класс 'dropdown__list_active'. Теперь для ul снова 
        //  активен только класс dropdown__list" , у которго
        // display: none;

        // dropdownList.className='dropdown__list'; // 1-й способ 
        // dropdownList.classList.remove('dropdown__list_active');// 2-й способ 
        dropdownList.classList.toggle('dropdown__list_active')  // 3-й способ 

    }
}



