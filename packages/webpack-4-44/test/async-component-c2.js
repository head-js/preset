import get from './utils-get';

export default async function AsyncCompC2() {
  const { data } = await get({ name: 'async-c2' });
  console.log(data);
}
