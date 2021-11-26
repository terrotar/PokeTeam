import axios from "axios";


const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
        "Access-Control-Allow-Origin": "http://127.0.0.1:8000"
    }
});


export default api;