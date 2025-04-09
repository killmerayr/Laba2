using System;
using System.Collections.Generic; // Аналог <vector>

class Program {
    static int CountDigits(List<int> nums) {
        int count = 0;
        foreach (int number in nums) { // Идем по числам в списке
            int num = Math.Abs(number);
            int digits = 0;
            if (num == 0) {
                digits = 1;
            }
            else {
                while (num != 0){
                    num /= 10;
                    digits++;
                }
            }
            if (digits % 2 != 0){
                count++;
            }
        }

        return count;
    }
    static void Main(){
        Console.WriteLine("Введите размер массива:");
        int size = int.Parse(Console.ReadLine()); // Считываем размер массива и преобразуем в int
        List<int> numbers = new List<int>(); // Создаём пустой список чисел
        for (int i = 0; i < size; i++){
            Console.Write($"{i + 1} Элемент массива: ");
            int element = int.Parse(Console.ReadLine());
            numbers.Add(element); // Добавляем элемент в список
        }
        int result = CountDigits(numbers);
        Console.WriteLine($"{result} Чисел(а) содержат нечетное количество цифр");
    }
}
