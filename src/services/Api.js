import axios from 'axios'
export default axios.create({
  baseURL : 'https://dotacion-django-api.herokuapp.com/',
  headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
});