const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

rl.question("Введите количество чисел: ", function(n) {
    n = parseInt(n); // Преобразуем в число
    let count = 0;
    let i = 0;
    function next() {
        if (i < n) {
            rl.question(`${i + 1} Число: `, function(num) {
                num = parseInt(num); // Преобразуем введенное число в целое число
                if (isPrime(num)) count++; 
                i++; 
                next(); 
            });
        } else {
            console.log(`${count} Простых чисел в массиве`);
            rl.close(); // Закрываем интерфейс ввода
        }
    }

    next(); // Начинаем с первого числа
});
