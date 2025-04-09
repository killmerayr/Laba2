import Foundation // Подключение стандартной библиотеки

func isPrime(_ n: Int) -> Bool { // Функция bool для проверки на простое число, принимает int выводит true/false
    if n < 2 {
        return false
    }

    let upper = Int(Double(n).squareRoot()) // Граница - int, double - число с плавающей точкой, squareRoot - вычисление корня
    if upper >= 2 {
        for i in 2...upper { // Цикл до границы
            if n % i == 0 { 
                return false
            }
        }
    }
    return true
}


// Main
print("Введите количество чисел")

if let input = readLine(), let n = Int(input) {
    var count = 0 

    for i in 0..<n {
        print("\(i + 1) Число: ", terminator: "") // Терминатор - не переводим на новую строку
        
        if let Input = readLine(), let num = Int(Input) {
            if isPrime(num) {
                count += 1
            }
        }
    }
    print("\(count) Простых чисел в массиве")
}
