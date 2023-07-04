import _ from 'lodash';

const { emitter } = window.head;

export default function AsyncCompA0() {
  const data = ['a1', 'a2', 'a3'];
  emitter.on('each', (d) => console.log(d));
  _.each(data, emitter.emit('each', data));
}
