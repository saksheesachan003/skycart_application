import React from "react";
import { Plus, Minus, Trash2 } from "lucide-react";

export default function CartItem({ item, onUpdateQuantity, onRemove, index = 0 }) {
  return (
    <div
      className="group p-3 flex gap-4 items-center rounded-2xl hover:bg-slate-50 transition-colors animate-slide-in"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-xl bg-slate-100 shrink-0 shadow-sm"
      />
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-slate-800 text-sm truncate">
          {item.name}
        </h4>
        <p className="text-xs text-slate-400 mt-0.5">
          ${item.price.toFixed(2)} each
        </p>
        <div className="flex items-center justify-between mt-2.5">
          <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-full p-0.5 shadow-sm">
            <button
              onClick={() => onUpdateQuantity(item.id, -1)}
              className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-slate-100 text-slate-600 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span key={item.quantity} className="text-sm font-bold w-6 text-center animate-pop">
              {item.quantity}
            </span>
            <button
              onClick={() => onUpdateQuantity(item.id, 1)}
              className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-slate-100 text-slate-600 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <p className="font-bold text-slate-900 text-sm">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="self-start text-slate-300 hover:text-rose-500 hover:bg-rose-50 p-2 rounded-full transition-colors"
        title="Remove item"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
