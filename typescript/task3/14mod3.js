"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function isPrime(n) {
    if (n < 2)
        return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
rl.question('Введите количество чисел: ', (n) => {
    const count = parseInt(n, 10);
    let pcount = 0;
    let i = 0;
    // Запрашиваем числа и проверяем на простоту
    const next = () => {
        if (i < count) {
            rl.question(`${i + 1} Число: `, (num) => {
                const number = parseInt(num, 10);
                if (isPrime(number))
                    pcount++;
                i++;
                // Если еще не все числа введены, продолжаем запрос
                if (i < count) {
                    next();
                }
                else {
                    // Все числа введены, выводим результат
                    console.log(`${pcount} Простых чисел в массиве`);
                    rl.close();
                }
            });
        }
    };
    next();
});
