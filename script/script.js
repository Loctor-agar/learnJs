'use strict'
let money = +prompt("Ваш месячный доход?", ""),
    income = 'Фриланс',
    addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", ""),
    deposit = confirm("Есть ли у вас депозит в банке?"),
    mission = 100000,
    period = 4,
    expenses1 = prompt("Введите обязательную статью расходов?"),
    amount1 = +prompt("Во сколько это обойдется?"),
    expenses2 = prompt("Введите обязательную статью расходов?"),
    amount2 = +prompt("Во сколько это обойдется?"),
    budgetMonth = money - (amount1 + amount2),
    budgetDay = budgetMonth / 30;

    
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.toLowerCase() , addExpenses.split(', '));
console.log(`Период равен ${period} месяцев`  , `Цель заработать ${mission} рублей`);
console.log("Бюджет " + budgetMonth + " за месяц");
console.log('Цель будет достигнута за ' + Math.ceil(mission / budgetMonth) + "  месяцев(ца)");
console.log('Цель за день ' + Math.floor(budgetDay) + ' рублей');

if (budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода')
} else if (budgetDay >= 600 && budgetDay <= 1200){
  console.log('У вас средний уровень дохода')
} else if (budgetDay <=600 && budgetDay >= 0){
  console.log('К сожалению у вас уровень дохода ниже среднего')
} else if (budgetDay < 0){
  console.log('Что то пошло не так')
}