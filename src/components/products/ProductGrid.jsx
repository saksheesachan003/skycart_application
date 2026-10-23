import React from "react";
import { SearchX } from "lucide-react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products, onAddToCart }) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 animate-fade-up">
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-500 flex items-center justify-center mb-4">
          <SearchX className="w-8 h-8" />
        </div>
        <p className="font-semibold text-slate-800">No products found</p>
        <p className="text-sm text-slate-500 mt-1">
          Try a different search or category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          index={index}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
