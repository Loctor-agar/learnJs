'use strict'

let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n)
};

let money,
    income = 'Фриланс',
    addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую"),
    deposit = confirm("Есть ли у вас депозит в банке?"),
    mission = 100000,
    period = 4;

let start = function(){
  do{
    money = prompt("Ваш месячный доход?");
  } while (!isNumber(money));
};

start();

let expenses = [];

let showTypeOf = function(data){
  console.log(data, typeof(data));
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log( addExpenses.toLowerCase() , addExpenses.split(', '));
console.log('Период равен ' + period + 'месяцев');
console.log(`Цель заработать ${mission} рублей`)


let getExpensesMonth = function(){
  let sum = 0;
  
    for (let i = 0; i < 2; i++){
      let item = 0;
      expenses[i] = prompt("Введите обязательную статью расходов?");
      do{
      item = parseFloat(prompt("Во сколько это обойдется?"));
      }while(!isNumber(item));
      sum += item;
    }
     
  console.log(sum);
  return sum;
};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц' + expensesAmount);

let getAccumulatedMonth = function(){
  return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function(){
  if (accumulatedMonth > 0){
    let targetMonth = Math.ceil(mission / accumulatedMonth);
    console.log('Цель будет достигнута за ' + targetMonth + "  месяцев(ца)");
  } else {
    console.log('Цель не будет достигнута');
  }
};
getTargetMonth();

let budgetDay = Math.floor(accumulatedMonth / 30);
console.log(budgetDay);

let getStatusIncome = function(){
  if (budgetDay >= 1200) {
    return ('У вас высокий уровень дохода');
  } else if (budgetDay >= 600 && budgetDay < 1200){
    return ('У вас средний уровень дохода');
  } else if (budgetDay <=600 && budgetDay > 0){
    return ('К сожалению у вас уровень дохода ниже среднего');
  } else if (budgetDay < 0){
    return ('Что то пошло не так');
  }
}
console.log(getStatusIncome());
