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

function getCommentsToPost(url, postId) {
    return fetch(url(postId))
        .then(response => {
            if (!response.ok) {
                throw new Error('Network failed');
            }
            return response.json();
        });
}

export {urls, getPostsList, getCommentsToPost};
