// 1.Task: Array Reduction
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfEvenNumbers = numbers.reduce((accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
        return accumulator + currentValue;
    }
    return accumulator;
}, 0);

console.log(sumOfEvenNumbers);

// 2.Task: Leap Year Checker
// Write a function that determines whether a given year is a leap year.
// Example: Happy New Year

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(2024)); // output: true
console.log(isLeapYear(2023)); // output: false

// 3.Task: Unique Values
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const Allnumber = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

const uniqueValues = Allnumber.filter((value, index) => {
    return Allnumber.indexOf(value) === index;
});

console.log(uniqueValues);

// 4.Task: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.

const num = [10, 20, 30, 40, 50];

const findMaxValue = (arr) => {
    return Math.max(...arr);
};

console.log(findMaxValue(num));

//5.Task: Advanced Sorting
//Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.

const students = [
    { name: "Alice", grades: [90, 85, 92] },
    { name: "Bob", grades: [80, 75, 78] },
    { name: "Charlie", grades: [95, 88, 91] },
];

const sortByAverageGrade = (students) => {
    return students.sort((a, b) => {
        const avgA =
            a.grades.reduce((total, grade) => total + grade, 0) /
            a.grades.length;
        const avgB =
            b.grades.reduce((total, grade) => total + grade, 0) /
            b.grades.length;
        return avgB - avgA;
    });
};

console.log(sortByAverageGrade(students));
