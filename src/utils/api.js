import axios from "axios";

const API = axios.create({
  baseURL: "https://legalhub-api.onrender.com/api",
});

export default API;
