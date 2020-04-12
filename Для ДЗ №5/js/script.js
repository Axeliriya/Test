'use strict'

let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    title = document.getElementById('title'),
    promptForApple = document.querySelector('#prompt'),
    menuItemLi = document.createElement('li'),
    adv = document.getElementsByClassName('adv')[0];

menu.insertBefore(menuItem[2], menuItem[1]);

menuItemLi.classList.add('menu-item');
menuItemLi.textContent = 'Пятый пункт';
menu.appendChild(menuItemLi);

document.body.style.backgroundImage = "url('../Для ДЗ №5/img/apple_true.jpg')";

title.textContent = 'Мы продаем только подлинную технику Apple!';

adv.remove();

let text = prompt('Как вы относитесь к технике Apple?', '');

promptForApple.textContent = text;

