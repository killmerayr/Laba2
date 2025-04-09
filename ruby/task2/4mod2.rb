def count_digits(nums)
    count = 0
    nums.each do |num|
      num = num.abs 
      digits = 0 
      if num == 0
        digits = 1 
      else
        while num != 0
          num /= 10
          digits += 1
        end
      end
      count += 1 if digits.odd? #Встроенная проверка на четность (odd)
    end
  
    return count
  end
  
  # Основная программа
  puts "Введите размер массива:"
  size = gets.chomp.to_i  # Переводим число в int
  numbers = []
  (1..size).each do |i| # Ввод массива
    print "#{i} Элемент массива: "
    num = gets.chomp.to_i
    numbers << num # Добавление в массив 
  end
  
  # Вывод
  result = count_digits(numbers)
  puts "#{result} Чисел(а) содержат нечетное количество цифр"
  