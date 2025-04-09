import Foundation // Подключаем стандартную библиотеку


func towers(_ str: String, _ x: Int) -> Bool { //Функция bool для проверки покрытия, принимает string и int, возвращает true/false
    let n = str.count 
    var cover = [Bool](repeating: false, count: n) // Булевый массив, заполненный false
    let chars = Array(str) // Преобразование строки в символы

    for i in 0..<n { // Заполняем массив
        if chars[i] == "1" {
            cover[i] = true
        } else {
            cover[i] = false
        }
    }
    for i in 0..<n {
        if cover[i] {
            for k in 0...x { 
                if i + k < n { // Проверка выхода за границы массива
                    cover[i + k] = true // Покрытие вправо
                }
                if i - k >= 0 {
                    cover[i - k] = true // Покрытие влево
                }
            }
        }
    }
    for i in 0..<n { // Окончательная проверка массива
        if !cover[i] { 
            return false 
        }
    }
    return true 
}

// Main
print("Введите вышки") 

if let s = readLine() { // Считываем строку с башнями (возвращает Optional string(String?), поэтому используем if let)
    print("Введите показатель x")

    if let input = readLine(), let x = Int(input) { // Преобразуем строку в int
        if towers(s, x) {
            print("Yes")
        } else {
            print("No")
        }
    }
}
