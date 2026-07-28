import React from "react";
import { ShoppingCart, ShieldCheck, X } from "lucide-react";
import CartItem from "./CartItem";

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemove,
  totalItems,
  totalPrice,
}) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-30 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Slide-out Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-sky-600" />
            <h3 className="font-bold text-slate-800 text-lg">Your Cart</h3>
            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">
              {totalItems} items
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-md"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 divide-y divide-slate-100">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-2">
              <ShoppingCart className="w-12 h-12 stroke-1" />
              <p className="text-sm font-medium">Your cart is empty</p>
            </div>
          ) : (
            cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemove}
              />
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-4">
            <div className="flex justify-between items-center text-slate-800 font-bold text-lg">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={() => alert("Order Placed Successfully!")}
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-5 h-5" />
              <span>Checkout Now</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
