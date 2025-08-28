/****************************************************
 * Problem Set Solutions
 * Open the browser console to view outputs.
 ****************************************************/

/* --------------------------------------------------
 Part 1: Data Structures
-------------------------------------------------- */

/*
1. Arrays, Sets, Maps
Create an array of fruits. Turn it into a Set to remove duplicates.
Then create a Map where each fruit is a key and the value is the
number of letters in the fruit name. Print all three.
*/
console.log("\n1) Arrays, Sets, Maps");
const fruits = ["apple", "banana", "apple", "orange", "banana"];
const fruitSet = new Set(fruits);
const fruitLengths = new Map([...fruitSet].map(f => [f, f.length]));
console.log("array:", fruits);
console.log("set (unique):", [...fruitSet]);
console.log("map (fruit → length):", [...fruitLengths.entries()]);

/*
2. When to use what?
You want to store student grades and look up by student ID quickly.
Which structure fits best? (Array, Set, or Map) → Map.
*/
console.log("\n2) When to use what?");
console.log("Answer:", "Use a Map: id → grade for O(1) lookups and non-string keys if needed.");

/*
3. Classic structures (theory)
Give one everyday example for each:
Stack, Queue, Tree, Graph.
*/
console.log("\n3) Classic structures (theory)");
console.log("Stack (LIFO):", "Undo history in an editor.");
console.log("Queue (FIFO):", "Line at a ticket counter.");
console.log("Tree:", "Folders/files in a file system.");
console.log("Graph:", "Cities connected by flights.");

/* --------------------------------------------------
 Part 2: Sorting
-------------------------------------------------- */

/*
4. Default sort quirk
Sort numbers with default .sort() and then with numeric compare.
*/
console.log("\n4) Default sort quirk");
const nums = [50, 5, 100, 2];
console.log("default sort (as strings):", nums.slice().sort());
console.log("numeric ascending:", nums.slice().sort((a, b) => a - b));

/*
5. Custom logic with arrow function
Sort words by length (shortest first).
*/
console.log("\n5) Custom logic with arrow function");
const words = ["sun", "strawberry", "car", "elephant"];
console.log("by length asc:", words.slice().sort((a, b) => a.length - b.length));

/*
6. Sorting strings with localeCompare (Norwegian collation)
Use 'no'/'nb'/'nn' so æ < ø < å at the end of the alphabet.
*/
console.log("\n6) localeCompare (Norwegian)");
const norsk = ["Ørn", "Åse", "Eva", "Ægir", "Anders"];
console.log(
  "Norwegian order:",
  norsk.slice().sort((a, b) => a.localeCompare(b, "nb", { sensitivity: "base" }))
);

/* --------------------------------------------------
 Part 3: Higher-Order Functions
-------------------------------------------------- */

/*
7. filter(): numbers > 9
*/
console.log("\n7) filter() numbers > 9");
const numbers = [3, 10, 18, 5, 21, 7];
const overNine = numbers.filter(n => n > 9);
console.log("original:", numbers, "filtered:", overNine);

/*
8. map(): greetings
*/
console.log("\n8) map() greetings");
const names = ["Ada", "Linus", "Grace"];
const greetings = names.map(n => `Hello ${n}`);
console.log("greetings:", greetings);

/*
9. reduce(): sum expenses
*/
console.log("\n9) reduce() sum");
const expenses = [25, 60, 15, 100];
const total = expenses.reduce((sum, x) => sum + x, 0);
console.log("expenses:", expenses, "total:", total);

/*
10. Combined chain: cart total (price * qty)
*/
console.log("\n10) Chain: map → reduce (cart total)");
const cart = [
  { name: "Pen", price: 5, qty: 4 },
  { name: "Notebook", price: 20, qty: 2 },
  { name: "Backpack", price: 100, qty: 1 }
];
const cartTotal = cart
  .map(item => item.price * item.qty)
  .reduce((sum, v) => sum + v, 0);
console.log("cartTotal:", cartTotal);

/* --------------------------------------------------
 Part 4: Asynchronous JavaScript
-------------------------------------------------- */

/*
11. setTimeout(): "Loading..." then "Done!" after 2s
*/
console.log("\n11) setTimeout once (2s)");
console.log("Loading...");
setTimeout(() => {
  console.log("Done!");
}, 2000);

/*
12. setInterval(): print 'Tick' each second, stop after 5 ticks
*/
console.log("\n12) setInterval (5 ticks, 1s)");
let tickCount = 0;
const tickTimer = setInterval(() => {
  tickCount++;
  console.log("Tick", tickCount);
  if (tickCount === 5) {
    clearInterval(tickTimer);
    console.log("Stopped");
  }
}, 1000);

/*
13. Zero-delay timeout: print A, then schedule B(0ms), then print C
Expected order:
A
C
B
*/
console.log("\n13) setTimeout 0ms ordering");
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");

/*
14. Real-world scenarios: timeout or interval?
- Popup hides after 5s → setTimeout
- Digital clock updates every second → setInterval
*/
console.log("\n14) Which timer?");
console.log("Popup hides after 5s:", "setTimeout");
console.log("Clock updates every second:", "setInterval");

/* --------------------------------------------------
 End
-------------------------------------------------- */
