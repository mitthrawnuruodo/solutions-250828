# Lesson Task: Working with advanced JavaScript features

* Data Structures, 
* Sorting, 
* Higher-Order Functions, and 
* Asynchronous JavaScript

## Part 1: Data Structures

### 1. Arrays, Sets, Maps
Create an array of fruits: `["apple", "banana", "apple", "orange", "banana"]`.
* Turn it into a `Set` to remove duplicates.
* Then create a `Map` where each fruit is a key and its value is the number of letters in the fruit name.
* Print all three (array, set, and map).

### 2. When to use what?
You want to store student grades:
* Each student has a unique ID number.
* You need to look up a student’s grade quickly by their ID.

Which structure fits best: **`Array`**, **`Set`**, or **`Map`**? Explain your choice in one sentence.

### 3. Classic structures (theory)
Name one everyday example where each of these would be useful:
* Stack (Last In, First Out)
* Queue (First In, First Out)
* Tree (hierarchy)
* Graph (connections)

## Part 2: Sorting

### 4. Default sort quirk
Create an array of numbers: `[50, 5, 100, 2]`.
* Use `.sort()` directly and print the result.
* Then fix the sort with a compare function so it sorts in ascending numeric order.

### 5. Custom logic with arrow function
You have an array of words: `["sun", "strawberry", "car", "elephant"]`.
* Sort them by length (shortest first).
* Use an arrow function as the compare callback.

### 6. Sorting strings with localeCompare
Make an array: `["Ørn", "Åse", "Eva", "Ægir", "Anders"]`.
* Sort it with `localeCompare` using the `"no"` locale so Norwegian ordering rules apply.
* Print the result.

## Part 3: Higher-Order Functions (HOFs)

### 7. Filtering with `filter()`
Given `const numbers = [3, 10, 18, 5, 21, 7];`
* Use `.filter()` to create a new array containing only the numbers greater than 9.

### 8. Transforming with `map()`
Given `const names = ["Ada", "Linus", "Grace"];`
Use `.map()` to create a new array of greetings: 
`["Hello Ada", "Hello Linus", "Hello Grace"]`.

### 9. Reducing with `reduce()`
Given `const expenses = [25, 60, 15, 100];`
Use `.reduce()` to calculate the total sum. 

### 10. Combined chain
You have a shopping cart:
```js
const cart = [
  { name: "Pen", price: 5, qty: 4 },
  { name: "Notebook", price: 20, qty: 2 },
  { name: "Backpack", price: 100, qty: 1 }
];
```
Use `.map()` and `.reduce()` in a chain to calculate the total value of the cart.

## Part 4: Asynchronous JavaScript

### 11. Using `setTimeout()`
Write code that prints `"Loading..."` immediately, then prints `"Done!"` after 2 seconds.

### 12. Using `setInterval()`
Create code that prints `"Tick"` every second.
Stop it after 5 ticks.

### 13. Zero-delay timeout
Write code that prints:
```
A
C
B
```
(using `setTimeout` with 0 ms delay for "B").

### 14. Real-world scenarios
Which would you use in each case: setTimeout or setInterval?
A popup message disappears after 5 seconds.
A digital clock updates every second.