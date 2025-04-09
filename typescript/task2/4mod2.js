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
function countDigits(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = Math.abs(nums[i]);
        let digits = 0;
        if (num === 0) {
            digits = 1;
        }
        else {
            while (num !== 0) {
                num = Math.floor(num / 10);
                digits++;
            }
            if (digits % 2 !== 0)
                count++;
        }
    }
    return count;
}
rl.question('Введите размер массива: ', (size) => {
    const sizeNum = parseInt(size, 10);
    const numbers = [];
    let i = 0;
    const next = () => {
        if (i < sizeNum) {
            rl.question(`${i + 1} Элемент массива: `, (element) => {
                numbers.push(parseInt(element, 10));
                i++;
                if (i < sizeNum) { // Запрос до конца элементов
                    next();
                }
                else {
                    const result = countDigits(numbers); // После запроса всех элементов используем функцию countDigits
                    console.log(`${result} Чисел(а) содержат нечетное количество цифр`);
                    rl.close();
                }
            });
        }
    };
    next(); // Запускаем функцию
});
