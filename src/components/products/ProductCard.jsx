import React from "react";
import { Plus } from "lucide-react";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      <div className="aspect-square bg-slate-100 overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold px-2.5 py-1 rounded-md text-slate-700">
          {product.category}
        </span>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-slate-800 text-base">
            {product.name}
          </h3>
          <p className="text-sky-600 font-bold text-lg mt-1">
            ${product.price.toFixed(2)}
          </p>
        </div>
        <button
          onClick={() => onAddToCart(product)}
          className="mt-4 w-full bg-slate-900 hover:bg-sky-600 text-white text-sm font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
