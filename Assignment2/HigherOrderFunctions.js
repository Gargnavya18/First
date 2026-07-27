
// JavaScript Array Methods
// map(), filter(), reduce(), sort()


// Array of Student Objects
const students = [
    { name: "Ekta", marks: 90 },
    { name: "Rahul", marks: 75 },
    { name: "Aman", marks: 85 },
    { name: "Priya", marks: 60 }
];

console.log("Original Students:");
console.log(students);

// 1. map()

// map() creates a NEW array by changing every element.

const names = students.map((student) => {
    return student.name;
});

console.log("\n===== map() =====");
console.log("Student Names:");
console.log(names);

/*
Output:
["Ekta", "Rahul", "Aman", "Priya"]
*/



// 2. filter()

// filter() returns only those elements that satisfy the condition.

const toppers = students.filter((student) => {
    return student.marks > 80;
});

console.log("\n===== filter() =====");
console.log("Students Scoring More Than 80:");
console.log(toppers);

/*
Output:
[
 { name: 'Ekta', marks: 90 },
 { name: 'Aman', marks: 85 }
]
*/



// 3. reduce()

// reduce() converts the entire array
// into one value.

const totalMarks = students.reduce((sum, student) => {
    return sum + student.marks;
}, 0);

console.log("\n===== reduce() =====");
console.log("Total Marks:");
console.log(totalMarks);

/*
Dry Run

Initial sum = 0

Student      Marks      New Sum
Ekta          90        0 + 90 = 90
Rahul         75       90 + 75 = 165
Aman          85      165 + 85 = 250
Priya         60      250 + 60 = 310

Final Answer = 310
*/



// 4. sort()

// sort() rearranges the original array.

students.sort((a, b) => {
    return b.marks - a.marks;
});

console.log("\n===== sort() =====");
console.log("Students Sorted by Marks (Descending):");
console.log(students);

/*
Comparison Examples

Ekta(90) vs Rahul(75)

75 - 90 = -15
Negative
=> Ekta stays before Rahul

Aman(85) vs Rahul(75)

75 - 85 = -10
Negative
=> Aman stays before Rahul

Priya(60) vs Aman(85)

85 - 60 = 25
Positive
=> Aman comes before Priya

Final Order

Ekta   90
Aman   85
Rahul  75
Priya  60
*/


// map()
const numbers1 = [1, 2, 3, 4];

const doubled = numbers1.map((num) => {
    return num * 2;
});

console.log("\nmap() Example:");
console.log(doubled);   // [2,4,6,8]


// filter()
const numbers2 = [1, 2, 3, 4, 5, 6];

const even = numbers2.filter((num) => {
    return num % 2 === 0;
});

console.log("\nfilter() Example:");
console.log(even);      // [2,4,6]


// reduce()
const numbers3 = [10, 20, 30, 40];

const sum = numbers3.reduce((total, num) => {
    return total + num;
}, 0);

console.log("\nreduce() Example:");
console.log(sum);       // 100


// sort() Ascending
const numbers4 = [5, 1, 4, 2, 3];

numbers4.sort((a, b) => {
    return a - b;
});

console.log("\nsort() Ascending:");
console.log(numbers4);  // [1,2,3,4,5]


// sort() Descending
const numbers5 = [5, 1, 4, 2, 3];

numbers5.sort((a, b) => {
    return b - a;
});

console.log("\nsort() Descending:");
console.log(numbers5);  // [5,4,3,2,1]


// Summary

console.log("\n========== Summary ==========");

console.log("map()    -> Creates a NEW transformed array.");
console.log("filter() -> Returns elements satisfying a condition.");
console.log("reduce() -> Converts the array into one value.");
console.log("sort()   -> Rearranges the original array.");