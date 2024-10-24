import axios from 'axios';


export default async function get() {
  const data = await axios.get('https://httpbin.org/get');
  return data;
}
