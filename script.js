// 1. Reverse a string without using the built-in reverse() method:
function reverseString(inputString) {
    let reversedString = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }
    return reversedString;
}

// 2. Count the number of vowels in a given string:
function countVowels(inputString) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of inputString) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// 3. Convert the first letter of each word in a sentence to uppercase:
function capitalizeFirstLetter(sentence) {
    return sentence.replace(/\b\w/g, char => char.toUpperCase());
}

// 4. Check if a string is a palindrome:
function isPalindrome(inputString) {
    const reversedString = inputString.split('').reverse().join('');
    return inputString === reversedString;
}

// 5. Find the sum of all positive numbers in an array:
function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
}

// 6. Find the index of the first occurrence of a specific element in an array:
function indexOfElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}

// 7. Remove all duplicates from an array without built-in methods:
function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let item of arr) {
        if (!uniqueArray.includes(item)) {
            uniqueArray.push(item);
        }
    }
    return uniqueArray;
}

// 8. Sort the array in ascending and descending without built-in methods:
function sortAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function sortDescending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// 9. Print all even numbers between 1 and 20 using a while loop:
function printEvenNumbers() {
    let num = 2;
    while (num <= 20) {
        console.log(num);
        num += 2;
    }
}

// 10. Calculate the factorial of a number using a do-while loop:
function factorial(n) {
    let result = 1;
    let i = 1;
    do {
        result *= i;
        i++;
    } while (i <= n);
    return result;
}

// 11. Iterate through the properties of an object using a for-in loop:
function iterateObjectProperties(obj) {
    for (let key in obj) {
        console.log(key + ": " + obj[key]);
    }
}

// 12. Loop through an array using a for-of loop and double each element:
function doubleArrayElements(arr) {
    let doubledArray = [];
    for (let num of arr) {
        doubledArray.push(num * 2);
    }
    return doubledArray;
}

// 13. Check if a number is even or odd and return a corresponding message:
function checkEvenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

// 14. Find the maximum of three numbers using nested ternary operators:
function maxOfThreeNumbers(a, b, c) {
    return a > b ? (a > c ? a : c) : (b > c ? b : c);
}

// 15. Determine if a year is a leap year or not:
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
