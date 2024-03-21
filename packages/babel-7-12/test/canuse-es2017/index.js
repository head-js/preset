console.log('test.js');

// es2015, es6
(function () {
  function multiply(a, b = 1) {
    return a * b;
  }
  const res = multiply(3);
  console.log(res);
}());

// es2016, es6.1
(function () {
  const arr = [1, 2, 3];
  const res = arr.includes(4);
  console.log(res);
}());

(function () {
  const a = 2;
  const b = 3;
  const res = a ** b;
  console.log(res);
}());

// es2017, es6+
(function () {
  const a = '3';
  const res = a.padStart(8, 0);
  console.log(res);
}())

(function () {
  function f(a, b, c,) {
    console.log(a, b, c);
  }
}());

// misc
(function () {
  const encoded = btoa('Hello World');
  const decoded = atob(encoded);
}());

(function () {
  const controller = new AbortController();
  const signal = controller.signal;
  console.log(signal.aborted);
  controller.abort('Hello World');
  console.log(signal.aborted);
  console.log(signal.reason);
}());

// todo
(function () {
  const m = new Map();
  m.set('k1', 'v1');
  m.set('k2', 'v2');
  console.log(m.entries());

  const s = new Set();
  s.add(1);
  s.add(2);
  s.add(2);
  console.log(s.entries());
}());
