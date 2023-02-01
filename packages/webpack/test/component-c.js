import $get from '@head/http';

export default async function CompC() {
  const { data } = await $get('https://httpbin.org/get');
  console.log(data);
}