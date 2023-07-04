import CompB from './component-b';
import CompD from './component-d';


console.log('app-b.bootstrap');


CompB();

CompD();


async function ready() {
  const CompA = await import('page-factory/component-a');
  CompA.default();

  const CompC = await import('page-factory/component-c');
  CompC.default();

  const AsyncCompA = await import(/* webpackChunkName: "async-component-a" */ './async-component-a');
  AsyncCompA.default();

  const AsyncCompF = await import(/* webpackChunkName: "async-component-f" */ './async-component-f');
  AsyncCompF.default();
}

ready();
