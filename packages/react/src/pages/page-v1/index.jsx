import React from 'react';
import PageFactory from '../../page-factory/PageFactory';


const CURRENT_PAGE = {
  factory: {
    name: 'p-landingpage',
    version: '1.0.0',
  },
  template: {
    name: '',
    version: '1.0.0',
  },
  layouts: {
    top: [
      { xid: 'x01', factory: { name: 'c-h1', version: '1.0.0' },
        on: [
          [ 'x02', 'DOC_CHANGED', '', 'docChanged' ],
        ],
      },
      { xid: 'x02', factory: { name: 'c-form', version: '1.0.0' }, on: [] },
    ],
    bottom: [],
  }
};


export default function PageV1() {
  console.log('[PageV1]');

  const { factory, layouts } = CURRENT_PAGE;

  return <PageFactory name={factory.name} layouts={layouts} />;
}
