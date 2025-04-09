import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPrime(n: number): boolean {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

rl.question('Введите количество чисел: ', (n: string) => {
    const count = parseInt(n, 10);
    let pcount = 0;
    let i = 0;

    // Запрашиваем числа и проверяем на простоту
    const next = () => {
        if (i < count) {
            rl.question(`${i + 1} Число: `, (num: string) => {
                const number = parseInt(num, 10);
                if (isPrime(number)) pcount++;
                i++;
                // Если еще не все числа введены, продолжаем запрос
                if (i < count) {
                    next();
                } else {
                    // Все числа введены, выводим результат
                    console.log(`${pcount} Простых чисел в массиве`);
                    rl.close();
                }
            });
        }
    };

    next();
});