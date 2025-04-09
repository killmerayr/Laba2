import math

def isPrime(n):
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):  # проверка до квадратного корня числа
        if n % i == 0:
            return False
    return True

def main():
    size = int(input("Введите количество чисел "))
    count = 0
    for i in range(size):
        num = int(input(f"{i + 1} Число = "))
        if isPrime(num) == True:
            count += 1
    print(f"Простых чисел {count}")

if __name__ == "__main__":
    main()

