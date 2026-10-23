import React, { useState } from "react";
import { ArrowRight, Lock, Mail, User, Truck, ShieldCheck, Sparkles, Eye, EyeOff } from "lucide-react";
import Logo from "../layout/Logo";

const PERKS = [
  { icon: Truck, text: "Free shipping on orders over $50" },
  { icon: ShieldCheck, text: "Secure checkout, every time" },
  { icon: Sparkles, text: "Fresh arrivals every week" },
];

function Field({ icon, label, trailing, ...inputProps }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
        {label}
      </span>
      <span className="relative block group">
        {React.createElement(icon, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 transition-colors group-focus-within:text-indigo-500" })}
        <input
          required
          {...inputProps}
          className={`w-full pl-10 ${trailing ? "pr-11" : "pr-4"} py-3 rounded-xl border border-slate-200 bg-slate-50/60 text-sm placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/15 transition-all`}
        />
        {trailing}
      </span>
    </label>
  );
}

export default function AuthScreen({ onLogin }) {
  const [authMode, setAuthMode] = useState("login"); // 'login' | 'signup'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isLogin = authMode === "login";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && !name) return;
    if (!email || !password) return;

    onLogin({
      name: isLogin ? email.split("@")[0] : name,
      email: email,
    });
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white">
      {/* Brand panel */}
      <div className="relative hidden lg:flex flex-col justify-between overflow-hidden p-12 text-white bg-[linear-gradient(135deg,#0ea5e9,#6366f1,#a855f7)] bg-[length:200%_200%] animate-gradient">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/15 blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-fuchsia-400/30 blur-3xl animate-float-slow" />

        <div className="relative animate-fade-up">
          <Logo size={44} light />
        </div>

        <div className="relative space-y-6 max-w-md">
          <h2
            className="text-5xl font-extrabold leading-tight tracking-tight animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            Shopping that feels <span className="text-sky-100 italic">sky-high.</span>
          </h2>
          <ul className="space-y-3">
            {PERKS.map((perk, i) => (
              <li
                key={perk.text}
                className="flex items-center gap-3 text-white/90 animate-fade-up"
                style={{ animationDelay: `${240 + i * 100}ms` }}
              >
                <span className="w-9 h-9 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center ring-1 ring-white/25">
                  <perk.icon className="w-4 h-4" />
                </span>
                {perk.text}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative text-sm text-white/70">
          © {new Date().getFullYear()} SkyCart. All rights reserved.
        </p>
      </div>

      {/* Form panel */}
      <div className="relative flex items-center justify-center p-6 sm:p-12 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-indigo-200/50 blur-3xl lg:hidden animate-float" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-sky-200/60 blur-3xl lg:hidden animate-float-slow" />

        <div key={authMode} className="relative w-full max-w-sm animate-fade-up">
          <div className="lg:hidden mb-10 flex justify-center">
            <Logo size={44} />
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            {isLogin ? "Welcome back" : "Create account"}
          </h1>
          <p className="text-slate-500 mt-2 mb-8">
            {isLogin
              ? "Sign in to continue your shopping journey."
              : "Join SkyCart and start shopping in seconds."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <Field
                icon={User}
                label="Full Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
              />
            )}
            <Field
              icon={Mail}
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
            />
            <Field
              icon={Lock}
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              trailing={
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              }
            />

            <button
              type="submit"
              className="group relative w-full mt-2 overflow-hidden bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white font-semibold py-3.5 px-4 rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2"
            >
              <span className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              <span className="relative">{isLogin ? "Sign In" : "Create Account"}</span>
              <ArrowRight className="relative w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 mt-8">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setAuthMode(isLogin ? "signup" : "login")}
              className="font-semibold text-indigo-600 hover:text-indigo-700 underline-offset-4 hover:underline"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
