def towers(s, x):
    n = len(s)
    cover = [char == '1' for char in s]
    
    for i in range(n):
        if cover[i]:  # проверяем, если в вышке есть '1' 
            for k in range(1, x + 1):  # k = 1 до x включительно
                if i + k < n:
                    cover[i + k] = True
                if i - k >= 0:
                    cover[i - k] = True

    # Проверяем, покрыты ли все участки
    return all(cover)

def main():
    s = input("Введите вышки: ")
    x = int(input("Введите показатель x: "))
    if towers(s, x):
        print("Yes")
    else:
        print("No")

if __name__ == "__main__":
    main()