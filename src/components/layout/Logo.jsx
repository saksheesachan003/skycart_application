import React from "react";

export default function Logo({ size = 36, showText = true, light = false }) {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <img
        src="/skycart.svg"
        alt="SkyCart logo"
        width={size}
        height={size}
        className="drop-shadow-md transition-transform duration-500 hover:rotate-[-8deg] hover:scale-110"
      />
      {showText && (
        <span
          className={`text-xl font-extrabold tracking-tight ${
            light
              ? "text-white"
              : "bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
          }`}
        >
          SkyCart
        </span>
      )}
    </div>
  );
}
