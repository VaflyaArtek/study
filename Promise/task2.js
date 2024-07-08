import {getCommentsToPost, getPostsList, urls} from './main.js';

getPostsList(urls.postsList)
    .then(posts => {
        const post = posts.find(post => post.id === 5);
        console.log(post);
        return getCommentsToPost(urls.commentsToPost, post.id);
    })
    .then(comments => {
        console.log(comments);
    })
    .catch(error => console.error('Error fetching data:', error));
