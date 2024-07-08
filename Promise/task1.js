import { urls, fetchData } from './main.js';

fetchData(urls.postsList)
    .then(posts => {
        console.log('Post list: ', posts);

        const userId = prompt('Enter user id', '1');
        return fetchData(urls.userInfo(userId));
    })
    .then(user => {
        console.log('User info: ', user);

        const postId = prompt('Enter post id', '1');
        return fetchData(urls.commentsToPost(postId));
    })
    .then(comments => console.log('Comment to post: ', comments))
    .catch(error => console.error('Error: ', error));
