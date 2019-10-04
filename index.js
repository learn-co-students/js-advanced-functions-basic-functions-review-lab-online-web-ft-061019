// Your code here

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
 }

//  const mondayWork = function(activity = "go to the office"){
//      return `This Monday, I will ${actiity}.`
//  }

 const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(f = "*"){
    return function(adj = "special"){
        return `You are ${f}${adj}${f}!`
    }
}

const Calculator = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2
}

function actionApplyer(startingInteger, arrayOfFunctions){
    if (arrayOfFunctions.length === 0) {
        return startingInteger
    } else {
        let newInteger = startingInteger
        arrayOfFunctions.forEach(element => {
            newInteger = element(newInteger);
        });
        return newInteger
    }
}