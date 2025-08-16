// es2021
(function () {
  Promise.any([
    Promise.resolve(33),
    Promise.reject(new Error("an error")),
  ]).then((values) => console.log(values));
}());

(function () {
  'aabbcc'.replaceAll('b', '.');
}());
