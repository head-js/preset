import isOdd from 'is-odd';


export default function CompC() {
  const res = isOdd('42');
  console.log('[app-a/component-c]', res);
}
