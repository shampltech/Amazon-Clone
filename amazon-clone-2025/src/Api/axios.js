import axios from 'axios'

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-83faf/us-central1/api",
  baseURL: "https://amazon-api-2-fbj9.onrender.com",
});

export {axiosInstance}




