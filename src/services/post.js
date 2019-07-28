import config from '../config';
import {
    EndPoint
} from '../constans';

const getPostAsync = async () => {
    try {
        let response = await fetch(`${config.API_BASE}${EndPoint.posts}`);
        let data = await response.json();
        return data; 
    } catch (error) {
        throw error;
    }
}


export {
    getPostAsync
}