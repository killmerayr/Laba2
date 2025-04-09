<?php
function towers($str, $x) { // Функция проверки покрытия
    $n = strlen($str); // Длина строки
    $cover = array(); // Массив покрытия

    for ($i = 0; $i < $n; $i++) {
        if ($str[$i] == '1') {
            $cover[$i] = true;
        } else {
            $cover[$i] = false;
        }
    }

    for ($i = 0; $i < $n; $i++) { // Обновление покрытия
        if ($cover[$i] == true) {
            for ($k = 0; $k <= $x; $k++) {
                if (isset($cover[$i + $k])) $cover[$i + $k] = true; // Покрытие вправо
                if (isset($cover[$i - $k])) $cover[$i - $k] = true; // Покрытие влево
            }
        }
    }

    for ($i = 0; $i < $n; $i++) { // Проверка покрытия
        if ($cover[$i]) continue;
        else return false;
    }

    return true;
}

// Main
echo "Введите вышки:\n";
$s = trim(fgets(STDIN)); // Считываем строку 
echo "Введите показатель x:\n";
$x = intval(trim(fgets(STDIN))); // Считываем число x

if (towers($s, $x)) {
    echo "Yes\n";
} else {
    echo "No\n";
}
?>
