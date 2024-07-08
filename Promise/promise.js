// task 1
const urls = {
    postsList: 'https://jsonplaceholder.typicode.com/posts',
    userInfo(userId) {
        return `https://jsonplaceholder.typicode.com/users/${userId}`;
    },
    commentsToPost(postId) {
        return `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
    },
};

function getPostsList(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network failed');
            }
            return response.json();
        });
}

function getUserInfo(url, userId) {
    return fetch(url(userId))
        .then(response => {
            if (!response.ok) {
                throw new Error('Network failed');
            }
            return response.json();
        });
}

function getCommentsToPost(url, postId) {
    return fetch(url(postId))
        .then(response => {
            if (!response.ok) {
                throw new Error('Network failed');
            }
            return response.json();
        });
}

getPostsList(urls.postsList)
    .then(posts => {
        console.log('Post list: ', posts);

        const userId = prompt('Enter user id', '1');
        return getUserInfo(urls.userInfo, userId);
    })
    .then(user => {
        console.log('User info: ', user);

        const postId = prompt('Enter post id', '1');
        return getCommentsToPost(urls.commentsToPost, postId);
    })
    .then(comment => console.log('Comment to post: ', comment))
    .catch(error => console.error('Error: ', error));
