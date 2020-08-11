'use strict';

let week = 'ru';

if (week === 'ru') {
  console.log('пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс');
} else if (week === 'en') {
  console.log('mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn');
} else {
  console.log('что то пошло не так');
}

let n = 'en';
switch (n) {
  case 'ru':
    console.log('пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс');
    break;
  case 'en':
  console.log('mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn');
    break;
    default:
      console.log('что то пошло не так');
}

let lang = 'en';
let obj = {
  ru: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
  en: ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
}
let arr = obj[lang];
console.log(arr);

let namePerson = 'Артем',
  result = namePerson === 'Артем' ? console.log('директор') : namePerson === 'Максим' ? console.log('преподаватель') : console.log('студент');