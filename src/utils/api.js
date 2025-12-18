import axios from "axios";

const API = axios.create({
  baseURL: "https://legalhub-api.onrender.com/api",   // change when deployed
});

export default API;
