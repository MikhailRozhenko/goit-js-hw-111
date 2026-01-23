import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = {
    key: '51880521-c3154ecfaa100b1983789291c',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get('', { params }).then(res => res.data);
}
