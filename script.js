'use strict';

let isNumber = function (n) {
  // !isNaN если даннаые будут числом, то мы получим true
  // другими словами !isNaN = НЕ(!) НЕ ЧИСЛО(isNaN) = ЧИСЛО
  // parseFloat(n) принимает строку в качестве аргумента и возвращает десятичное число 
  // isFinite(n); если данные НЕ будут бесконечным(infinity) числом, то получим true
  return !isNaN(parseFloat(n)) && isFinite(n);
};

//переменные
let money,
  income = 'freelance',
  addExpenses,
  deposit,
  mission = 100000,
  period = 10,
  amount1,
  amount2,
  accumulatedMonth,
  budgetDay,
  missionDone,
  expenses = [],
  expensesAmount;


//задаем вопросы + возвращаем сумму расходов с проверкой на число
function getExpensesMonth() {
  let sum = 0;

  //цыкл с помощью которого мы задаем вопросы
  for (let i = 0; i < 2; i++) {
      //i раз передаем в переменную expenses данные от пользователя
      expenses[i] = prompt('Введите обязательную статью расходов?', 'Курсы .js')
      //+= складывает все полученные данные из prompt()
      //а + перед prompt() возвращает number вместо string
      sum += +prompt('Во сколько это обойдется?', '4000');
      (!isNumber(sum));
  }
  return sum;
};

//берем месячный доход и вычитаем результат функции getExpensesMonth() (сумма обязательных расходов)
function getAccumulatedMonth() {
  return money - expensesAmount;
};

//проверка за сколько месяцев будет достигнута миссия
let getTargetMonth = function () {
  let target = mission / accumulatedMonth;
  if (target < 0) {
    return 'Цель не будет достигнута';
  } else if (target >= 0) {
    return 'Цель будет достигнута';
  }

};

//функция вывода в консоль
let showTypeOf = function (data) {
  console.log(data, typeof (data));
};

//расчет уровня дохода
let getStatusIncome = function () {
  if (budgetDay >= 1200) {
    return 'У вас высокий уровень дохода';
  } else if (budgetDay >= 600) {
    return 'У вас средний уровень дохода';
  } else if (budgetDay <= 0) {
    return 'Что то пошло не так';
  } else {
    return 'К сожалению у вас уровень дохода ниже среднего';
  }
};

//проверка входящих данных
let start = function () {
  //Цикл сначала выполнит тело(do), а затем проверит условие (while)
  //и пока его значение равно true, он будет выполняться снова и снова.
  do {
    money = prompt('Ваш месячный доход?', '50000');
    deposit = confirm('Есть ли у вас депозит в банке?');
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
  }
  //условия цикла
  while (!isNumber(money));
};
start();

//переменная для вызова функции (возвращения суммы расходов) 
expensesAmount = getExpensesMonth();
//переменная для вызова функции (месячный доход - обязательные расходы)
accumulatedMonth = getAccumulatedMonth();
//бюджет на день = округляем вниз, (месячный доход - обязательные расходы) / 30 дней месяца 
budgetDay = Math.floor(accumulatedMonth / 30);
//выполненная миссия = округ. вверх, миссия / (месячный доход - обязательные расходы)
missionDone = Math.ceil(mission / accumulatedMonth);

//КОНСОЛЬ
//выводим дополнительные расходы в объект, разделяя на эллементы объекта
showTypeOf(addExpenses.toLowerCase().split(', '));
//выводим кол-во месяцев за которое достигнем цели
showTypeOf(missionDone);
//выводим допустимый бюджет на день
showTypeOf(budgetDay);
//сумма расходов за месяц
console.log('Расходы за месяц: ' + expensesAmount);
//вызываем в консоль результат функции расчета уровня дохода(низкий, средний, ниже среднего)
console.log(getStatusIncome());
//этот лог информирует нас о том, будет ли достиггнута цель, или нет
console.log(getTargetMonth());