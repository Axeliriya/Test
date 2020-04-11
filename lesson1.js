'use strict'

var d = new Date();
let money,
    time;

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


// let i = 0;
// while (i < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется?', '');

//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log('Получилось');
//         appData.expenses[a] = b;
//     } else {
//         console.log('Что-то пошло не так');
//         i--;
//     }
//     i++;
// }

// let i = 0;
 
// do {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется?', '');

//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
                
//         console.log('Получилось');
//         appData.expenses[a] = b;
//     } else {
//         console.log('Что-то пошло не так');
//         i--;
//     }
//     i++;
// }
// while (i <2);

// function chooseExpenses () {
//     for (let i = 0; i < 2; i++) {
//         let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//             b = prompt('Во сколько обойдется?', '');
    
//         if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//             console.log ('Получилось');
//             appData.expenses[a] = b;
//         } else { 
//             console.log('Что-то пошло не так');
//             i--;
//         }
//     }
// }
// chooseExpenses();

// function detectDayBudget() {
//     appData.moneyPerDay = (appData.budget / 30).toFixed(2);
//     alert('Ежедневный бюжет: ' + appData.moneyPerDay);
// }
// detectDayBudget();

// function detectLevel() {
//     if (appData.moneyPerDay < 100) {
//         console.log('Минимальный уровень достатка');
//     } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//         console.log('Средний уровень достатка');
//     } else if (appData.moneyPerDay > 2000) {
//         console.log('Высокий уровень достатка');
//     } else {
//         console.log("Произошла какая-то ошиибка");
//     }
// }
// detectLevel();

// function checkSavings() {
//     if (appData.savings == true) {
//         let save = +prompt('Какова сумма ваших накоплений?'),
//             percent = +prompt("Под какой процент?");

//         appData.monthIncome = save/100/12*percent;
//         alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
//     }
// }
// checkSavings();

// function chooseOptExpenses () {
//     for (let i = 1; i <= 3; i++) {
//         let q = prompt("Статья необязательных расходов?", '');
//         appData.optionalExpenses[i] = q;
//         console.log(appData.optionalExpenses);
//     }
// }

// chooseOptExpenses();