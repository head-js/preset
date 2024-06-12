import React from 'react';
import ContainerFactory from '../container-factory/ContainerFactory';


function LayoutTop({ p$, containers }) {
  return <>
    {containers.map(c => <ContainerFactory p$={p$} key={c.xid} name={c.factory.name} xid={c.xid} on={c.on} />)}
  </>;
}


export default function Page({ p$, top, bottom }) {
  // console.log('[PageFactory: p-landing-page]', top, bottom);

  return <>
    <LayoutTop p$={p$} containers={top} />
  </>;
}
