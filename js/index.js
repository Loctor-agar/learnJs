"use strict";

let calculate = document.getElementById('start');

let btnPlus = (document.getElementsByTagName('button')[0],[1]);

let depositCheck = document.querySelector('#deposit-check');

let additionalIncomeItem = document.querySelectorAll('.additional_income-item');

let budgetDayValue = document.getElementsByClassName('.budget_day-value'),
    budgetMonthValue = document.getElementsByName('.budget_month-value'),
    expensesMonthValue = document.getElementsByName('.expenses_month-value'),
    additionalIncomeValue = document.getElementsByName('.additional_income-value'),
    additionalExpensesValue = document.getElementsByName('.additional_expenses-value'),
    incomePeriodValue = document.getElementsByName('.income_period-value'),
    targetMonthValue = document.getElementsByName('.target_month-value');

let salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    additionalIncomeItem = document.querySelector('.additional_income-item'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select');
