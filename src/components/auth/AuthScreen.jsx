import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function AuthScreen({ onLogin }) {
  const [authMode, setAuthMode] = useState("login"); // 'login' | 'signup'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authMode === "signup" && !name) return;
    if (!email || !password) return;

    onLogin({
      name: authMode === "signup" ? name : email.split("@")[0],
      email: email,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-8 text-white text-center">
          <h1 className="text-3xl font-bold tracking-tight">SkyCart</h1>
          <p className="text-sky-100 text-sm mt-1">
            {authMode === "login"
              ? "Welcome back! Please login to continue."
              : "Create an account to start shopping."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          {authMode === "signup" && (
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>{authMode === "login" ? "Sign In" : "Create Account"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="text-center mt-6 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() =>
                setAuthMode(authMode === "login" ? "signup" : "login")
              }
              className="text-sm text-sky-600 hover:text-sky-700 font-medium"
            >
              {authMode === "login"
                ? "Don't have an account? Sign up"
                : "Already have an account? Sign in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
