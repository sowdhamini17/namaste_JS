const numbers = [1, 2, 3, 4, 5];

// Higher-order function `map` takes a callback function
const doubled = numbers.map((num) => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8, 10]

// FILTER
const isOdd=function(num){
    return num % 2;

}
const odds=numbers.filter(isOdd)
console.log(odds)

//REDUCE
// array.reduce(callback(accumulator, currentValue, index, array), initialValue)
const summation=numbers.reduce(function(acc,curr){
    acc=acc+curr;
    return acc
},0)
console.log(summation)