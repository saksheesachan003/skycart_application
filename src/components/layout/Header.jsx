import React, { useEffect, useState } from "react";
import { ShoppingBag, Search, LogOut, X } from "lucide-react";
import Logo from "./Logo";

export default function Header({
  userName,
  cartCount,
  onOpenCart,
  onLogout,
  searchQuery,
  setSearchQuery,
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-20 transition-all duration-300 ${
        scrolled
          ? "bg-white/75 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)] border-b border-white/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        <Logo size={38} />

        {/* Search Desktop */}
        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 transition-colors group-focus-within:text-indigo-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for jackets, headphones..."
              className="w-full pl-11 pr-10 py-2.5 bg-white/80 rounded-full border border-slate-200 text-sm shadow-sm placeholder:text-slate-400 focus:outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-500/15 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 animate-fade-in"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-white/80 border border-slate-200 shadow-sm">
            <span className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-400 to-purple-500 text-white text-xs font-bold flex items-center justify-center uppercase">
              {userName?.[0] ?? "?"}
            </span>
            <span className="text-sm font-semibold text-slate-700 max-w-[8rem] truncate capitalize">
              {userName}
            </span>
          </div>

          <button
            onClick={onOpenCart}
            className="relative p-2.5 text-slate-700 bg-white/80 border border-slate-200 shadow-sm hover:text-indigo-600 hover:border-indigo-200 hover:-translate-y-0.5 rounded-full transition-all"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span
                key={cartCount}
                className="absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-md ring-2 ring-white animate-pop"
              >
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={onLogout}
            className="p-2.5 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-colors"
            title="Logout"
            aria-label="Logout"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
