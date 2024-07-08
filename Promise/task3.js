import {fetchData, urls} from './main.js';

fetchData(urls.invalidAddress)
    .then(data => console.log('Data from invalid address', data))
    .catch(error => console.error('Error requesting a non-existent resource:', error.message));
