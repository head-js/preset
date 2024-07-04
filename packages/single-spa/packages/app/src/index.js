import { registerApplication, start } from 'single-spa';


console.log('single-spa.app.start');


function domElementGetter() {
  const rootElement = document.getElementById('root');
  return rootElement;
}


registerApplication(
  'vue',
  () => {
    console.log('vue.js');
    const app = {
      bootstrap: () => Promise.resolve(),
      mount: () => Promise.resolve().then(() => {}),
      unmount: () => Promise.resolve(),
    };
    return Promise.resolve(app);
  },
  (location) => location.pathname.startsWith('/vue'),
);


registerApplication(
  'react',
  () => System.import('react-app'),
  (location) => location.pathname.startsWith('/react'),
  { domElementGetter },
);


start();
