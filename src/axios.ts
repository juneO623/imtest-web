import axios from "axios";

export const customAxios = axios.create({
  baseURL: "http://10.80.162.229:3000/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// customAxios.interceptors.request.use(() => {
//   axios.defaults.withCredentials = true;
// });
