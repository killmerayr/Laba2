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
// Создаем интерфейс для работы с терминалом
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function towers(str, x) {
    const n = str.length;
    const cover = Array(n).fill(false);
    for (let i = 0; i < n; i++) {
        if (str[i] === '1') {
            cover[i] = true;
        }
    }
    for (let i = 0; i < n; i++) {
        if (cover[i]) {
            for (let k = 0; k <= x; k++) {
                if (i + k < n)
                    cover[i + k] = true;
                if (i - k >= 0)
                    cover[i - k] = true;
            }
        }
    }
    for (let i = 0; i < n; i++) {
        if (!cover[i])
            return false;
    }
    return true;
}
// Запрашиваем у пользователя строку с вышками
rl.question('Введите вышки: ', (s) => {
    // Запрашиваем у пользователя значение x
    rl.question('Введите показатель x: ', (x) => {
        const xNum = parseInt(x, 10); // Преобразуем x в число
        if (towers(s, xNum)) {
            console.log('Yes');
        }
        else {
            console.log('No');
        }
        rl.close(); // Закрываем интерфейс после завершения
    });
});
