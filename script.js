// let a = document.querySelector("#first")
// let b = document.querySelector("body")

// function name() {
//     b.style.backgroundColor = "black"
//     b.innerText = "Wlcome To Biswa Coding World"
//     b.style.fontSize = "xx-large"
//     b.style.textAlign = "center"
//     b.style.color = "white"
//     b.innerHTML = "<h1> Hello Coders</h1>"


// }
// b.onclick = name

// function color() {
//     a.style.backgroundColor = "yellow"
// }
// a.addEventListener("click", color)

let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let add = document.getElementById("add")
let subtract = document.getElementById("subtract")
let into = document.getElementById("into")
let devide = document.getElementById("devide")
let percentage = document.getElementById("percentage")
let ans = document.getElementById("ans")

function fun_add() {
    let result = parseInt(num1.value) + parseInt(num2.value)
    ans.innerText = result;

}
add.onclick = fun_add

function fun_subtract() {
    let result = parseInt(num1.value) - parseInt(num2.value)
    ans.innerText = result;

}
subtract.onclick = fun_subtract

function fun_into() {
    let result = parseInt(num1.value) * parseInt(num2.value)
    ans.innerText = result;

}
into.onclick = fun_into

function fun_devide() {
    let result = parseInt(num1.value) / parseInt(num2.value)
    ans.innerText = result;

}
devide.onclick = fun_devide