<?php
function isPrime($n) { // Функция для проверки, является ли число простым
    if ($n < 2) return false; 
    for ($i = 2; $i * $i <= $n; $i++) { // Проверка делителей от 2 до sqrt(n)
        if ($n % $i == 0) return false; 
    }
    return true; 
}

// Main
echo "Введите количество чисел:\n";
$n = intval(trim(fgets(STDIN))); // Считываем количество чисел
$count = 0; 

for ($i = 0; $i < $n; $i++) {
    echo ($i + 1) . " Число: ";
    $num = intval(trim(fgets(STDIN))); // Считываем число
    if (isPrime($num)) $count++; 
}

echo "$count Простых чисел в массиве\n";
?>
