import React from "react";
import { Plus, Minus, Trash2 } from "lucide-react";

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="py-4 flex gap-4 items-center">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-lg bg-slate-100 shrink-0"
      />
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-slate-800 text-sm truncate">
          {item.name}
        </h4>
        <p className="text-sky-600 font-semibold text-sm mt-0.5">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => onUpdateQuantity(item.id, -1)}
            className="p-1 border border-slate-200 rounded hover:bg-slate-100 text-slate-600"
          >
            <Minus className="w-3 h-3" />
          </button>
          <span className="text-xs font-semibold w-4 text-center">
            {item.quantity}
          </span>
          <button
            onClick={() => onUpdateQuantity(item.id, 1)}
            className="p-1 border border-slate-200 rounded hover:bg-slate-100 text-slate-600"
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="text-slate-400 hover:text-red-500 p-2 transition-colors"
        title="Remove item"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
