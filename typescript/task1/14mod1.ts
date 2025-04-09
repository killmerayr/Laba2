import * as readline from 'readline';

// Интерфейс для работы с терминалом
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function towers(str: string, x: number): boolean {
    const n = str.length;
    const cover: boolean[] = Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        if (str[i] === '1') {
            cover[i] = true;
        }
    }

    for (let i = 0; i < n; i++) {
        if (cover[i]) {
            for (let k = 0; k <= x; k++) {
                if (i + k < n) cover[i + k] = true;
                if (i - k >= 0) cover[i - k] = true;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!cover[i]) return false;
    }
    return true;
}

rl.question('Введите вышки: ', (s: string) => {
    rl.question('Введите показатель x: ', (x: string) => {
        const xNum = parseInt(x, 10); // Преобразуем x в число
        if (towers(s, xNum)) {
            console.log('Yes');
        } else {
            console.log('No');
        }
        rl.close(); // Закрываем интерфейс после завершения
    });
});
