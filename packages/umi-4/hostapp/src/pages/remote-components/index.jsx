import React, { Suspense } from 'react';


const Version = React.lazy(() => import('wmfremoteapp/Version'));


export default function Page() {
  return <>
    <h1>Remote Registry</h1>
    <Suspense fallback={<div>lazy loading ...</div>}>
      <Version />
    </Suspense>
  </>;
}
