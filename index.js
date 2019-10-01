function saturdayFun(thing="roller-skate"){
return `This Saturday, I want to ${thing}!`
}

saturdayFun()
saturdayFun("bathe my dog")

let mondayWork = function(stuff = "go to the office") { 
 return  `This Monday, I will ${stuff}.`
}

mondayWork()


function wrapAdjective(flair = "*") {
        return function innerScope(mood = "special") {
           return `You are ${flair}${mood}${flair}!`
        }
     }

     const Calculator = {
        add: function(num1, num2){
           return num1 + num2
        },
        
        subtract: function(num1, num2) {
          return  num1 - num2
        },

        multiply: function(num1, num2){
          return  num1 * num2
        },

        divide: function(num1, num2) {
        return num1 / num2
        },
     
    }
     
    function actionApplyer(i,array){

        

    }