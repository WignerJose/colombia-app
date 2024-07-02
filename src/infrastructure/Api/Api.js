import axios from 'axios';

const API_BASE_URL = 'https://api-colombia.com/api/v1';

export const getContry = async()=>{
    try {
        const response = await axios.get(`${API_BASE_URL}/Country/Colombia`);
        return response.data;
    } catch (error) {
        console.log('Error axios et', error);
        throw error;
    }
};