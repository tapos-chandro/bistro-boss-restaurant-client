import axios from "axios";


const useAxiosSecure = () => {
    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000/api/v1', // Replace with your API base URL
    })
    
    return axiosSecure
};

export default useAxiosSecure;