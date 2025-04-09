use std::io::{self, Write};

fn towers(str: &str, x: usize) -> bool {
    let n = str.len(); // Получаем длину строки
    let mut cover = vec![false; n]; // Вектор длины n, все элементы — false, mul - изменяемая переменная

    // Преобразуем строку в список символов
    for (i, c) in str.chars().enumerate() { // str.chars().enumerate() - преобразует строку в символы и индексирует их
        if c == '1' {
            cover[i] = true; // Отмечаем, где стоят вышки
        }
    }

    for i in 0..n {
        if cover[i] {
            for k in 0..=x {
                if i + k < n {
                    cover[i + k] = true; // Покрытие вправо
                }
                if i >= k {
                    cover[i - k] = true; // Покрытие влево
                }
            }
        }
    }

    // Проверяем, все ли участки покрыты
    for c in cover {
        if !c {
            return false; // Если хотя бы один не покрыт — возвращаем false
        }
    }

    true // Иначе возвращаем true
}

fn main() {
    let mut input = String::new(); // Считываем ввод пользователя со строки

    println!("Введите вышки: ");
    io::stdout().flush().unwrap(); // Очищаем буфер вывода 
    io::stdin().read_line(&mut input).unwrap(); // Читаем строку с клавиатуры
    let s = input.trim().to_string(); // Удаляем пробелы и перевод строки

    // Очищаем строку перед следующим вводом
    input.clear();

    // Просим пользователя ввести значение X
    println!("Введите показатель X: ");
    io::stdout().flush().unwrap();
    io::stdin().read_line(&mut input).unwrap();

    // Преобразуем строку в число
    let x: usize = match input.trim().parse() {
        Ok(num) => num, // Успешное преобразование
        Err(_) => {
            println!("Строка должна быть целым числом");
            return;
        }
    };


    if towers(&s, x) {
        println!("Yes");
    } else {
        println!("No");
    }
}
