import React from 'react';

export default function Card() {
  return (
    <div className="max-w-md mx-auto rounded-3xl overflow-hidden  ">
      {/* Image */}
      <img
        src="/img/img1.png" // Put your image here
        alt="Cafe Recipe"
        className="rounded-2xl object-cover w-full h-64"
      />


      {/* Settings Grid */}
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-semibold">
        {[
          { title: 'CLASSIC CHROME', subtitle: 'Film simulations' },
          { title: 'AUTO', subtitle: 'Red: +2 Blue: +1' },
          { title: 'Weak Small', subtitle: 'Grain Effect' },
          { title: 'Off', subtitle: 'Color Effect' },
          { title: 'Off', subtitle: 'Color FX Blue' },
          { title: 'DR200', subtitle: 'Dynamic Range' },
          { title: '-1.5', subtitle: 'Highlight' },
          { title: '+1.0', subtitle: 'Shadow' },
          { title: '+1', subtitle: 'Color' },
          { title: '+2', subtitle: 'Sharpness' },
          { title: '-3', subtitle: 'ISO Denoise' },
          { title: '0', subtitle: 'Clarity' },
        ].map((item, idx) => (
          <div
            key={idx}
            className=" rounded-xl p-2 shadow bg-white text-gray-800 z-10 overflow-y-auto select-none"
          >
            <div className="text-sm">{item.title}</div>
            <div className="text-[10px] text-gray-500">{item.subtitle}</div>
          </div>
        ))}
      </div>


    </div>
  );
}
