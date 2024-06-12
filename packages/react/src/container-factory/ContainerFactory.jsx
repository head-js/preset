import React, { useEffect, Suspense } from 'react';
import { lazy } from '@loadable/component'
import useConstant from 'use-constant';
import { BehaviorSubject, filter } from 'rxjs';


const Container = lazy(({ name }) => import(`./${name}`), { cacheKey: ({ name }) => name });


export default function ContainerFactory({ p$, name, xid, on }) {
  // console.log('[ContainerFactory]', xid, name);

  const c$ = useConstant(() => new BehaviorSubject({ xid, type: 'CREATED', payload: {} }));

  useEffect(() => {
    const un = c$.subscribe(({ type, payload }) => p$.next({ xid, type, payload }));

    const uns = on.map(([ fromXid, fromEvent, toXid, toEvent, transform ]) => {
      const to = toXid || xid;
      const evt = toEvent || fromEvent;
      // console.log(fromXid, fromEvent, to, evt);

      const s$ = p$.pipe(
        filter(({ xid, type }) => xid === fromXid && type === fromEvent),
      );

      const un = s$.subscribe(({ type, payload }) => c$.next({ type: toEvent, payload }));
      return un;
    });

    return () => {
      un.unsubscribe();
      uns.forEach((un) => un.unsubscribe());
    };
  }, []);

  return (
    <Suspense fallback={<div>lazy loading ...</div>}>
      <Container c$={c$} name={name} key={xid} xid={xid} on={on} />
    </Suspense>
  );
}
