'use strict';

function tickets(peopleInLine){
    for (let i = 0; i < peopleInLine.length; i++) {
        if (peopleInLine[i] > 25) {
            let changeRequired = peopleInLine[i] - 25
            let moneyInBack = (peopleInLine.indexOf(peopleInLine[i]) + 1) * 25
            return (moneyInBack - changeRequired > 0) ? 'YES' : 'NO'
        }
    }
}

console.log(tickets([25, 25, 50, 50]));
console.log(tickets([25, 100]));
