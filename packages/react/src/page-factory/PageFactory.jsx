import React, { Suspense } from 'react';
import { lazy } from '@loadable/component'
import useConstant from 'use-constant';
import { BehaviorSubject } from 'rxjs';


const Page = lazy(({ name }) => import(`./${name}`), { cacheKey: ({ name }) => name });


export default function PageFactory({ name, layouts }) {
  // console.log('[PageFactory]', layouts);
  const p$ = useConstant(() => new BehaviorSubject({ xid: 'p$', type: 'CREATED', payload: {} }));

  /* */
  window.head = window.head || {};
  window.head.p$ = p$;
  /* */

  return (
    <Suspense fallback={<div>lazy loading ...</div>}>
      <Page p$={p$} name={name} {...layouts} />
    </Suspense>
  );
}
