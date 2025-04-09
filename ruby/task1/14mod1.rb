def towers(str, x)
    n = str.length
    cover = Array.new(n, false)
    (0...n).each do |i| # Цикл for
      cover[i] = true if str[i] == '1'
    end
    (0...n).each do |i|
      if str[i] == '1'
        (-x..x).each do |k|
          pos = i + k
          cover[pos] = true if pos >= 0 && pos < n
        end
      end
    end
    cover.all? # Условие (true/false если все 1)
  end
  
  # Основная программа
  puts "Введите вышки:"
  s = gets.chomp  # Читаем строку
  puts "Введите показатель x:"
  x = gets.chomp.to_i  # Преобразуем ввод в целое число
  # Вывод
  if towers(s, x)
    puts "Yes"
  else
    puts "No"
  end
  