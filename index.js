// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun();

mondayWork();
function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string="*"){
    return function(param="special"){
        return `You are ${string}${param}${string}!`
    }
}
wrapAdjective("%")("a dedicated programmer")

const Calculator = {
    add:(num1, num2) => num1 + num2,
    subtract:(num1, num2) => num1 - num2,
    multiply:(num1, num2)=> num1 * num2,
    divide:(num1, num2) => num1 / num2
}

function actionApplyer(num, funcArray){
    if (funcArray.length < 1 || funcArray == undefined){
        return num
    } else {
        funcArray.forEach(function(x){
            num = x(num)
        });
        return num
    }

}