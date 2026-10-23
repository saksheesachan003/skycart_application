import React from "react";
import { CheckCircle2, X } from "lucide-react";

export default function Toast({ toast, onViewCart, onDismiss }) {
  if (!toast) return null;
  const { product } = toast;

  return (
    <div
      key={toast.key}
      role="status"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 z-50 w-[calc(100%-2rem)] max-w-sm animate-fade-up"
    >
      <div className="relative overflow-hidden flex items-center gap-3 p-3 pr-2 rounded-2xl bg-slate-900/95 backdrop-blur text-white shadow-2xl shadow-slate-900/30 ring-1 ring-white/10">
        <img
          src={product.image}
          alt=""
          className="w-12 h-12 rounded-xl object-cover shrink-0"
        />
        <div className="flex-1 min-w-0">
          <p className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" /> Added to cart
          </p>
          <p className="text-sm font-medium truncate">{product.name}</p>
        </div>
        <button
          onClick={() => {
            onViewCart();
            onDismiss();
          }}
          className="text-xs font-semibold px-3 py-2 rounded-full bg-white text-slate-900 hover:bg-indigo-50 transition-colors shrink-0"
        >
          View cart
        </button>
        <button
          onClick={onDismiss}
          className="p-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
        {/* Countdown bar */}
        <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 animate-countdown" />
      </div>
    </div>
  );
}
