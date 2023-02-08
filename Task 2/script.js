/* Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7] */

let array = [1, 2, 3, 4, 5, 6, 7];
for (let i = 3; i < array.length; i++) {
    array[i] = array[i + 2];
}
array.pop();
array.pop();
console.log(array);