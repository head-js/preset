import isNumber from 'is-number';


export default function AsyncCompB() {
  const res = isNumber('42');
  console.log('[app-b/async-component-b]', res);
}
