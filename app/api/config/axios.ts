import axios from  "axios";


// * create axios instance with custom config 
const api = axios.create({

  baseURL: "http://localhost:1337/api",
  timeout:10000,
  headers: {
    "my-custom-header":"my-custom-header",
    },
    });

    export default api;