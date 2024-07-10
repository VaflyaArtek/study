import { urls, fetchData } from './main.js';

fetchData(urls.postsList)
    .then(posts => {
        const post = posts.find(post => post.id === 5);
        console.log(post);
        return fetchData(urls.commentsToPost(post.id));
    })
    .then(comments => {
        console.log(comments);
    })
    .catch(error => console.error('Error fetching data:', error));
