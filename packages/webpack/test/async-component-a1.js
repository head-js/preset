import _ from 'lodash';

export default function AsyncCompA1() {
  const data = ['a1', 'a2', 'a3'];
  _.each(data, (d) => {
    console.log(d);
  });
}