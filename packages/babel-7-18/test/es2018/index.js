// es2018
(function () {
  const { a, b, ...c } = { a: 1, b: 2, x: 3, y: 4 };
  console.log(a);
  console.log(b);
  console.log(c);
}());
