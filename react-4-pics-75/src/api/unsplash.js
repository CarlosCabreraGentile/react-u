import axios from 'axios';

// create method create an instance of axios client 
// with a couple of defaulted properties
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 46b19875073b43410a2b41b72bdc18ca2f387a18e308111bd3fd1677682b1a57'
    }
});