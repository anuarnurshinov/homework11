'use strict'
const btn = document.querySelector("#e_btn");
const input = document.querySelector("#text")
const square = document.querySelector("#square")
const circle = document.querySelector("#circle")
const inputRange = document.querySelector("#range")
const rangeSpan = document.querySelector("#range-span")

const changeColor = function () {
    console.log(input.value)
    square.style.backgroundColor = `${input.value}`
    input.value = ''
    btn.style.display = 'none'
}

const changeSize = function () {
    circle.style.width = `${inputRange.value}%`
    circle.style.height = `${inputRange.value}%`
    rangeSpan.textContent = `${inputRange.value}%`
}








btn.addEventListener('click', changeColor);
inputRange.addEventListener('input', changeSize);
