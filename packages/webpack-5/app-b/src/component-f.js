import get from './utils-get';


export default async function CompF() {
  console.log('[app-b/component-f]');
  const { data } = await get();
  console.log(data);
}
