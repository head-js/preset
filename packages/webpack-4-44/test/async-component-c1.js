import get from './utils-get';

export default async function AsyncCompC1() {
  const { data } = await get({ name: 'async-c1' });
  console.log(data);
}
