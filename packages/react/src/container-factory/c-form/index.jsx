import React, { useCallback } from 'react';


export default function Container({ c$, xid }) {
  console.log('[Container]', xid);

  const onChange = useCallback((e) => {
    c$.next({ type: 'DOC_CHANGED', payload: e.target.value });
  }, []);

  return (
    <form>
      <div className="form-group text-center">
        <input type="text" className="form-input px-4 py-3 rounded-full" onChange={onChange} />
      </div>
    </form>
  );
}
