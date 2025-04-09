use std::io;

fn is_prime(n: i32) -> bool {
    if n < 2 {
        return false;
    }
    for i in 2..=(n as f64).sqrt() as i32 {
        if n % i == 0 {
            return false;
        }
    }
    true
}

fn main() {
    let mut input = String::new();
    println!("Введите количество чисел:");
    io::stdin().read_line(&mut input).expect("Ошибка");
    let n: i32 = input.trim().parse().expect("Не число");

    let mut count = 0;
    for i in 0..n {
        input.clear();
        println!("{} Число:", i + 1);
        io::stdin().read_line(&mut input).expect("Ошибка");
        let num: i32 = input.trim().parse().expect("Не число");

        if is_prime(num) {
            count += 1;
        }
    }
    println!("{} Простых чисел", count);
}
