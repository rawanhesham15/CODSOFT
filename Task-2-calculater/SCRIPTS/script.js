let num1;
let num2;
const screen = document.getElementById("screen");

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function(){
    screen.value = 0; 
    isOperation = false;
})


function display(button){
    if(button.innerHTML == 0 && screen.value == 0){
        screen.value = 0;
    }else if(screen.value == 0){
        screen.value = button.innerHTML.trim();
    }else{
        screen.value += button.innerHTML.trim();
    }
}


let isOperation = false;
let operator;

function operation(operationBtn){
    if(!isOperation){
        operator = operationBtn.innerHTML.trim();
        num1 = screen.value;
        screen.value = 0;
        isOperation = true;
    }
}

function calc(){
    num2 = screen.value;
    var res = eval(`${+num1} ${operator} ${num2}`)
    screen.value = res;
    isOperation = false;
}