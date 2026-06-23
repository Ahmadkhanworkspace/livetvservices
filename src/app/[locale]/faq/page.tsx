"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { HelpCircle, ChevronDown, MonitorPlay, ShieldCheck, CreditCard, Play } from "lucide-react";

export default function FaqPage() {
  const t = useTranslations();
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const categories = [
    {
      id: "general",
      title: "General Service",
      icon: Play,
      questions: [
        {
          q: "What is LiveTVServices and how does it work?",
          a: "LiveTVServices is a premium IPTV subscription that allows you to stream live TV channels, movie VOD databases, and global TV series directly over the internet. You do not need physical antennas or cables. After checkout, you receive log in details to plug into a player application."
        },
        {
          q: "Is there a contract or commitment?",
          a: "No. All subscriptions are one-time payments. There are no automatic renewals, recurring debits, or cancellation fees. You can renew your access whenever you choose."
        },
        {
          q: "How many channels are available?",
          a: "We offer access to over 18,000+ live television channels and a video on demand (VOD) catalog comprising 80,000+ movies and complete series, updated weekly with the latest releases."
        }
      ]
    },
    {
      id: "devices",
      title: "Device Compatibility",
      icon: MonitorPlay,
      questions: [
        {
          q: "What devices do you support?",
          a: "We support almost all modern streaming systems: Amazon Fire Stick, Smart TVs (Samsung, LG, Sony, Android TV), Android devices (phones, tablets, box decoders), Apple devices (iPhone, iPad, Apple TV), MAG boxes, and web browsers."
        },
        {
          q: "Can I watch on multiple screens at the same time?",
          a: "Our standard subscription codes support one active stream connection at a time. If you run multiple streams simultaneously, the system will block the line to prevent sharing. You can buy extra concurrent connections during purchase or via our WhatsApp support."
        }
      ]
    },
    {
      id: "streaming",
      title: "Quality & Stability",
      icon: ShieldCheck,
      questions: [
        {
          q: "Why does my feed buffer occasionally?",
          a: "Buffer issues are usually caused by local Wi-Fi latency, background download congestion, or ISP throttling of video packets. We recommend connecting your device via an Ethernet cable or utilizing a high-quality VPN to bypass local network limits."
        },
        {
          q: "What internet speed is required?",
          a: "We recommend a minimum download bandwidth of 15 Mbps for standard Definition/High Definition channels, and at least 25-50 Mbps for 4K UHD broadcasts."
        }
      ]
    },
    {
      id: "payments",
      title: "Payments & Refunds",
      icon: CreditCard,
      questions: [
        {
          q: "What payment forms do you accept?",
          a: "We accept all major secure Credit Cards, PayPal, Interac e-Transfers for Canadian users, Cash App, and major Cryptocurrencies (Bitcoin, USDT, Ethereum)."
        },
        {
          q: "How does the refund guarantee work?",
          a: "We offer a 7-day money-back guarantee. If you experience technical faults that we cannot resolve, or if you change your mind within the first week, let us know via email or WhatsApp for a quick refund."
        }
      ]
    }
  ];

  const toggleFaq = (catId: string, idx: number) => {
    const key = `${catId}-${idx}`;
    setActiveFaq(activeFaq === key ? null : key);
  };

  return (
    <div className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl">
            Have questions about LiveTVServices? Find instant answers about compatibility, setups, payments, and channel listings below.
          </p>
          <div className="h-1 w-12 bg-gold rounded-full" />
        </div>

        {/* FAQ Categories Stack */}
        <div className="flex flex-col gap-12">
          {categories.map((cat) => {
            const CategoryIcon = cat.icon;
            return (
              <div key={cat.id} className="flex flex-col gap-5">
                <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                  <div className="p-2 rounded-lg bg-gold/5 text-gold border border-gold/10">
                    <CategoryIcon className="h-5 w-5" />
                  </div>
                  <h2 className="font-display font-bold text-xl text-white">
                    {cat.title}
                  </h2>
                </div>

                <div className="flex flex-col gap-4">
                  {cat.questions.map((q, idx) => {
                    const isOpen = activeFaq === `${cat.id}-${idx}`;
                    return (
                      <div
                        key={idx}
                        className="rounded-xl border border-white/5 bg-[#0E0E15]/50 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFaq(cat.id, idx)}
                          className="w-full flex items-center justify-between p-5 text-start font-semibold text-white hover:text-gold transition-colors text-sm sm:text-base"
                        >
                          <span className="flex items-center gap-3">
                            <HelpCircle className="h-4.5 w-4.5 text-gold shrink-0" />
                            <span>{q.q}</span>
                          </span>
                          <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                        </button>

                        <div
                          className={`transition-all duration-300 overflow-hidden ${
                            isOpen ? "max-h-[300px] border-t border-white/5" : "max-h-0"
                          }`}
                        >
                          <p className="p-5 text-gray-300 text-sm leading-relaxed">
                            {q.a}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
