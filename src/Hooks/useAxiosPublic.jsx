import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: 'http://localhost:3000',
    // baseURL: 'https://server-rosy-nine.vercel.app',
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;