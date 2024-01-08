import axios from 'axios';

export default async function get(query) {
  console.log(query);
  const data = await axios.get('https://httpbin.org/get');
  return data;
}
