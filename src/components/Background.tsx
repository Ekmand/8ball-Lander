import React from 'react';

export function Background() {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[150vh] h-[150vh] rounded-full border-2 border-purple-500/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-[140vh] h-[140vh] rounded-full border border-purple-500/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-[130vh] h-[130vh] rounded-full border border-purple-500/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-transparent to-transparent pointer-events-none" />
    </>
  );
}