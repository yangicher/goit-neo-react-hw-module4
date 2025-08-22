import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common["Authorization"] = `Client-ID _zZSAGwGtp6h-pb56M0wokbZbDcc1qRAhmzx7uxNo_A`;

export const getImages = async (query, page) => {
  const res = await axios.get(
    `/search/photos/?query=${query}&page=${page}&per_page=10`
  );

  return res;
};