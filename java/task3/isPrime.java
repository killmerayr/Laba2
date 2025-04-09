import java.util.Scanner;

public class isPrime{

    public static boolean isPrime(int n) { // Функция для проверки, является ли число простым
        if (n < 2) {
            return false;  
        }
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                return false;  
            }
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Введите количество чисел:");
        int n = scanner.nextInt();  // Ввод количества чисел
        int count = 0;
        for (int i = 0; i < n; i++) {
            System.out.println((i + 1) + " Число:");
            int num = scanner.nextInt(); 
            if (isPrime(num)) {
                count++; 
            }
        }

        System.out.println(count + " Простых чисел в массиве");

        scanner.close(); 
    }
}