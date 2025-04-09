def countDigits(nums):
    count = 0
    for num in nums:  # идем по массиву nums (элементы num в списке nums)
        num = abs(num)
        digits = 0
        if num == 0:
            digits = 1
        else:
            while num != 0:
                num //= 10  # Используем целочисленное деление
                digits += 1
            if digits % 2 != 0:
                count += 1
    return count

def main():
    size = int(input("Введите размер массива: "))  
    nums = []  # Список для чисел
    for i in range(size):
        num = int(input(f"Число {i + 1} = "))  # используем f-строки для вывода
        nums.append(num)  # добавляем число в список
    print(f"Нечетное кол-во цифр содержат {countDigits(nums)} число(а)")  # передаем список в функцию

if __name__ == "__main__":
    main()