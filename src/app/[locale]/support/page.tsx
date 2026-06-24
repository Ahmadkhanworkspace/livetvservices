"use client";

import { Link } from "@/i18n/routing";
import { HelpCircle, MessageSquare, ShieldAlert, Cpu, Sparkles } from "lucide-react";
import { useWhatsApp } from "@/hooks/useWhatsApp";

export default function SupportPage() {
  const { whatsappUrl } = useWhatsApp("Hello LiveTVServices support team! I need assistance with setup or activation of my subscription.");

  return (
    <div className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Customer Support Center
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl">
            Having trouble logging in or configuring your device? Our team is online 24/7 to resolve technical queries.
          </p>
          <div className="h-1 w-12 bg-gold rounded-full" />
        </div>

        {/* Support categories split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Quick FAQ shortcut */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/5 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="p-3 rounded-xl bg-gold/5 text-gold border border-gold/10 w-fit">
                <HelpCircle className="h-6 w-6" />
              </div>
              <h2 className="font-display font-bold text-xl text-white">Self-Service Center</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Check our detailed documentation before opening a ticket. We cover Fire Stick, Smart TV, and Android setups step-by-step.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/faq"
                className="text-sm text-gold hover:text-gold-hover font-semibold transition-colors flex items-center gap-1.5"
              >
                <span>Read Frequently Asked Questions</span>
                <span>→</span>
              </Link>
              <Link
                href="/devices"
                className="text-sm text-gold hover:text-gold-hover font-semibold transition-colors flex items-center gap-1.5"
              >
                <span>View Device Installation Guides</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Quick Ticket Chat */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-gold/15 bg-gold/[0.02] flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/25 w-fit">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h2 className="font-display font-bold text-xl text-white">Instant WhatsApp Chat</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Chat with an engineer directly. Please prepare the following details so we can assist you faster:
              </p>
              <ul className="text-xs text-gray-400 flex flex-col gap-2 bg-[#0E0E15] p-3.5 rounded-xl border border-white/5">
                <li className="flex items-center gap-2">
                  <span className="text-gold">•</span>
                  <span>Your subscription email or order ID</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">•</span>
                  <span>Streaming device model (e.g. Fire Stick 4K)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">•</span>
                  <span>Player application name (e.g. IPTV Smarters)</span>
                </li>
              </ul>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold to-yellow-600 hover:from-gold-hover hover:to-yellow-500 text-dark-bg font-extrabold text-center text-sm shadow-md flex items-center justify-center gap-2"
            >
              <MessageSquare className="h-4.5 w-4.5" />
              <span>Start Support Chat</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
