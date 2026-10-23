import React, { useEffect } from "react";
import { ShoppingBag, ShieldCheck, X, ArrowRight } from "lucide-react";
import CartItem from "./CartItem";

const FREE_SHIPPING_AT = 50;

export default function CartDrawer({
  isOpen,
  onClose,
  onCheckout,
  cart,
  onUpdateQuantity,
  onRemove,
  totalItems,
  totalPrice,
}) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  const shippingProgress = Math.min(100, (totalPrice / FREE_SHIPPING_AT) * 100);
  const remaining = Math.max(0, FREE_SHIPPING_AT - totalPrice);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-30 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Slide-out Drawer */}
      <aside
        className={`fixed inset-y-0 right-0 sm:inset-y-3 sm:right-3 w-full max-w-md bg-white sm:rounded-3xl shadow-2xl z-40 transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col overflow-hidden ${
          isOpen ? "translate-x-0" : "translate-x-[110%]"
        }`}
        aria-label="Shopping cart"
        inert={!isOpen}
      >
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/30">
              <ShoppingBag className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-extrabold text-slate-900 text-lg leading-tight">Your Cart</h3>
              <p className="text-xs text-slate-500">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 hover:bg-slate-100 p-2 rounded-full transition-all hover:rotate-90"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {cart.length > 0 && (
          <div className="px-5 pt-4">
            <p className="text-xs text-slate-600 mb-2">
              {remaining > 0 ? (
                <>
                  Add <strong>${remaining.toFixed(2)}</strong> more for{" "}
                  <strong className="text-indigo-600">free shipping</strong>
                </>
              ) : (
                <strong className="text-emerald-600">🎉 You've unlocked free shipping!</strong>
              )}
            </p>
            <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 transition-[width] duration-700 ease-out"
                style={{ width: `${shippingProgress}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-3">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-3 px-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-indigo-200 blur-2xl opacity-60" />
                <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-sky-50 to-indigo-100 text-indigo-500 flex items-center justify-center animate-float">
                  <ShoppingBag className="w-9 h-9" />
                </div>
              </div>
              <p className="font-bold text-slate-800 mt-2">Your cart is empty</p>
              <p className="text-sm text-slate-500">Looks like you haven't added anything yet.</p>
              <button
                onClick={onClose}
                className="mt-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1 group"
              >
                Start shopping
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ) : (
            cart.map((item, index) => (
              <CartItem
                key={item.id}
                item={item}
                index={index}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemove}
              />
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-5 border-t border-slate-100 bg-slate-50/80 space-y-3">
            <div className="flex justify-between text-sm text-slate-500">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-slate-500">
              <span>Shipping</span>
              <span>{remaining > 0 ? "Calculated at checkout" : "Free"}</span>
            </div>
            <div className="flex justify-between items-center text-slate-900 font-extrabold text-xl pt-1">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={onCheckout}
              className="group relative w-full overflow-hidden bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white font-semibold py-3.5 rounded-2xl shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              <span className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              <ShieldCheck className="relative w-5 h-5" />
              <span className="relative">Checkout Now</span>
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
