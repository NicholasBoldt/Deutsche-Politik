const BASE_URL = '/api/';

function getChancellor() {
    return fetch(BASE_URL + 'chancellor', {
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'}
    })
    .then((res) => res.json());
}


export default {
    getChancellor,
  }