const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countDigits(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = Math.abs(nums[i]);
        let digits = 0;
        
        if (num === 0) {
            digits = 1;
        } else {
            while (num !== 0) {
                num = Math.floor(num / 10); // Делим на 10 и округляем вниз
                digits++;
            }
            if (digits % 2 !== 0) count++;
        }
    }
    return count;
}


rl.question("Введите размер массива: ", function(size) {
    size = parseInt(size); // Преобразуем в число
    let numbers = [];
    let count = 0;
    let i = 0;

    function next() { // Вывод элементов с помощью цикла for 
        if (i < size) { // Проверка на запрашиваемость (нужно ли их запрашивать?)
            rl.question(`${i + 1} Элемент массива: `, function(element) {
                numbers.push(parseInt(element)); // Добавляем элемент в массив
                i++; // Увеличиваем индекс
                next(); // Продолжаем запрашивать следующий элемент
            });
        } else {
            console.log(countDigits(numbers) + " Чисел(а) содержат нечетное количество цифр"); // После ввода выводим функцию countDigits
            rl.close(); 
        }
    }

    next(); // Начинаем с первого элемента и идем далее
});
