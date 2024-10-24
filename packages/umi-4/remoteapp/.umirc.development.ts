import { defineConfig } from '@umijs/max';
import { name as wmfName } from './package.json';


const shared = {
  react: {
    singleton: true,
    eager: true,
    requiredVersion: '18.2.0',
  },
  'react-dom': {
    singleton: true,
    eager: true,
    requiredVersion: '18.2.0',
  },
};


export default defineConfig({
  publicPath: 'http://127.0.0.1:3001/remoteapp/rsrc/dist/',

  mfsu: {
    strategy: 'eager',
    mfName: `mf_${wmfName}`,
    remoteName: wmfName,
    shared,
  },
  mf: {
    name: wmfName,
    shared,
  },
});
