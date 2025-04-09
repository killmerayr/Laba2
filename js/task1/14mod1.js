function towers(str, x) {
    let n = str.length;
    let cover = new Array(n).fill(false); // Массив с false значениями
    for (let i = 0; i < n; i++) {
        if (str[i] === '1') {
            cover[i] = true;
        } else {
            cover[i] = false;
        }
    }
    for (let i = 0; i < n; i++) {
        if (cover[i] === true) {
            for (let k = 0; k <= x; k++) {
                if (i + k < n) cover[i + k] = true;  // Покрываем вправо
                if (i - k >= 0) cover[i - k] = true;  // Покрываем влево
            }
        }
    }
    for (let i = 0; i < n; i++) {
        if (!cover[i]) {
            return false;
        }
    }
    return true;
}

const readline = require('readline'); // Модуль для взаимодействия через консоль

const rl = readline.createInterface({ // Инициализируем взаимодействие с пользователем
    input: process.stdin,
    output: process.stdout
});

rl.question("Введите вышки: ", function(s) {
    rl.question("Введите показатель x: ", function(x) {
        x = parseInt(x); // Преобразуем x в число
        if (towers(s, x)) {
            console.log("Yes");
        } else {
            console.log("No");
        }
        rl.close(); // Закрываем интерфейс после выполнения
    });
});
