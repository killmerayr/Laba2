package main

import (
	"fmt"
)

func countDigits(slice []int) int { // slice - то же самое что & в C++
	count := 0
	for i := 0; i < len(slice); i++ {
		n := slice[i]
		digits := 0
		if n < 0 {
			n = -n
		} //если отрицательное число
		if n == 0 {
			digits = 1
		}
		if n > 0 {
			for n != 0 { //аналогия с while
				n /= 10
				digits++
			}
		}
		if digits%2 != 0 {
			count++
		}
	}
	return count
}

func main() {
	var n int
	fmt.Println("Введите количество элементов")
	fmt.Scan(&n)

	slice := make([]int, n)
	fmt.Println("Введите", n, "количество целых чисел")

	for i := 0; i < n; i++ {
		fmt.Scan(&slice[i])
	}

	result := countDigits(slice)
	fmt.Println("Количество числе с нечетными цифрами", result)
}
