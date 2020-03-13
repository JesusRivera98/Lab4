let a = 0
let b = 0
let c = 0

let sum = document.getElementById("addButton")
let num = document.getElementsByClassName("inputNumber")
let res = document.getElementById("substractButton")
let pr = document.getElementById("resultValue")

sum.addEventListener("click", function(){
    a = num.value,
    pr.value = a

});
    