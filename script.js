'use strict';

let money = 50000,
income = 'фриланс',
addExpenses = 'интернет, такси, коммуналка',
deposit = true,
mission = 300000,
period = 6,
budgetDay = 35000/30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' долларов');
console.log(addExpenses.toLowerCase().split(', '));
console.log(budgetDay);
