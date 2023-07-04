import get from './utils-get';

export default async function AsyncCompC() {
  const { data } = await get();
  console.log(data);
}