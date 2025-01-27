import React from 'react';

function BannerAd() {
  return (
    <div className="relative bg-gray-800 text-white h-24 flex items-center justify-between px-6 shadow-md">
      <div className="flex items-center space-x-4">
        <h2 className="text-lg font-bold">ICJ24 BANNER SAMPLE</h2>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-600 transition">
          PURCHASE NOW
        </button>
        <div className="text-sm text-gray-300">
          <p>ADDSPACE</p>
          <p>728 X 90</p>
        </div>
      </div>
    </div>
  );
}

export default BannerAd;
