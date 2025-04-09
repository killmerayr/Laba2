package main

import (
	"fmt"
)

func isPrime(n int) bool {
	if n < 2 {
		return false
	}
	for i := 2; i*i <= n; i++ {
		if n%i == 0 {
			return false
		}
	}
	return true
}

func main() {
	var n int
	var count int = 0
	fmt.Println("Введите количество целых чисел")
	fmt.Scan(&n)
	for i := 0; i < n; i++ {
		var num int
		fmt.Println("Введите", i+1, "число")
		fmt.Scan(&num)
		if isPrime(num) {
			count++
		}
	}
	fmt.Println("Простых чисел", count)
}
