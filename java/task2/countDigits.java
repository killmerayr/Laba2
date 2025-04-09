import java.util.Scanner;
import java.util.ArrayList; // Аналог <vectir>

public class countDigits {
    public static int countDigits(ArrayList<Integer> nums) {
        int count = 0;
        for (int num : nums) {
            num = Math.abs(num); 
            int digits = 0;
            
            if (num == 0) {
                digits = 1;
            } else {
                while (num != 0) {
                    num /= 10;
                    digits++;
                }
                if (digits % 2 != 0) {
                    count++;
                }
            }
        }
        
        return count;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Введите размер массива:");
        int size = scanner.nextInt(); 
    
        ArrayList<Integer> numbers = new ArrayList<>(); // Массив для чисел

        for (int i = 0; i < size; i++) {
            System.out.println((i + 1) + " Элемент массива: ");
            numbers.add(scanner.nextInt()); // Добавляем числа в массив
        }
        System.out.println(countDigits(numbers) + " Чисел(а) содержат нечетное количество цифр");

        scanner.close();  
    }
}
