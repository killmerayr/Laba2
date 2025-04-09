<?php
function countDigits($nums) { // Функция для подсчёта чисел 
    $count = 0;
    foreach ($nums as $num) { // Цикл for для массива
        $num = abs($num); 
        $digits = 0;
        if ($num == 0) {
            $digits = 1;
        } else {
            while ($num != 0) {
                $num = intdiv($num, 10); 
                $digits++;
            }
            if ($digits % 2 != 0) {
                $count++;
            }
        }
    }
    return $count;
}

// Main
echo "Введите размер массива:\n";
$size = intval(trim(fgets(STDIN))); // Считываем размер массива
$numbers = array(); // Массив чисел

// Считываем элементы массива
for ($i = 0; $i < $size; $i++) {
    echo ($i + 1) . " Элемент массива: ";
    $numbers[$i] = intval(trim(fgets(STDIN))); // Считываем элементы
}

echo countDigits($numbers) . " Чисел(а) содержат нечетное количество цифр\n";
?>
