import axios from 'axios';

// create method create an instance of axios client 
// with a couple of defaulted properties
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});