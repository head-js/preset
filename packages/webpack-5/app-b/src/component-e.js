import isNumber from 'is-number';


export default function CompE() {
  const res = isNumber('42');
  console.log('[app-b/component-e]', res);
}
