'use strict'

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesBtn = document.getElementsByTagName('button')[0], // утвердить (обязательные)
    optionalExpensesBtn = document.getElementsByTagName('button')[1], // утвердить (необязательные)
    countBtn = document.getElementsByTagName('button')[2], // рассчитать 
    expensesItem = document.getElementsByClassName('expenses-item'),
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'), // возможный доход
    sumValue = document.querySelector('.choose-sum'),
    checkSavings = document.querySelector('#savings'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    mohthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

var d = new Date();
let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', d.toLocaleDateString());

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '');
        
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log ('Получилось');
                appData.expenses[a] = b;
            } else { 
                // console.log('Что-то пошло не так');
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert('Ежедневный бюжет: ' + appData.moneyPerDay);        
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log("Произошла какая-то ошиибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма ваших накоплений?'),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let q = prompt("Статья необязательных расходов?", '');
            appData.optionalExpenses[i] = q;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function() {
        
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        
            if ((typeof(items)) != 'string' || (typeof(items)) == null || items == '') {
                console.log('Не получилось');
            } else {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может, что-то еще?'));
                appData.income.sort();
            }            
            appData.income.forEach(function(item, i){
            alert("Способы доп. заработка: " + (i+1) + ' - ' + item);
            });
    }
};

for (let key in appData) {
    console.log ("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}


