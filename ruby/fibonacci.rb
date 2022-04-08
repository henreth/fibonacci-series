def fibonacci(num)
  return num if num < 2

  tot = 0;
  num1 = 0;
  num2 = 0;
  num.times{|i| 
    newNum = num1 +num2;
    if i >= num-1
      tot +=newNum
    elsif i==0
      num2 = 1;
    else 
      num1 = num2;
      num2 = newNum;
  end
}
 tot
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
