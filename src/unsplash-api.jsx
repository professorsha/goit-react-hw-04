import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

const API_KEY = 'kAC5N1ugVhBQNEKoK7GlGSSH_wSZ5q-3XGJiB6o26EU';

export const getImages = async (topic, currentPage) => {
  const response = await axios.get(`/search/photos?client_id=${API_KEY}`, {
    params: {
      query: topic,
      page: currentPage,
      hitsPerPage: 5,
    },
  });
  return response.data.results;
};
