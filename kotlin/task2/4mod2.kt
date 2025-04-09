import kotlin.math.abs

fun countDigits(nums: List<Int>): Int { // Функция для счета цифр в числе
    var count = 0
    for (i in nums.indices) {
        var num = abs(nums[i])
        var digits = 0
        if (num == 0) digits = 1
        else {
            while (num != 0) {
                num /= 10
                digits++
            }
            if (digits % 2 != 0) count++
        }
    }
    return count
}

fun main() {
    println("Введите размер массива")
    val size = readLine()?.toInt() ?: 0 // Ввод с клавиатуры
    val numbers = mutableListOf<Int>()
    for (i in 0 until size) {
        println("${i + 1} Элемент массива: ")
        val num = readLine()?.toInt() ?: 0 // Ввод с клавиатуры
        numbers.add(num) // Добавляем в массив
    }
    println("${countDigits(numbers)} Чисел(а) содержат нечетное количество цифр")
}
