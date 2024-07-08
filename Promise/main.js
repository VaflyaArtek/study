const urls = {
    postsList: 'https://jsonplaceholder.typicode.com/posts',
    invalidAddress: 'https://jsonplaceholder.typicode.com/invalid',
    userInfo(userId) {
        return `https://jsonplaceholder.typicode.com/users/${userId}`;
    },
    commentsToPost(postId) {
        return `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
    },
};

function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network failed');
            }
            return response.json();
        });
}

export {urls, fetchData};
