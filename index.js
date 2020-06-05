function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}


function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string="*"){
    return function(adjective="special"){
        return `You are ${string}${adjective}${string}!`
    }
}

const Calculator = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2
 }

 function actionApplyer(int, array) {
    if (array.length === 0) {
        return int
     } else {
        let updatedInt = int
        array.forEach(fn => {
           updatedInt = fn(updatedInt); 
        })
        return updatedInt
     }
 }