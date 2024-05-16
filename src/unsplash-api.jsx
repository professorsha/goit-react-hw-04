// src/articles-api.js
import axios from "axios";

axios.defaults.baseURL="https://api.unsplash.com/";

const API_KEY = "kAC5N1ugVhBQNEKoK7GlGSSH_wSZ5q-3XGJiB6o26EU";

export const getImages = async (topic) => {
      const response = await axios.get(`/search/photos?client_id=${API_KEY}&page=1&query=${topic}`);
    return response.data.results;
};