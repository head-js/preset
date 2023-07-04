import get from './utils-get';

export default async function CompB() {
  const { data } = await get();
  console.log(data);
}