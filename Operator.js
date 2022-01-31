// Operators, Branching, Loops
// Easy

//     Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.
const add5 = (n1, n2, n3, n4, n5) => n1 + n2 + n3 + n4 + n5;
//     Write a program to take a number input from user and determine whether the number is odd or even.
const isEven = (n) => n % 2 === 0;
//     Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.
const max2 = (n, m) => (n > m ? n : m);
//     Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.
const max3 = (n, m, o) => (n > m ? (n > o ? n : o) : m > o ? m : o);
//     Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.
const max3 = (n, m, o) => (n < m ? (n < o ? n : o) : m < o ? m : o);
//     Write program to take a month as an input from the user and find out whether the month has 31 days or not.
const monthHas31Days = (month) => new Date(2020, month, 0).getDate() == 31;
// Intermediate

//     Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

//     Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....
const Fizzbuzz = (n = 100) =>
  Array.from({ length: n }, (_, i) =>
    (i + 1) % 15
      ? (i + 1) % 5
        ? (i + 1) % 3
          ? i + 1
          : "Fizz"
        : "Buzz"
      : "FizzBuzz"
  );

//     Print the following star pattern :-

//     *
//     * *
//     * * *
//     * * * *
//     * * * * *
const starRightAnglePattern = (n) => {
  str = "";
  for (i = 0; i < n; i++) str += "*".repeat(i + 1) + "\n";
  return str;
};
//     Write a program to take a number input from user and print multiplication table 12 times for that number.
const multiplicationArray = (n, times = 12) =>
  Array.from({ length: times }, (_, i) => (i + 1) * n);
const multiplicationTable = (n, times = 12) =>
  multiplicationArray(n, times)
    .map((multiple, time) => `${n} X ${time + 1} = ${multiple}`)
    .join("\n");
//     Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....
const fibonacciSeries = (n) =>
  n < 1
    ? "please provide positve values grater than 0"
    : Array.from({ length: n }, (_, i) => i).map((_, i, array) =>
        i == 0 || i == 1 ? i : array[i - 1] + array[i - 1]
      );
//     Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120
const factorial = (n) =>
  n == 0
    ? 1
    : n < 0
    ? "please provide positve values"
    : Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a * b);
//     Write a Program to take a number input from user and find if the number is Prime or not.
const isPrime = (n) => Array.from({ length: n / 2 }, (_, i) => (i+1)==2||i%2?i + 1:);
//     Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.
