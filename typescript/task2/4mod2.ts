import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countDigits(nums: number[]): number {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = Math.abs(nums[i]);
        let digits = 0;
        if (num === 0) {
            digits = 1;
        } else {
            while (num !== 0) {
                num = Math.floor(num / 10);
                digits++;
            }
            if (digits % 2 !== 0) count++;
        }
    }
    return count;
}

rl.question('Введите размер массива: ', (size: string) => {
    const sizeNum = parseInt(size, 10);
    const numbers: number[] = [];
    let i = 0;

    const next = () => { // Запрос элементов массива с помощью цикла
        if (i < sizeNum) {
            rl.question(`${i + 1} Элемент массива: `, (element: string) => {
                numbers.push(parseInt(element, 10));
                i++;
                if (i < sizeNum) { // Запрос до конца элементов
                    next();
                } else {
                    const result = countDigits(numbers); // После запроса всех элементов используем функцию countDigits
                    console.log(`${result} Чисел(а) содержат нечетное количество цифр`);
                    rl.close();
                }
            });
        }
    };

    next(); // Запускаем функцию
});