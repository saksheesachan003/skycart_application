import React, { useEffect } from "react";
import { Check, PartyPopper } from "lucide-react";

const CONFETTI_COLORS = ["#38bdf8", "#6366f1", "#a855f7", "#f472b6", "#facc15", "#34d399"];

export default function OrderSuccess({ order, onClose }) {
  useEffect(() => {
    if (!order) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [order, onClose]);

  if (!order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-success-title"
        className="relative w-full max-w-sm bg-white rounded-3xl p-8 text-center shadow-2xl animate-scale-in overflow-hidden"
      >
        {/* Confetti */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full">
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className="absolute top-0 w-2 h-3 rounded-sm animate-confetti"
              style={{
                left: `${(i * 37) % 100}%`,
                background: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
                animationDelay: `${(i % 6) * 90}ms`,
                animationDuration: `${1.4 + (i % 4) * 0.25}s`,
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto w-20 h-20">
          <span className="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping" />
          <span className="relative w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/40">
            <Check className="w-10 h-10 animate-pop" strokeWidth={3} />
          </span>
        </div>

        <h2
          id="order-success-title"
          className="relative mt-6 text-2xl font-extrabold tracking-tight text-slate-900 flex items-center justify-center gap-2"
        >
          Order placed! <PartyPopper className="w-6 h-6 text-amber-500" />
        </h2>
        <p className="relative mt-2 text-slate-500">
          Thanks for shopping with SkyCart. Your {order.items}{" "}
          {order.items === 1 ? "item is" : "items are"} on the way.
        </p>

        <div className="relative mt-6 rounded-2xl bg-slate-50 border border-slate-100 p-4 flex justify-between text-sm">
          <span className="text-slate-500">Total paid</span>
          <span className="font-extrabold text-slate-900">${order.total.toFixed(2)}</span>
        </div>

        <button
          onClick={onClose}
          autoFocus
          className="relative mt-6 w-full bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white font-semibold py-3.5 rounded-2xl shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all"
        >
          Continue shopping
        </button>
      </div>
    </div>
  );
}
