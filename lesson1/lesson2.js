"use strict";


let a = +prompt("Ввдите число а")
let b = +prompt("Введите число b")

/**
 * Функция сложения
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function sum (a, b) {
    return (a + b);
}
/**
 * Функция вычетания
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function subtraction (a, b) {
    return a - b;
}
/**
 * Функция умножения
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function multiplication (a, b) {
    return a * b;
}
/**
 * Функция деления
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function division (a, b) {
    return a / b;
}

let summ = sum (a, b); 
console.log ("Ответ " + summ + " Сложение переменных a и b");

let summSub = subtraction (a, b);
console.log ("Ответ " + summSub + " Вычитание из переменной а");

let summMulti = multiplication (a, b);
console.log ("Ответ " + summMulti + " Умножение переменных a и b");

let summDivis = division (a, b);
console.log ("Ответ " + summDivis + " Деление переменной a на b");
