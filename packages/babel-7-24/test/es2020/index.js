// es2020
(function () {
  console.log(null ?? 'foo');
  console.log(false ?? 'foo');
}());

(function () {
  const street = user?.address?.street;
}());

// TODO: BigInt

(function () {
  Promise.allSettled([
    Promise.resolve(33),
    Promise.reject(new Error("an error")),
  ]).then((values) => console.log(values));
}());
