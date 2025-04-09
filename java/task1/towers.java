import java.util.Scanner; // Обработка ввода с клавиатуры

public class towers {
    public static boolean towers(String str, int x) {
        int n = str.length();  // Длина строки
        boolean[] cover = new boolean[n];  
        for (int i = 0; i < n; i++) {
            if (str.charAt(i) == '1') { 
                cover[i] = true;
            } else {
                cover[i] = false;
            }
        }
        for (int i = 0; i < n; i++) {
            if (cover[i]) { 
                for (int k = 0; k <= x; k++) {
                    if (i + k < n) {
                        cover[i + k] = true;
                    }
                    if (i - k >= 0) {
                        cover[i - k] = true;
                    }
                }
            }
        }
        for (int i = 0; i < n; i++) {
            if (!cover[i]) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);  // Инициализация ввода
        
        System.out.println("Введите вышки:");
        String s = scanner.next();  // Ввод строки
        
        System.out.println("Введите показатель x:");
        int x = scanner.nextInt();  // Ввод целого числа x
        
        if (towers(s, x)) {
            System.out.println("Yes");  
        } else {
            System.out.println("No"); 
        }

        scanner.close();  // Закрытие ввода
    }
}
