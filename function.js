// 1. Write a function that uses a `for` loop to print numbers from 1 to 10.
// function printnumber(){
//     for(let i=1;i<=10;i++){
//         console.log(i);
//     }
// }
// printnumber()
// 2. Write a function that uses a `for` loop to calculate and return the sum of the first `n` natural numbers.
// function sumfirstn(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum=sum+i;
//     }
//     return sum;

// }
// console.log(sumfirstn(5))

// 3. Write a function that uses a `for` loop to print all even numbers between 1 and 20.
// function printnumber(){
//     for(i=1;i<=20;i++)
//         if(i%2==0)
//         console.log(i)
// }
// printnumber()
// 4. Write a function that uses a `for` loop to print all odd numbers between 1 and 20.
// function printnumber(){
//     for(i=1;i<=20;i++)
//     {
//         if(i%2!==0)
//             console.log(i)
//     }
// }
// printnumber()
// 5. Write a function that uses a `for` loop to calculate and return the factorial of a given number `n`.
// function factorial(n) {
//   let num = 1;

//   for (let i = 1; i <= n; i++) {
//     num = num * i;
//   }

//   return num;
// }
// console.log(factorial(6)); 
// 6. Write a function that uses a `for` loop to print the multiplication table of 5.
// function mul(){
//     let num=5;
//     for(i=1;i<=10;i++){
//         console.log(`${num}*${i}= ${num*i}`)

//     }
//     console.log(num)
// }
// mul()

// function num(n){
//     if(n%2==0){
//         console.log("Even")
//     }
//     else{
//         console.log("odd")
//     }
// }
// num(2)
// function findlargest(a,b){
//     if (a>b) {
//         console.log(`${a} is Largest`)
//     } else {
//         console.log(`${b} is Largest`)
        

// }}
// findlargest(2,1)

// function printnumber(n){
//     for(i=1;i<=n; i++){
//         console.log(i)
//     }
// }
// printnumber(4);

// function sumofnumber(){
//     let sum=0;
//     for(let i=1;i<=100;i++){
//         sum=sum+i
//     }
//     console.log(sum)
// }
// sumofnumber()
// function sumofnumber() {
//   let sum = 0;
//   for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }console.log(sum);
// }

// sumofnumber();


// function isPrime(number) {
//     let isPrimeNumber =true;
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//         isPrimeNumber = false;
//         break;
//     }
//   }
//   if (isPrimeNumber){
//     console.log(`${number} is prime number`);
//   }
//   else{
//     console.log(`${number} is not prime number`)
//   }

  
// }

// console.log(isPrime(15));  
// function multipleof3(){
//     for (let i=1; i<=30; i++){
//         if(i%3==0){
//             console.log(i)
//         }
//     }
// }multipleof3()

// 7. Write a function that uses a `for` loop to print numbers from 10 to 1 in reverse order.
// function printnumber(){
//     for(i=10;i>=1;i--){
//         console.log(i)
//     }
// }
// printnumber()
// 8. Write a function that uses a `for` loop to print all multiples of 3 between 1 and 30.

// function multipleof3(){
//     for (let i=1; i<=30; i++){
//         if(i%3==0){
//             console.log(i)
//         }
//     }
// }multipleof3()

// 9. Write a function that uses a `for` loop to calculate and return the sum of all even numbers between 1
// and 50
// function addeven(){
//     let sum =0;
//     for(i=1;i<=50;i++){
//         if(i%2==0){
//             sum=sum+i
//         }
//     }
//     console.log(sum)
// }
// addeven()

// 10. Write a function that uses a `for` loop to calculate and return the sum of all odd numbers between 1
// and 50.
// function addodd(){
//     let sum=0;
//     for(i=1;i<=50;i++){
//         if(i%2!==0){
//             sum=sum+i;
//         }
//     }
//     console.log(sum)
// }
// addodd()

// 10. Write a function that uses a `for` loop to calculate and return the sum of all odd numbers between 1
// and 50.
// function divide(){
//     for(i=1;i<=100;i++){
//         if(i%5==0){
//             console.log(i)
//         }
//     }
// }divide()

// function to printfibonacci series from first 10 natural number
// function printFibonacci() {
//   let a = 0;
//   let b = 1;

//   for (let i = 0; i < 10; i++) {
//     console.log(a);
//     let next = a + b;
//     a = b;
//     b = next;
//   }
// }

// printFibonacci();
// 14. Write a function that uses a `for` loop to print the square of each number from 1 to 10.
// function squarenumber(){
//     for(i=1;i<=10;i++){
//         console.log(i*i)
//     }
// }
// squarenumber()

// 15. Write a function that uses a `for` loop to calculate and return the sum of the squares of the first `n`
// natural numbers.
// function sumnumber(n){
//     for(i=1;i<=n;i++){


//     }
// }
// 16. Write a function that uses a `for` loop to print the cube of each number from 1 to 10.
// function cubeofnum(){
//     for(i=1;i<=10;i++){
//         console.log(i*i*i);
//     }
// }
// cubeofnum()

// 17. Write a function that uses a `for` loop to find and return the smallest number greater than 0 that is
// divisible by both 3 and 4
// function num(){
//     for(i=1;i<=100;i++){
//         if(i%3==0 && i%4==0){
//             console.log(i)
//             break;

//         }
        
//     }
// }num()

// 18. Write a function that uses a `for` loop to print the first 10 even numbers
// function printeven(){
//     for(i=0;i<=10;i++){
//         if(i%2==0){
//             console.log(i)
//         }
//     }
// }
// printeven()
