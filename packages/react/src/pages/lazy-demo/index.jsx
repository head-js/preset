import React from 'react';


export function Component() {
  const now = new Date().toLocaleString();

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Lazy Route Module</h2>
      <div className="mt-2">Loaded at: {now}</div>
    </div>
  );
}
