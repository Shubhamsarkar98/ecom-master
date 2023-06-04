import axios from 'axios';
const baseURL = "http://35.154.42.112/api";

export const homeApi = async () => {
    let response = await axios.get(baseURL + "/home");
    return response.data;
}

export const categoryApi = async () => {
    let response = await axios.get(baseURL + "/categories");
    return response.data;
} 