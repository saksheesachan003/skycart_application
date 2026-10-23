import React, { useEffect, useState } from "react";
import { Plus, Check, Heart } from "lucide-react";

export default function ProductCard({ product, onAddToCart, index = 0 }) {
  const [added, setAdded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const t = setTimeout(() => setAdded(false), 1400);
    return () => clearTimeout(t);
  }, [added]);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
  };

  return (
    <div
      className="group bg-white rounded-3xl p-3 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-500 flex flex-col animate-fade-up"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div className="aspect-square bg-slate-100 overflow-hidden relative rounded-2xl">
        {!loaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 animate-skeleton" />
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-[scale,opacity] duration-700 ease-out group-hover:scale-110 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-slate-700 shadow-sm">
          {product.category}
        </span>
        <button
          onClick={() => setLiked((v) => !v)}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-sm shadow-sm transition-all hover:scale-110 ${
            liked ? "bg-rose-500 text-white" : "bg-white/90 text-slate-600 hover:text-rose-500"
          }`}
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart key={String(liked)} className={`w-4 h-4 ${liked ? "fill-current animate-pop" : ""}`} />
        </button>
      </div>

      <div className="px-2 pt-4 pb-2 flex-1 flex flex-col justify-between gap-4">
        <h3 className="font-semibold text-slate-800 leading-snug line-clamp-2 group-hover:text-indigo-700 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between gap-3">
          <p className="text-xl font-extrabold text-slate-900">
            <span className="text-sm align-top text-slate-400 font-semibold mr-0.5">$</span>
            {product.price.toFixed(2)}
          </p>
          <button
            onClick={handleAdd}
            className={`relative overflow-hidden text-sm font-semibold pl-3.5 pr-4 py-2.5 rounded-full transition-all duration-300 flex items-center gap-1.5 active:scale-95 ${
              added
                ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                : "bg-slate-900 text-white hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-600 hover:shadow-lg hover:shadow-indigo-500/30"
            }`}
          >
            {added ? (
              <Check key="check" className="w-4 h-4 animate-pop" />
            ) : (
              <Plus className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90" />
            )}
            <span>{added ? "Added" : "Add"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
