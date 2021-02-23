'use strict'
let money = +prompt("Ваш месячный доход?"),
    income = 'Фриланс',
    addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую"),
    deposit = confirm("Есть ли у вас депозит в банке?"),
    mission = 100000,
    period = 4,
    expenses1 = prompt("Введите обязательную статью расходов?"),
    amount1 = +prompt("Во сколько это обойдется?"),
    expenses2 = prompt("Введите обязательную статью расходов?"),
    amount2 = +prompt("Во сколько это обойдется?");

let showTypeOf = function(data){
  console.log(data, typeof(data));
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log( addExpenses.toLowerCase() , addExpenses.split(', '));
console.log('Период равен ' + period + 'месяцев');
console.log(`Цель заработать ${mission} рублей`)


const getExpensesMonth = function(){
  return amount1 + amount2;
};
console.log(getExpensesMonth());

const getAccumulatedMonth = function(){
  return money - getExpensesMonth();
};

let accumulatedMonth = getAccumulatedMonth();

const getTargetMonth = function(){
  return Math.ceil(mission / accumulatedMonth);
};
console.log('Цель будет достигнута за ' + getTargetMonth() + "  месяцев(ца)");

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
