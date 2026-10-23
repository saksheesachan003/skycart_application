import React from "react";
import { ArrowRight, Sparkles, Truck, RotateCcw, ShieldCheck } from "lucide-react";

const HIGHLIGHTS = [
  { icon: Truck, label: "Free shipping" },
  { icon: RotateCcw, label: "30-day returns" },
  { icon: ShieldCheck, label: "Secure payment" },
];

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-3xl mb-10 text-white shadow-2xl shadow-indigo-500/25 bg-[linear-gradient(120deg,#0ea5e9,#6366f1,#a855f7,#6366f1)] bg-[length:250%_250%] animate-gradient">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-10 w-72 h-72 rounded-full bg-white/20 blur-3xl animate-float" />
      <div className="absolute -bottom-24 left-1/3 w-80 h-80 rounded-full bg-fuchsia-400/30 blur-3xl animate-float-slow" />
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom_left,black,transparent_70%)]" />

      <div className="relative p-8 sm:p-12 animate-fade-up flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="space-y-5 text-center md:text-left max-w-xl">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest bg-white/15 backdrop-blur px-3 py-1.5 rounded-full ring-1 ring-white/30">
            <Sparkles className="w-3.5 h-3.5" /> New Arrivals 2026
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Elevate your everyday <br className="hidden sm:block" />
            with <span className="text-sky-100 italic">SkyCart</span>
          </h2>
          <p className="text-white/80 text-base sm:text-lg">
            Discover high-quality apparel, accessories, and electronics designed
            for your everyday lifestyle.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Explore Deals
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <span className="text-sm text-white/80">
              Up to <strong className="text-white">40% off</strong> this week
            </span>
          </div>
        </div>

        {/* Floating glass card */}
        <div className="hidden md:block shrink-0 animate-float">
          <div className="w-64 rounded-3xl bg-white/15 backdrop-blur-xl ring-1 ring-white/30 p-5 shadow-2xl rotate-3">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=500"
              alt="Featured headphones"
              className="w-full aspect-square object-cover rounded-2xl"
            />
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-white/70">Featured</p>
                <p className="font-semibold">Noise-Canceling</p>
              </div>
              <span className="bg-white text-indigo-700 text-sm font-bold px-3 py-1 rounded-full">
                $199
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/20 bg-white/5 backdrop-blur-sm px-8 sm:px-12 py-4 flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2 text-sm text-white/90">
        {HIGHLIGHTS.map((item) => (
          <span key={item.label} className="inline-flex items-center gap-2">
            <item.icon className="w-4 h-4" /> {item.label}
          </span>
        ))}
      </div>
    </section>
  );
}
