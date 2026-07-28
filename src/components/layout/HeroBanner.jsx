import React from "react";

export default function HeroBanner() {
  return (
    <div className="bg-gradient-to-r from-sky-600 to-indigo-600 rounded-2xl p-8 mb-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-3xl font-extrabold tracking-tight">
          New Arrivals 2026
        </h2>
        <p className="text-sky-100 max-w-md">
          Discover high-quality apparel, accessories, and electronics designed
          for your everyday lifestyle.
        </p>
      </div>
      <button className="bg-white text-sky-700 font-semibold px-6 py-2.5 rounded-full shadow hover:bg-sky-50 transition-colors shrink-0">
        Explore Deals
      </button>
    </div>
  );
}
