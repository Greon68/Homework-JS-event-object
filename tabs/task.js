
 // Ищем все элементы меню tab . Получаем NodeList с тремя элементами
 let tabs = document.querySelectorAll(".tab");
//  console.log(tabs); // NodeList(3) [div.tab.tab_active, div.tab, div.tab]

 // Переводим NodeList в массив заголовков:
 tabsArray = Array.from(tabs)
//  console.log(tabsArray)

 // Ищем все элементы контента tab__content, создаём псевдомассив 
 let tabContents = document.querySelectorAll('.tab__content');
 // console.log(tabContents) // NodeList(3) [div.tab__content.tab__content_active, div.tab__content, div.tab__content]

 // Работаем с массивом кнопок навигации
 for( let tab of tabs) {

    // Реакция на клик выбранной кнопки
     tab.addEventListener('click',()=> {
        //  console.log(`НАЖАТА:${tab.textContent} с индексом ${tabsArray.indexOf(tab)} `);

         // Ищем активную кнопку
         let activTab = document.querySelector('.tab_active');
        //   console.log(`Была активна ранее : ${activTab.textContent} с индексом ${tabsArray.indexOf(activTab)}`);

          // Определим  индекс  активной кнопки из массива заголовков:
          activTabIndex = tabsArray.indexOf(activTab);

         //  Находим элемент контента с равнозначным индексом:
         activTabContent = tabContents[activTabIndex];
        //  console.log(`Контент ранее активной кнопки: ${activTabContent}`)
         
     
         // Сняли активность с предыдущей активной кнопки  
         activTab.classList.toggle('tab_active')
         // Убрали контент у ранее активной кнопки :
         activTabContent.classList.toggle('tab__content_active');

         //  Активировали нажатую кнопку
          tab.classList.toggle('tab_active');
         //  Нашли индекс для активированной кнопки:
         tabContentIndex = tabsArray.indexOf(tab);
         // Нашли контент для активированной кнопки:
         tabContent = tabContents[tabContentIndex];
         //  Активировали контент нажатой кнопки:
         tabContent.classList.toggle('tab__content_active');

     })
 }