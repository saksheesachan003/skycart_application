import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-24 sm:bottom-6 left-6 z-20 w-11 h-11 rounded-full bg-white text-indigo-600 border border-slate-200 shadow-lg flex items-center justify-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
