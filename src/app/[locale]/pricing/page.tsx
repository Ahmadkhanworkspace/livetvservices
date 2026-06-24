"use client";

import { useTranslations } from "next-intl";
import { Check, ShieldCheck, AlertCircle, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useWhatsApp } from "@/hooks/useWhatsApp";

export default function PricingPage() {
  const t = useTranslations();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  const { whatsappUrl } = useWhatsApp(t("WhatsApp.message"));

  const plans = [
    {
      name: "1 Month Premium",
      price: "$15",
      period: "Monthly billing",
      connections: "1 Device Connection",
      popular: false,
    },
    {
      name: "3 Months Premium",
      price: "$25",
      period: "Quarterly billing (Save 45%)",
      connections: "1 Device Connection",
      popular: false,
    },
    {
      name: "6 Months Premium",
      price: "$40",
      period: "Semi-annual billing (Save 55%)",
      connections: "1 Device Connection",
      popular: true,
    },
    {
      name: "12 Months Premium",
      price: "$65",
      period: "Yearly billing (Save 65%)",
      connections: "1 Device Connection",
      popular: false,
    },
  ];

  const featuresList = [
    { name: "Live TV Channels", basic: "18,000+", premium: "18,000+" },
    { name: "VOD Movies & Series", basic: "80,000+", premium: "80,000+" },
    { name: "HD / Full HD Streams", basic: true, premium: true },
    { name: "4K UHD Content", basic: false, premium: true },
    { name: "Anti-Freeze Stabilization", basic: "Standard", premium: "Premium v4.0" },
    { name: "EPG (Electronic TV Guide)", basic: true, premium: true },
    { name: "24/7 Setup Assistance", basic: true, premium: true },
  ];

  const billingFaqs = [
    {
      q: "What payment methods are supported?",
      a: "We support secure credit card checkout, PayPal, Interac e-Transfer for Canadian users, Cash App, and major cryptocurrencies (such as Bitcoin, USDT, and Ethereum) for maximum privacy.",
    },
    {
      q: "Is there a money-back guarantee?",
      a: "Yes! We offer a full 7-day money-back guarantee. If you run into technical issues that we cannot resolve, or if you are not satisfied with the channel coverage, simply request a refund.",
    },
    {
      q: "Will my subscription automatically renew?",
      a: "No, we do not perform automatic rebilling. Your subscription is a one-time payment. We will notify you via email/WhatsApp 5 days before your subscription expires with details on how to renew.",
    },
    {
      q: "Can I use the subscription on multiple devices?",
      a: "You can load the playlist on multiple devices, but you can only stream on one device at a time. To stream concurrently, please contact support to add extra connections to your account.",
    },
  ];

  return (
    <div className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Subscription Pricing Plans
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl">
            Pick a tier that fits your requirements. Save more on extended plans. Fully guaranteed.
          </p>
          <div className="h-1 w-12 bg-gold rounded-full" />
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-20">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`glass-panel rounded-3xl p-6 flex flex-col gap-5 border transition-all duration-300 relative ${
                plan.popular 
                  ? "border-gold bg-[#12121D]/75 shadow-xl shadow-gold/5 lg:-translate-y-2 keep-light" 
                  : "border-white/5 hover:border-white/10"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gold text-dark-bg font-extrabold text-[9px] uppercase tracking-wider">
                  Best Value
                </span>
              )}
              
              <div>
                <h3 className="font-display font-semibold text-lg text-white">{plan.name}</h3>
                <p className="text-gray-500 text-xs mt-1">{plan.period}</p>
              </div>

              <div className="py-2 flex items-baseline">
                <span className="font-display font-extrabold text-4xl text-white">{plan.price}</span>
              </div>

              <div className="border-t border-white/5 pt-4 flex flex-col gap-3">
                <span className="text-xs text-gray-400 flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold shrink-0" />
                  <span>{plan.connections}</span>
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold shrink-0" />
                  <span>18,000+ TV Channels & EPG</span>
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold shrink-0" />
                  <span>80,000+ Movies & TV VOD</span>
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold shrink-0" />
                  <span>Full HD / 4K Playback</span>
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold shrink-0" />
                  <span>24/7 Setup Assistance</span>
                </span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl font-bold text-center text-sm mt-auto transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-gold to-yellow-600 text-dark-bg shadow-md shadow-gold/15"
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                Buy Subscription
              </a>
            </div>
          ))}
        </div>

        {/* Feature Comparison Matrix */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 mb-20 border border-white/5 overflow-x-auto">
          <h2 className="font-display font-semibold text-xl text-white mb-6">Detailed Plan Features Matrix</h2>
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead>
              <tr className="border-b border-white/5 text-gray-400 text-xs uppercase tracking-wider">
                <th className="pb-4 font-semibold">Features & Capabilities</th>
                <th className="pb-4 font-semibold">Standard Plans (1-3 Mo)</th>
                <th className="pb-4 font-semibold">Extended Plans (6-12 Mo)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm text-gray-300">
              {featuresList.map((feature, i) => (
                <tr key={i} className="hover:bg-white/[0.01]">
                  <td className="py-4 font-medium text-white">{feature.name}</td>
                  <td className="py-4">
                    {typeof feature.basic === "boolean" ? (
                      feature.basic ? <Check className="h-5 w-5 text-gold" /> : "-"
                    ) : (
                      feature.basic
                    )}
                  </td>
                  <td className="py-4 text-gold font-semibold">
                    {typeof feature.premium === "boolean" ? (
                      feature.premium ? <Check className="h-5 w-5 text-gold" /> : "-"
                    ) : (
                      feature.premium
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Billing FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center flex flex-col items-center gap-3 mb-10">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Billing & Subscription FAQ
            </h2>
            <p className="text-gray-400 text-sm">
              Answers regarding billing cycles, trials, refunds, and device activation.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {billingFaqs.map((faq, i) => {
              const isOpen = activeFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-xl border border-white/5 bg-[#0E0E15]/50 overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-start font-semibold text-white hover:text-gold transition-colors text-sm sm:text-base"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-gold shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-[300px] border-t border-white/5" : "max-h-0"
                    }`}
                  >
                    <p className="p-5 text-gray-300 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
