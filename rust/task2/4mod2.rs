use std::io;

fn countDigits(nums: &Vec<i32>) -> i32{ // i32 - то же самое, что и int
    let mut count = 0;
    for &num in nums { // Разыменовываем num (для того чтобы было значение, а не ссылка на значение)
        let mut digits = 0;
        let mut n = num.abs(); // Копия числа
        if n == 0 {
            digits = 1;
        } else {
            while n != 0 {
                n /= 10;
                digits += 1;
            }
        }
        if digits % 2 != 0{
            count += 1;
        }
    }
    return count;
}

fn main(){
    let mut input = String::new();
    println!("Введите рамер массива");

    io::stdin().read_line(&mut input).expect("Ошибка"); // Читаем строку из ввода (ссылка на изменяемую строку), если не получилось - ошибка
    let size: usize = input.trim().parse().expect("Не число"); // trim - убираем пробелы, parse - преобразуем строку в число
    
    input.clear(); // Чистим input

    let mut numbers: Vec<i32> = Vec::new();

    for i in 0..size{
        println!("Введите {} элемент массива", i + 1);
        io::stdin().read_line(&mut input).expect("Ошибка чтения");
        let num: i32 = input.trim().parse().expect("Введите корректное число");
        numbers.push(num);
        input.clear();
    }

    let result = countDigits(&numbers);
    println!("{} числа содержат нечетные числа", result);
}