// Запросы, XMLHttpRequest, AJAX. Домашняя работа

/* Задание №1.1. 
Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
Используйте fetch или ajax. Отобразите на странице имена персонажей из 
Рика и Морти в list. 
let block1 = $('.block1');
let list = $('.list');
(Вы можете стилизовать страницу по желанию.)
*/

let block1 = document.querySelector('.block1');
let list = document.querySelector('.list');
let list2 = document.querySelector('.list2');
let div = document.createElement('div')
let div2 = document.createElement('div')
let API2 = "http://localhost:8006/characters"

// /* Задание №1.2. 
// Рядом с именами отобразите все изображения
// которые вы получили вместе с остальными данными из сервера.
// */

// async function copy(obj){
//    await fetch(API2,{
//        method: "POST",
//        body: JSON.stringify(obj),
//        headers: {
//            "Content-type" : "application/json; charset=utf-8"
//        }
//     })
//    }
async function getPokemon() {
  let API = 'https://rickandmortyapi.com/api/character';
  let pokemons = await fetch(API)
    .then((e) => e.json())
    .then((element) => element.results)
    .catch((error) => console.log(error));
    pokemons.forEach((info)=>{
    //   console.log(info)
    //   copy(info)
      list.innerHTML += `
      <li><h3>${info.name}</h3> <img src=${info.image} alt=""> </li>
      `
      
      
    })
    // list.append(div)
}
getPokemonCopy();
getPokemon();



async function getPokemonCopy() {
  let pokemons = await fetch(API2)
    .then((e) => e.json())
    .then((element) => element)
    .catch((error) => console.log(error));
    pokemons.forEach((info)=>{
      console.log(info)
      list2.innerHTML += `
      <li><h3>${info.name}</h3> <img src=${info.image} alt=""> </li>
      `
      
      
    })
    // list2.append(div)
}

// /* Задание №1.3. 
// Создайте файл db.json и запустите локальный сервер.
// Данные которые вы получили во втором задании, сохраните 
// в локальном сервере db.json, в массиве под 
// названием "characters".
// Подсказка: как только ваши данные сохранились в db.json
// функцию, которая отправляет запрос на db.json стоит закомментировать.
// */

/* Задание №1.4. 
А теперь сделайте запрос на локальный сервер.
Во второй блок с классом 'block-2', отобразите имена, которые 
вы получили (стянули) с db.json.


/* Задание №1.5. 
К именам добавьте картинки персонажей.
В итоге у вас должна получиться точная копия первых двух тасков.
Отличие которых лишь в базе данных.
*/