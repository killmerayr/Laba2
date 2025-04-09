using System; // Аналог <iostream>

class Program { // Весь код всегда внутри класса, точка входа - main или т. п. 
    static bool Towers(string str, int x){
        int n = str.Length;  // Длина строки
        bool[] cover = new bool[n];
        for (int i = 0; i < n; i++){
            if (str[i] == '1') 
                cover[i] = true;  // Если на этой позиции есть вышка, она покрывает участок
            else 
                cover[i] = false;  // Если вышки нет, участок не покрыт
        }
        for (int i = 0; i < n; i++){
            if (cover[i]){  // Если на этой позиции есть вышка
                for (int k = 0; k < x; k++){
                    if (i + k < n) cover[i + k] = true;  // Участок справа от вышки
                    if (i - k >= 0) cover[i - k] = true;  // Участок слева от вышки
                }
            }
        }
        for (int i = 0; i < n; i++){
            if (!cover[i])  
                return false;
        }

        return true;  
    }

    static void Main(){
        Console.WriteLine("Введите вышки");
        string s = Console.ReadLine();  
        Console.WriteLine("Введите показатель x");
        int x = int.Parse(Console.ReadLine());  

        if (Towers(s, x)) 
            Console.WriteLine("Yes");
        else 
            Console.WriteLine("No");
    }
}
