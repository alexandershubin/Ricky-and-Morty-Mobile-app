import axios from 'axios';

export const getDataCharacters = async (url) => {
    return await axios.get(url);
};
