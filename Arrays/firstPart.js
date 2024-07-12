// task 1
const calcQuantityElements = arr => arr.length;
console.log(calcQuantityElements([1, 2, 3, 4]));

// task 2
function maxValue(arr) {
    // return Math.max(...arr);
    return arr.reduce((acc, cur) => Math.max(acc, cur), arr[0]);
}

function minValue(arr) {
    // return Math.min(...arr);
    return arr.reduce((acc, cur) => Math.min(acc, cur), arr[0]);
}

console.log(maxValue([1, 2, 3, 4]));
console.log(minValue([1, 2, 3, 4]));

// task 3
const calcSum = arr => arr.reduce((acc, cur) => acc + cur, 0);
console.log(calcSum([1, 2, 3, 4]));

// task 4
function deleteDuplicates(arr) {
    // const result = [];
    // for (const iterator of arr) {
    //     if (!result.includes(iterator)) result.push(iterator);
    // }
    // return result;

    return Array.from(new Set(arr));
}

console.log(deleteDuplicates([1, 1, 2, 2, 3, 4]));

// task 5
const filterRange = arr => arr.filter((cur) => cur >= 0 && cur <= 3);
console.log(filterRange([1, -1, 2, 2, 3, 4]));

// task 6
const includes = (arr, value) => arr.includes(value);
console.log(includes([2, 3, 4], -2));
console.log(includes([2, 3, 4], 2));

// task 7
const multiplyNumbers = (arr, num) => arr.map((item) => item * num);
console.log(multiplyNumbers([1, 2, 3, 4, 5], 2));

// task 8
function concatArray(arr1, arr2) {
    // return arr1.concat(arr2);
    return [...arr1, ...arr2];
}

console.log(concatArray([1, 2, 3, 4], [5, 6, 7, 8]));

// task 9
const array = [1, 9, 2, 8, 3, 7, 4, 6, 5];
const copyArray = array.slice();
console.log(`growth: ${copyArray.sort((a, b) => a - b)}`);
console.log(`decline: ${copyArray.sort((a, b) => b - a)}`);

// task 10
const yura = {
    age: 19,
    student: true,
    location: 'Lviv',
};
const marta = {
    age: 17,
    student: true,
    location: 'Lviv',
};
const danya = {
    age: 20,
    student: true,
    location: 'Lviv',
};

const users = [yura, marta, danya];
const usersLocation = users.map((user) => user.location);
const usersAvarageAge = users.reduce((acc, user) => (acc + user.age) / users.length, 0);
console.log(usersLocation);
console.log(usersAvarageAge.toFixed(2));

// task 11
function fillArray(start, quantity, step) {
    const result = [];

    for (let i = 0; i < quantity; i++) {
        result.push(start + i * step);
    }

    return result;
}

console.log(fillArray(1, 5, 2));

// task 12
const filterArray = arr => arr.filter((item) => item % 2 === 0);
console.log(filterArray([1, 2, 3, 4, 5, 6, -2]));
