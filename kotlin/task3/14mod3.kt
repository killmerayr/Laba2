fun isPrime(n: Int): Boolean { // Функция для проверки простого числа
    if (n < 2) return false
    for (i in 2..Math.sqrt(n.toDouble()).toInt()) {
        if (n % i == 0) return false
    }
    return true
}

fun main() {
    println("Введите количество чисел")
    val n = readLine()?.toInt() ?: 0 // Ввод с клавиатуры
    var count = 0
    for (i in 0 until n) {
        println("${i + 1} Число: ")
        val num = readLine()?.toInt() ?: 0 // Ввод с клавиатуры
        if (isPrime(num)) count++
    }
    println("$count Простых чисел в массиве")
}
