// task 1
function camelize(str) {
    return str
        .split('-')
        .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('')
}
console.log(camelize('background-color'))

// task 2
const filterRange = (arr, a, b) => arr.filter(item => item >= a && item <= b)
console.log(filterRange([5, 3, 42, 6, 4, -2], 0, 10));

// task 3
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];

        if (val <= a || val >= b) {
            arr.splice(i, 1)
            i--
        }
    }
}

const arr3 = [5, 3, 42, 6, 4, -2]
filterRangeInPlace(arr3, 0, 10)
console.log(arr3);

// task 4
let array = [5, 2, 1, -10, 8];
array.sort((a, b) => b - a)
console.log(array);

// task 5
const copySorted = arr => arr.slice().sort()

const strArray = ["HTML", "JavaScript", "CSS"]
const strArray2 = copySorted(strArray)
console.log(strArray);
console.log(strArray2);

// task 6
{
    let ivan = { name: "Іван", age: 25 };
    let petro = { name: "Петро", age: 30 };
    let mariya = { name: "Марія", age: 28 };

    let users = [ivan, petro, mariya];

    let names = users.map(item => item.name)

    console.log(names);
}

// task 7
{
    let ivan = { name: "Іван", surname: "Іванко", id: 1 };
    let petro = { name: "Петро", surname: "Петренко", id: 2 };
    let mariya = { name: "Марія", surname: "Мрійко", id: 3 };

    let users = [ivan, petro, mariya];

    let usersMapped = users.map(user => ({
        fullName: user.name + " " + user.surname,
        id: user.id
    }))

    console.log(usersMapped[0].id)
    console.log(usersMapped[0].fullName)
}

// task 9
let ivan = { name: "Іван", age: 25 };
let petro = { name: "Петро", age: 30 };
let mariya = { name: "Марія", age: 28 };

let arr = [petro, ivan, mariya];

const sortByAge = arr => arr.sort((a, b) => a.age - b.age)
sortByAge(arr);

// now: [ivan, mariya, petro]
console.log(arr[0].name); // Іван
console.log(arr[1].name); // Марія
console.log(arr[2].name); // Петро
