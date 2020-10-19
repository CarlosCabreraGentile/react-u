import axios from 'axios';

const KEY = 'AIzaSyAG1B1gcskk9DiKNG8gHjuKgdDrAP3sqXE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
});