"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Mail, MessageSquare, ShieldCheck, Send } from "lucide-react";
import { useWhatsApp } from "@/hooks/useWhatsApp";

export default function ContactPage() {
  const t = useTranslations("Contact");
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { whatsappUrl, getCustomUrl } = useWhatsApp("Hello LiveTVServices! I have a question regarding configuration or compatibility.");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);
    const textMessage = `Hello LiveTVServices! My details:\nName: ${name}\nEmail: ${email}\n\nMessage: ${message}`;
    const customWhatsappUrl = getCustomUrl(textMessage);
    
    // Open in a new tab
    window.open(customWhatsappUrl, "_blank");

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    }, 500);
  };

  return (
    <div className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            {t("title")}
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl">
            {t("subtitle")}
          </p>
          <div className="h-1 w-12 bg-gold rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          
          {/* Support Side Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/5 flex flex-col gap-6">
              <h2 className="font-display font-bold text-xl text-white">Direct Assistance</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Skip the ticket queue! Chat with a support agent immediately on WhatsApp for help with payment, activation, or device setup.
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-all shrink-0">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-sm">WhatsApp Chat</span>
                    <span className="text-gray-400 text-xs mt-0.5">Online now • Active support</span>
                  </div>
                </a>

                <a
                  href="mailto:support@livetvservices.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-gold/10 text-gold border border-gold/20 group-hover:bg-gold/20 transition-all shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-sm">Email Inquiry</span>
                    <span className="text-gray-400 text-xs mt-0.5">support@livetvservices.com</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-5 border border-white/5 flex items-center gap-3 bg-[#08080C]">
              <ShieldCheck className="h-5 w-5 text-gold shrink-0" />
              <span className="text-xs text-gray-500 leading-relaxed">
                Your data is safe with us. We use end-to-end SSL encryption on all inquiries.
              </span>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-white/5">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-gold/10 text-gold border border-gold/20 flex items-center justify-center">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">Message Sent!</h3>
                <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                  {t("success")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-300">
                    {t("name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("placeholderName")}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all text-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-300">
                    {t("email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("placeholderEmail")}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all text-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-300">
                    {t("message")}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t("placeholderMessage")}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-gold to-yellow-600 hover:from-gold-hover hover:to-yellow-500 text-dark-bg font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-gold/15 hover:shadow-gold/25 transition-all disabled:opacity-55 shrink-0"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>{t("submit")}</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
