"use client";

import { useState, useEffect } from "react";
import { Lock, Phone, Save, ShieldAlert, CheckCircle, ArrowLeft, ShieldCheck } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function ToChangePage() {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [currentNumber, setCurrentNumber] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch current number once if authorized
  useEffect(() => {
    if (isAuthorized) {
      fetch("/api/whatsapp")
        .then((res) => res.json())
        .then((data) => {
          if (data.number) {
            setCurrentNumber(data.number);
            setNewNumber(data.number);
          }
        })
        .catch(() => {});
    }
  }, [isAuthorized]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;
    setLoading(true);
    setError("");

    // Simple test query to the API to check password validity
    fetch("/api/whatsapp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, checkOnly: true }),
    })
      .then(async (res) => {
        if (res.status === 400 || res.status === 200 || res.status === 500) {
          // A 400, 200, or 500 status (rather than 401 Unauthorized) means password is correct
          setIsAuthorized(true);
        } else {
          setError("Incorrect password. Please try again.");
        }
      })
      .catch(() => {
        setError("Connection error. Try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNumber) return;
    setLoading(true);
    setError("");
    setSuccess(false);

    fetch("/api/whatsapp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, number: newNumber }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (res.ok) {
          setSuccess(true);
          setCurrentNumber(data.number);
          setNewNumber(data.number);
        } else {
          setError(data.error || "Failed to update WhatsApp number.");
        }
      })
      .catch(() => {
        setError("Network error. Try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="pt-32 pb-20 relative flex items-center justify-center min-h-[80vh]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />
      <div className="max-w-md w-full mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-gold mb-6 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to homepage</span>
        </Link>

        {/* Login Mode */}
        {!isAuthorized ? (
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/5 flex flex-col gap-6 shadow-2xl shadow-black/40">
            <div className="text-center flex flex-col items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-gold/10 text-gold border border-gold/20 flex items-center justify-center">
                <Lock className="h-5 w-5" />
              </div>
              <h1 className="font-display font-extrabold text-2xl text-white tracking-tight">
                Admin Authentication
              </h1>
              <p className="text-gray-400 text-xs sm:text-sm">
                Enter the administrator password to change the WhatsApp number.
              </p>
            </div>

            {error && (
              <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs flex items-center gap-2">
                <ShieldAlert className="h-4.5 w-4.5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-gray-300">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold to-yellow-600 hover:from-gold-hover hover:to-yellow-500 text-dark-bg font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-gold/15 transition-all disabled:opacity-55"
              >
                {loading ? "Verifying..." : "Access Admin Panel"}
              </button>
            </form>
          </div>
        ) : (
          /* Change Configuration Mode */
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/5 flex flex-col gap-6 shadow-2xl shadow-black/40">
            <div className="text-center flex flex-col items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h1 className="font-display font-extrabold text-2xl text-white tracking-tight">
                WhatsApp Configuration
              </h1>
              <p className="text-gray-400 text-xs sm:text-sm">
                Modify the global target phone number below.
              </p>
            </div>

            {error && (
              <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs flex items-center gap-2">
                <ShieldAlert className="h-4.5 w-4.5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {success && (
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs flex items-center gap-2">
                <CheckCircle className="h-4.5 w-4.5 shrink-0" />
                <span>WhatsApp number updated successfully!</span>
              </div>
            )}

            <div className="flex flex-col gap-1 p-4 rounded-xl bg-[#0C0C12] border border-white/5">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Active Number</span>
              <span className="text-white text-base font-bold flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-500" />
                <span>+{currentNumber}</span>
              </span>
            </div>

            <form onSubmit={handleUpdate} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-gray-300">
                  New WhatsApp Number
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-semibold">
                    +
                  </span>
                  <input
                    type="text"
                    required
                    value={newNumber}
                    onChange={(e) => setNewNumber(e.target.value)}
                    placeholder="447828932728"
                    className="w-full pl-7 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all text-sm"
                  />
                </div>
                <span className="text-[10px] text-gray-500 leading-relaxed">
                  Enter only digits, including country code (e.g. 447828932728 for UK).
                </span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold to-yellow-600 hover:from-gold-hover hover:to-yellow-500 text-dark-bg font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-gold/15 transition-all disabled:opacity-55"
              >
                <Save className="h-4 w-4" />
                <span>{loading ? "Saving..." : "Save Configuration"}</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
