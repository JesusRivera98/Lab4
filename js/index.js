let a = 0
let b = 0
let c = 0
let op = 0

let sum = document.getElementById("addButton")
let res = document.getElementById("substractButton")
let mult = document.getElementById("multiplicationButton")
let div = document.getElementById("divisionButton")
let reset = document.getElementsByClassName("resetButton")[0]
let equal = document.getElementsByClassName("equalButton")[0]


let num = document.getElementsByClassName("inputNumber")[0]
let pr = document.getElementById("resultValue")
let log = document.getElementById("logInformation")

log.innerText = ""
function evalua (){
    switch(op){
        case 0:
            c = a            
            break;
        case 1:
            c = a + c
            break;
        case 2:
            c = c - a
            break;
        case 3:
            c = a * c
            break;
        case 4:
            c = c / a
            break;
        /*case 5:
            log.value = c
            break;*/

    }
    op = 6,
    pr.value = c
}

sum.addEventListener("click", function () {
    if (num.value != "") {
        a = Number(num.value)
        if(op == 5){
            log.value = ""
            op = 0
            c = 0
            b = 0
        }        
        evalua(),        
        b = a,
        num.value = "",
        log.value= log.value + a + "+"
    }
    else if(log.value != ""){
        if(op != 5){
            log.value = log.value.slice(0,-1)
        }
        else{
            log.value = c 
        }
        log.value = log.value + "+"
        
    }
    op = 1
});
res.addEventListener("click", function () {
    if (num.value != "") {
        a = Number(num.value)
        if(op == 5){
            log.value = ""
            op = 0
            c = 0
            b = 0
        }        
        evalua(),        
        b = a,
        num.value = "",
        log.value= log.value + a + "-"
    }
    else if(log.value != ""){
        if(op != 5){
            log.value = log.value.slice(0,-1)
        }
        else{
            log.value = c 
        }
        log.value = log.value + "-"
        
    }
    op = 2
});
mult.addEventListener("click", function () {
    if (num.value != "") {
        a = Number(num.value)
        if(op == 5){
            log.value = ""
            op = 0
            c = 0
            b = 0
        }        
        evalua(),        
        b = a,
        num.value = "",
        log.value= log.value + a + "*"
    }
    else if(log.value != ""){
        if(op != 5){
            log.value = log.value.slice(0,-1)
        }
        else{
            log.value = c 
        }
        log.value = log.value + "*"
        
    }
    op = 3
});
div.addEventListener("click", function () {
    if (num.value != "") {
        a = Number(num.value)
        if(op == 5){
            log.value = ""
            op = 0
            c = 0
            b = 0
        }        
        evalua(),        
        b = a,
        num.value = "",
        log.value= log.value + a + "/"
    }
    else if(log.value != ""){
        if(op != 5){
            log.value = log.value.slice(0,-1)
        }
        else{
            log.value = c 
        }
        log.value = log.value + "/"
        
    }
    op = 4
});

reset.addEventListener("click", function(){
    a = 0
    b = 0
    c = 0
    op = 0
    log.value = ""
    pr.value = ""
    num.value = ""

})

equal.addEventListener("click", function(){
    if(log.value != "" && op != 5){
        if (num.value != "") {
            a = Number(num.value),
                evalua(),
                num.value = "",
                log.value = log.value + a
        }
        else {
            log.value = log.value.slice(0, -1)

        }
        log.value = log.value + "=" + c
        op = 5
    }
    
})
