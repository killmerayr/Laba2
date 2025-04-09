using System;

class Program{
    static bool IsPrime(int n){
        if (n < 2) return false;
        for (int i = 2; i * i <= n; i++){
            if (n % i == 0) return false;
        }

        return true;
    }

    // Главная функция — точка входа в программу, как main() в C++
    static void Main(){
        Console.WriteLine("Введите количество чисел:");
        int n = int.Parse(Console.ReadLine()); // Чтение и преобразование ввода из строки в int
        int count = 0;

        for (int i = 0; i < n; i++){
            Console.Write($"{i + 1} Число: ");
            int num = int.Parse(Console.ReadLine()); // Считываем каждое число

            if (IsPrime(num)){
                count++;
            }
        }

        Console.WriteLine($"{count} Простых чисел в массиве");
    }
}

