import CompA from 'app-a/component-a';
import CompB from 'app-a/component-b';
import CompC from 'app-a/component-c';
import CompD from './component-d';
import CompE from './component-e';
import CompF from './component-f';


console.log('app-b.bootstrap');

CompA();

CompB();

CompC();

CompD();

CompE();

CompF();


async function ready() {
  // FIXME: Module Federation
  // const CompA = await import('app-a/component-a');
  // CompA.default();

  // const CompC = await import('app-a/component-c');
  // CompC.default();

  const AsyncCompA = await import(/* webpackChunkName: "async-component-a" */ './async-component-a');
  AsyncCompA.default();

  const AsyncCompB = await import(/* webpackChunkName: "async-component-b" */ './async-component-b');
  AsyncCompB.default();
}

ready();
