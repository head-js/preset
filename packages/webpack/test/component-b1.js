import get from './utils-get';

export default async function CompB1() {
  const { data } = await get();
  console.log(data);
}