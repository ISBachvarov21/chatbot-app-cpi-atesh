import { axiosConfig } from "./config/axiosConfig";
import axios from "axios";


export const userAPI = {
    signUp: async (data) => {
        return (await axios.post('http://127.0.0.1:8000/register', data));
    },
    signIn: async (data) => {
        return (await axios.post('http://127.0.0.1:8000/login', data, axiosConfig)).data;
    },
};
