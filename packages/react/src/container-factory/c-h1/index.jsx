import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { filter, debounceTime } from 'rxjs';
import { docAtom } from './state';


export default function Container({ c$, xid }) {
  console.log('[Container]', xid);

  const [ doc, setDoc ] = useAtom(docAtom);

  useEffect(() => {
    const s1$ = c$.pipe(
      filter(({ type }) => type === 'docChanged'),
      debounceTime(1000),
    );

    const un1$ = s1$.subscribe(({ payload }) => {
      setDoc(payload);
    });

    return () => un1$.unsubscribe();
  }, [ xid ]);

  return <h1 className="mt-4 mb-4 text-center">Hello {doc}</h1>;
}
