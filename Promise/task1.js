import {urls, getPostsList, getUserInfo, getCommentoToPost} from './main.js';

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
