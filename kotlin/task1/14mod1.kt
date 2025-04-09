fun towers(str: String, x: Int): Boolean {
    val n = str.length
    val cover = BooleanArray(n) // Массив 

    for (i in 0 until n) {
        cover[i] = str[i] == '1' 
    }

    for (i in 0 until n) {
        if (cover[i]) { 
            for (k in 0..x) { 
                if (i + k < n) cover[i + k] = true 
                if (i - k >= 0) cover[i - k] = true 
            }
        }
    }
    for (i in 0 until n) {
        if (!cover[i]) { 
            return false
        }
    }
    return true 
}

fun main() {
    println("Введите вышки")
    val s = readLine() ?: "" // Чтение строки 
    println("Введите показатель x")
    val x = readLine()?.toInt() ?: 0 // Чтение числа x

    // Вывод 
    if (towers(s, x)) {
        println("Yes")
    } else {
        println("No")
    }
}
