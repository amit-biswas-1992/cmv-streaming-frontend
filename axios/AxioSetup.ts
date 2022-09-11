import axios from "axios";




let custom_axios = axios.create({
  baseURL:  `http://192.168.7.13:8041/api/v1`,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
   
  },
  timeout: 5000,
});

export default custom_axios;
