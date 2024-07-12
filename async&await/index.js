// task 1
const delay = async ms => new Promise(resolve => setTimeout(resolve, ms));

async function waitForDelay(ms) {
    try {
        console.log(1);
        await delay(ms);
        console.log(2);
    } catch (error) {
        console.error('Error during delay:', error);
    }
}

waitForDelay(1000);

// task 2
const fetchDataFromAPI = async url => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const data = await fetchDataFromAPI('https://jsonplaceholder.typicode.com/posts');
console.log(data);

// task 3
async function fetchUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

async function fetchPostsByUser() {
    try {
        const users = await fetchUser();
        const userIds = users.map(user => user.id);

        let userId;
        while (true) {
            userId = prompt(`Enter user id, accessible IDs: ${userIds.join(',')}`);
            if (userIds.includes(+userId) || userId === null) break;
        }

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching posts by user:', error);
    }
}

console.log(await fetchPostsByUser());


// task 4
async function parallelOperations() {
    try {
        const [data1, data2, data3] = await Promise.all([
            fetchDataFromAPI('https://jsonplaceholder.typicode.com/posts'),
            fetchUser(),
            fetchPostsByUser()
        ]);
        console.log(data1);
        console.log(data2);
        console.log(data3);
    } catch (error) {
        console.error('Error in parallel operations:', error);
    }
}

await parallelOperations();
