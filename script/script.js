let money = 20000;
let income = 'Фриланс';
let addExpenses = '"Такси","Еда","Комуналка"';
let deposit = true;
let mission = 100000;
let period = 4;
let budgetDay = money;

// - Вывести в консоль тип данных значений переменных money, income, deposit;
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
//  - Вывести в консоль длину строки addExpenses
console.log(addExpenses.length);
//  - Вывести в консоль “Период равен (period) месяцев” и “Цель заработать (mission) рублей/долларов/гривен/юани”
console.log(`Период равен ${period} месяцев`  , `Цель заработать ${mission} рублей`);
// - Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log(addExpenses.toLocaleLowerCase().split(" "))
//    - Объявить переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30)
console.log(budgetDay / 30)
//  - Вывести в консоль budgetDay
