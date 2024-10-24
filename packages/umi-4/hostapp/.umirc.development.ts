import { defineConfig } from 'umi';
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
  publicPath: '/homeapp/rsrc/dist/',

  // mfsu: {
  //   strategy: 'eager',
  //   mfName: `mf_${wmfName}`,
  //   remoteName: wmfName,
  //   shared,
  // },
  mfsu: false,
  mf: {
    name: wmfName,
    shared,
    remotes: [
      {
        name: 'wmfremoteapp',
        entry: 'http://127.0.0.1:3001/remoteapp/rsrc/dist/remote.js',
      },
    ],
  },
});
