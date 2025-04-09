import Foundation // Импорт стандартной библиотеки,

func countDigits(_ nums: [Int]) -> Int { // Функция int для счета цифр в числе, принимает массив int как параметр и выводит int
    var count = 0 

    for i in 0..<nums.count { 
        var num = abs(nums[i]) 
        var digits = 0
        if num == 0 {
            digits = 1
        } else {
            while num != 0 {
                num /= 10 
                digits += 1
            }
        }
        if digits % 2 != 0 {
            count += 1
        }
    }

    return count
}

// Main
print("Введите размер массива")

if let input = readLine(), let size = Int(input) {
    var numbers = [Int]() // Пустой массив целых чисел

    for i in 0..<size {
        print("\(i + 1) Элемент массива: ", terminator: "") // Терминатор - не переводим на новую строку
        
        if let elementInput = readLine(), let element = Int(elementInput) {
            numbers.append(element) // Добавляем элемент в массив
        }
    }

    print("\(countDigits(numbers)) Чисел(а) содержат нечетное количество цифр")
}
