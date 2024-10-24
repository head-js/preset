import isNumber from 'is-number';


export default function CompB() {
  const res = isNumber('42');
  console.log('[app-a/component-b]', res);
}
