import React from "react";
import { Search } from "lucide-react";

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  setSearchQuery,
}) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      {/* Category Buttons */}
      <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors shrink-0 ${
              selectedCategory === cat
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Mobile Search input */}
      <div className="relative w-full md:hidden">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full pl-9 pr-4 py-2 bg-white rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
      </div>
    </div>
  );
}
