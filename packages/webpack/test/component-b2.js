import get from './utils-get';

export default async function CompB2() {
  const { data } = await get();
  console.log(data);
}