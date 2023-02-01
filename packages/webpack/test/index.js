import CompA from './component-a';
// import CompB1 from './component-b1';
// import CompB2 from './component-b2';
// import CompC from './component-C';

console.log('@head/preset-webpack');

CompA();

// CompB1();

// CompB2();

// CompC();

async function ready() {
  await import(/* webpackChunkName: "head-js-lib-emitter" */'@head.js/lib/emitter-06b5f51f61');

  const AsyncCompA0 = await import(/* webpackChunkName: "async-component-a0" */'./async-component-a0');
  AsyncCompA0.default();

  // const AsyncCompA1 = await import(/* webpackChunkName: "async-component-a1" */'./async-component-a1');
  // AsyncCompA1.default();

  // const AsyncCompA2 = await import(/* webpackChunkName: "async-component-a1" */'./async-component-a2');
  // AsyncCompA2.default();

  // const AsyncCompC = await import(/* webpackChunkName: "async-component-c" */'./async-component-c');
  // AsyncCompC.default();

  // const AsyncCompD = await import(/* webpackChunkName: "async-component-d" */'./async-component-d');
  // AsyncCompD.default();
}

ready();
