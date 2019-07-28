import config from '../config';
import {
    EndPoint
} from '../constans';

const getUserAsync = async () => {
    try {
        let response = await fetch(`${config.API_BASE}${EndPoint.users}`);
        let data = await response.json();
        return data; 
    } catch (error) {
        throw error;
    }
}


export {
    getUserAsync
}