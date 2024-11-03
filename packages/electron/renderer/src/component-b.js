import isNumber from 'is-number';


export default function CompB() {
  const res = isNumber('42');
  console.log('[component-b]', res);
}
