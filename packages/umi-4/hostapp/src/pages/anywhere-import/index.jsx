import React, { Suspense } from 'react';
import { rawMfImport } from '@umijs/max';


function resolveimport(name) {
  const [ remoteName, moduleName ] = name.split('/');
  return {
    entry: 'http://127.0.0.1:3001/remoteapp/rsrc/dist/remote.js',
    remoteName,
    moduleName,
  };
}


const Breadcrumb = React.lazy(() => rawMfImport(resolveimport('wmfremoteapp/Breadcrumb')));
const Banner = React.lazy(() => rawMfImport(resolveimport('wmfremoteapp/Banner')));
const Version = React.lazy(() => rawMfImport(resolveimport('wmfremoteapp/Version')));


export default function Page() {
  return <>
    <h1>Dynamic Import</h1>
    <Suspense fallback={<div>lazy loading ...</div>}>
      <Breadcrumb />
      <Banner />
      <Version />
    </Suspense>
  </>;
}
