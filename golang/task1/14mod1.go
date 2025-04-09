package main

import (
	"bufio"   // для удобного чтения ввода с клавиатуры (ввод построчно)
	"fmt"     // для вывода на экран и форматирования строк
	"os"      // для работы с операционной системой (доступ к stdin)
	"strconv" // для преобразования строки в число
	"strings" // для обработки строк (удаление пробелов, работа с подстроками)
)

func towers(str string, x int) bool {
	n := len(str)
	cover := make([]bool, n) //Создаем сновной массив покрытия

	for i := 0; i < n; i++ {
		if str[i] == '1' {
			cover[i] = true
		} else {
			cover[i] = false
		}
	}

	for i := 0; i < n; i++ {
		if cover[i] {
			for k := 0; k < x; k++ {
				if i+x < n {
					cover[i+k] = true
				}
				if i-x >= 0 {
					cover[i-k] = true
				}
			}
		}
	}
	for i := 0; i < n; i++ {
		if !cover[i] {
			return false
		}
	}
	return true
}

func main() {
	scanner := bufio.NewScanner(os.Stdin) // Ининциализируем пользовательский ввод
	fmt.Println("Введите вышки: ")
	scanner.Scan()
	s := strings.TrimSpace(scanner.Text())

	fmt.Println("Введите показатель X: ")
	scanner.Scan()
	xStr := strings.TrimSpace(scanner.Text()) // X считывается как строка
	x, err := strconv.Atoi(xStr)              // Строка преобразуется в целое число
	if err != nil {                           // Проверка на правильность строки (Х - целое число)
		fmt.Println("Строка должна быть целым числом")
		return
	}

	if towers(s, x) {
		fmt.Println("Yes")
	} else {
		fmt.Println("No")
	}
}
