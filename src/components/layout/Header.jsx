import React from "react";
import { ShoppingCart, Search, User, LogOut } from "lucide-react";

export default function Header({
  userName,
  cartCount,
  onOpenCart,
  onLogout,
  searchQuery,
  setSearchQuery,
}) {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-sky-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm">
            S
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">
            SkyCart
          </span>
        </div>

        {/* Search Desktop */}
        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-9 pr-4 py-2 bg-slate-100 rounded-full border-none text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <User className="w-4 h-4" />
            <span className="hidden sm:inline font-medium">{userName}</span>
          </div>

          <button
            onClick={onOpenCart}
            className="relative p-2 text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-sky-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={onLogout}
            className="p-2 text-slate-500 hover:text-red-600 hover:bg-slate-100 rounded-full transition-colors"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
