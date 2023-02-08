/* Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3 */

let array = [];
while (array.length != 5) {
    array.push(Math.round(Math.random() * 10));
}
console.log(array);
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
}
console.log(`Сумму элементов сгенерированного массива = ${sum}`);
let min = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
    }
}
console.log(`Минимальное число в сгенерированном массиве = ${min}`);
let resul = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] === 3) {
        resul = 1;
        console.log(`В сгенерированном массиве есть число 3 с индексом ${i}`);
    }
}
if (resul === 0) {
    console.log(`В сгенерированном массиве нет числа 3`);
} 