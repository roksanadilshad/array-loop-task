const numbers = [1, 2, 3];
const copyNumber = [...numbers] ; //ager array k copy bujhay

copyNumber[0] = 99; // index indicate kore index er man ber korte hbe..push ba onno kisu na.

console.log(numbers);
console.log(copyNumber);