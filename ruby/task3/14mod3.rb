def is_prime(n)
    return false if n < 2
    (2..Math.sqrt(n).to_i).each do |i| # Цикл for от 2 до sqrt(n) 
      return false if n % i == 0  
    end
    return true 
  end
  
  # Основная программа
  puts "Введите количество чисел:"
  n = gets.chomp.to_i 
  count = 0

  (1..n).each do |i|
    print "#{i} Число: "
    num = gets.chomp.to_i
    count += 1 if is_prime(num) # Проверка условия, если да то прибавляем 1 к count
  end

  puts "#{count} Простых чисел в массиве"
  