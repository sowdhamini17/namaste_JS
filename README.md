# namaste_JS
1.how can you justify map is a higher order function

A higher-order function is a function that either:

Takes one or more functions as arguments.
Returns a function as its result.
The JavaScript map() function is considered a higher-order function because it accepts a callback function as its argument. This callback function is executed on each element of the array being mapped.

Justification for map() as a Higher-Order Function:
Takes a Function as an Argument: The map() function requires a callback function that will be applied to every element in the array. The callback function itself contains the logic for how each element should be transformed.

Abstraction: map() abstracts away the iteration over the array and applies the callback function to each element, leaving only the transformation logic to be provided. This characteristic of passing behavior (in the form of the callback function) into the map() function makes it a typical higher-order function.

Example
javascript
Copy code
const numbers = [1, 2, 3, 4, 5];

// Higher-order function `map` takes a callback function
const doubled = numbers.map((num) => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8, 10]
Here, map() takes the callback function (num) => num * 2 as its argument. This callback function is applied to every element of the array.

Summary
map() is a higher-order function because it accepts a function (callback) as an argument.
The callback function contains the transformation logic that map() applies to each element of the array, enabling powerful, reusable transformations with minimal code.

FILTER

The filter() function in JavaScript is a method used to create a new array that includes only the elements of the original array that pass a specified test (i.e., satisfy a condition). This method does not change the original array; it simply returns a new one with the filtered elements.

filter() vs. map()
filter(): Returns a new array with elements that pass a test (i.e., those that satisfy a condition). The length of the resulting array may be smaller than the original.

map(): Transforms each element of the array and returns a new array of the same length, where each element is transformed based on a provided function.

REDUCE
The reduce() method in JavaScript is a powerful tool for accumulating or reducing an array 
into a single value by executing a callback function on each element of the array.
 This method is particularly useful for summing up values, flattening arrays, or performing more complex transformations that involve combining array elements.

When to Use reduce()
1.Summing or Multiplying Values: When you need to accumulate a single result (like a sum or product) from an array.
2.Flattening Arrays: Useful for turning a multi-dimensional array into a one-dimensional array.
3.Counting or Grouping: It helps in scenarios where you need to count occurrences or group objects by a specific key.
4. Complex Data Transformations: It provides a flexible way to reduce an array into any arbitrary data structure (object, array, etc.).


