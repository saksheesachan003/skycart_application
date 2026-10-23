import React, { useCallback, useEffect, useState } from "react";
import { PRODUCTS, CATEGORIES } from "./data/products";
import AuthScreen from "./components/auth/AuthScreen";
import Header from "./components/layout/Header";
import HeroBanner from "./components/layout/HeroBanner";
import Logo from "./components/layout/Logo";
import CategoryFilter from "./components/products/CategoryFilter";
import ProductGrid from "./components/products/ProductGrid";
import CartDrawer from "./components/cart/CartDrawer";
import Toast from "./components/ui/Toast";
import OrderSuccess from "./components/ui/OrderSuccess";
import BackToTop from "./components/ui/BackToTop";

const SORTERS = {
  featured: () => 0,
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
  name: (a, b) => a.name.localeCompare(b.name),
};

export default function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [toast, setToast] = useState(null);
  const [order, setOrder] = useState(null);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2400);
    return () => clearTimeout(t);
  }, [toast]);

  // Authentication
  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    setCart([]);
  };

  // Cart operations
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setToast({ key: Date.now(), product });
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean),
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleCheckout = () => {
    setOrder({ items: totalCartItems, total: totalCartPrice });
    setCart([]);
    setIsCartOpen(false);
  };

  const query = searchQuery.trim().toLowerCase();
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query);
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort(SORTERS[sortBy]);

  if (!user) {
    return <AuthScreen onLogin={handleLogin} />;
  }

  return (
    <div className="relative min-h-screen bg-slate-50 flex flex-col overflow-x-clip">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] -z-0 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(56,189,248,0.18),transparent),radial-gradient(50%_50%_at_90%_10%,rgba(168,85,247,0.15),transparent)]" />

      <Header
        userName={user.name}
        cartCount={totalCartItems}
        onOpenCart={openCart}
        onLogout={handleLogout}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main className="relative flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <HeroBanner />
        <CategoryFilter
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
          resultCount={filteredProducts.length}
        />
        <ProductGrid products={filteredProducts} onAddToCart={addToCart} />
      </main>

      <footer className="relative mt-16 border-t border-slate-200/70 bg-white/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <Logo size={28} />
          <p>© {new Date().getFullYear()} SkyCart. Crafted with care.</p>
        </div>
      </footer>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={closeCart}
        onCheckout={handleCheckout}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        totalItems={totalCartItems}
        totalPrice={totalCartPrice}
      />

      <Toast toast={toast} onViewCart={openCart} onDismiss={() => setToast(null)} />
      <OrderSuccess order={order} onClose={() => setOrder(null)} />
      <BackToTop />
    </div>
  );
}
