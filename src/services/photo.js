import config from '../config';
import {
    EndPoint
} from '../constans';

const getPhotoAsync = async (id) => {
    try {
        let response = await fetch(`${config.API_BASE}${EndPoint.photos}?album=${id}`);
        let data = await response.json();
        return data; 
    } catch (error) {
        throw error;
    }
}


export {
    getPhotoAsync
}