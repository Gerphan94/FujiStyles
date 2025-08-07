import React from 'react';

export default function Card( {data}) {
  console.log('data', data)
  return (
    <div className="max-w-md mx-auto rounded-3xl overflow-hidden  ">
      {/* Image */}
      <img
        src={`/img/img${data.id}.png`}
        alt="Cafe Recipe"
        className="rounded-2xl object-cover w-full h-64"
      />


      {/* Settings Grid */}
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-semibold">
        {data.options && data.options.map((item, idx) => (
          <div
            key={idx}
            className=" rounded-xl p-2 shadow bg-white text-gray-800 z-10 overflow-y-auto select-none"
          >
            <div className="text-sm">{item.parameter}</div>
            <div className="text-[10px] text-gray-500">{item.name}</div>
          </div>
        ))}
      </div>


    </div>
  );
}
