import React from "react";
import { Search, ArrowUpDown, ChevronDown } from "lucide-react";

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name", label: "Name: A–Z" },
];

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  setSearchQuery,
  sortBy,
  onSortChange,
  resultCount,
}) {
  return (
    <div
      id="products"
      className="scroll-mt-24 mb-8 space-y-5 animate-fade-up"
      style={{ animationDelay: "120ms" }}
    >
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">
            Shop the collection
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Handpicked essentials, updated every week.
          </p>
        </div>
        <p className="text-sm text-slate-500">
          Showing{" "}
          <span key={resultCount} className="inline-block font-bold text-slate-900 animate-pop">
            {resultCount}
          </span>{" "}
          {resultCount === 1 ? "product" : "products"}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Category Buttons */}
        <div className="flex gap-1 p-1 bg-white rounded-full border border-slate-200 shadow-sm overflow-x-auto no-scrollbar max-w-full w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              aria-pressed={selectedCategory === cat}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 shrink-0 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-indigo-500/30"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort */}
        <label className="relative flex items-center w-full sm:w-auto">
          <span className="sr-only">Sort products</span>
          <ArrowUpDown className="pointer-events-none absolute left-4 w-4 h-4 text-slate-400" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="appearance-none w-full sm:w-auto cursor-pointer pl-10 pr-10 py-2.5 bg-white rounded-full border border-slate-200 shadow-sm text-sm font-semibold text-slate-700 hover:border-indigo-200 focus:outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-500/15 transition-all"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 w-4 h-4 text-slate-400" />
        </label>
      </div>

      {/* Mobile Search input */}
      <div className="relative w-full md:hidden">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full pl-11 pr-4 py-3 bg-white rounded-full border border-slate-200 text-sm shadow-sm focus:outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-500/15 transition-all"
        />
      </div>
    </div>
  );
}
