"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { 
  Tv, MonitorPlay, Smartphone, Laptop, Cpu, Globe, Trophy,
  Check, ArrowRight, ShieldCheck, Zap, Activity, HelpCircle, Star, MessageSquare, ChevronDown 
} from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage({ params }: { params: any }) {
  const t = useTranslations();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const stats = [
    { value: "120+", label: t("TrustBar.countries"), icon: Globe },
    { value: "12+", label: t("TrustBar.languages"), icon: MessageSquare },
    { value: "99.9%", label: t("TrustBar.uptime"), icon: Activity },
    { value: "24/7", label: t("TrustBar.support"), icon: ShieldCheck },
  ];

  const features = [
    { titleKey: "WhyUs.card1Title", descKey: "WhyUs.card1Desc", icon: Globe },
    { titleKey: "WhyUs.card2Title", descKey: "WhyUs.card2Desc", icon: Zap },
    { titleKey: "WhyUs.card3Title", descKey: "WhyUs.card3Desc", icon: MonitorPlay },
    { titleKey: "WhyUs.card4Title", descKey: "WhyUs.card4Desc", icon: ShieldCheck },
    { titleKey: "WhyUs.card5Title", descKey: "WhyUs.card5Desc", icon: Activity },
    { titleKey: "WhyUs.card6Title", descKey: "WhyUs.card6Desc", icon: Tv },
  ];

  const devices = [
    { slug: "fire-stick", name: "Fire Stick", icon: MonitorPlay },
    { slug: "smart-tv", name: "Smart TV", icon: Tv },
    { slug: "android", name: "Android TV / Phone", icon: Smartphone },
    { slug: "apple-tv-ios", name: "Apple TV / iOS", icon: Laptop },
    { slug: "mag-box", name: "MAG Box", icon: Cpu },
    { slug: "web-browser", name: "Web Browser", icon: Globe },
  ];

  const plans = [
    {
      name: t("Pricing.monthly"),
      price: "14.99",
      period: "/ month",
      desc: "Perfect for testing our service quality.",
      popular: false,
    },
    {
      name: t("Pricing.quarterly"),
      price: "29.99",
      period: "/ 3 months",
      desc: "Our most balanced value option.",
      popular: true,
    },
    {
      name: t("Pricing.yearly"),
      price: "59.99",
      period: "/ 12 months",
      desc: "Save over 60% with full year access.",
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: "Marcus K.",
      country: "United Kingdom",
      review: "Absolutely flawless service! I've been streaming for 3 months now. Live sports have zero buffering, and customer support via WhatsApp guided me through setup in less than 5 minutes.",
      rating: 5,
    },
    {
      name: "Sophia L.",
      country: "Canada",
      review: "Very reliable. We use it on our Samsung Smart TV and Fire Stick in the bedroom. The catalog of VOD movies is massive and updated regularly. Highly recommended!",
      rating: 5,
    },
    {
      name: "Fahad A.",
      country: "Saudi Arabia",
      review: "خدمة رائعة جداً! القنوات الرياضية تعمل بدون أي مشاكل والدعم الفني سريع الاستجابة ومحترم للغاية. يستحق الاشتراك السنوي بكل تأكيد.",
      rating: 5,
    },
  ];

  const faqs = [
    { q: t("FAQ.q1"), a: t("FAQ.a1") },
    { q: t("FAQ.q2"), a: t("FAQ.a2") },
    { q: t("FAQ.q3"), a: t("FAQ.a3") },
    { q: t("FAQ.q4"), a: t("FAQ.a4") },
    { q: t("FAQ.q5"), a: t("FAQ.a5") },
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const whatsappNumber = "447828932728";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t("WhatsApp.message"))}`;

  return (
    <div className="relative overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 xl:py-40 flex items-center">
        <div className="hero-glow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-start items-center lg:items-start">
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-xs text-gold font-bold tracking-wide uppercase shrink-0"
                >
                  <Zap className="h-3.5 w-3.5 fill-gold" />
                  Ultra-Stable Servers & 4K Streaming
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-2 p-1 pl-1.5 pr-3 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-300 font-medium shadow-md shrink-0"
                >
                  <span className="px-2 py-0.5 rounded-full bg-gold text-dark-bg font-extrabold text-[9px] uppercase tracking-wider flex items-center gap-1 animate-pulse shrink-0">
                    <Trophy className="h-2.5 w-2.5" /> FIFA LIVE
                  </span>
                  <span>World Cup Qualifiers Streaming Live</span>
                </motion.div>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] max-w-2xl"
              >
                {t("Hero.headline").split("IPTV")[0]}
                <span className="text-gold">IPTV</span>
                {t("Hero.headline").split("IPTV")[1]}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-400 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed"
              >
                {t("Hero.subhead")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
              >
                <Link
                  href="/pricing"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-gold to-yellow-600 hover:from-gold-hover hover:to-yellow-500 text-dark-bg text-base font-extrabold text-center shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:-translate-y-0.5 transition-all duration-200"
                >
                  {t("Hero.ctaPlans")}
                </Link>
                <Link
                  href="/how-it-works"
                  className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-white text-base font-extrabold text-center hover:bg-white/10 transition-all duration-200"
                >
                  {t("Hero.ctaWorks")}
                </Link>
              </motion.div>
            </div>

            {/* Hero Visual Mockup */}
            <div className="lg:col-span-5 relative flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-[450px] aspect-square rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl shadow-gold/5 group"
              >
                <img
                  src="/hero-showcase.png"
                  alt="IPTV Channels & Entertainment Showcase"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-45" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="relative py-12 border-y border-white/5 bg-[#08080C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex flex-col items-center justify-center text-center gap-2">
                  <div className="p-2.5 rounded-lg bg-gold/5 text-gold border border-gold/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                    {stat.value}
                  </span>
                  <span className="text-gray-400 text-xs sm:text-sm font-medium">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center flex flex-col items-center gap-4 mb-16">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              {t("WhyUs.title")}
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl">
              {t("WhyUs.subtitle")}
            </p>
            <div className="h-1 w-12 bg-gold rounded-full" />
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div
                  key={i}
                  className="glass-card rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden transition-all duration-300 group"
                >
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-gold w-fit group-hover:bg-gold/10 group-hover:border-gold/20 transition-all duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white group-hover:text-gold transition-colors duration-200">
                    {t(feat.titleKey as any)}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {t(feat.descKey as any)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Device Compatibilities */}
      <section className="relative py-20 bg-[#08080C] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center flex flex-col items-center gap-4 mb-16">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Support For Every Screen
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl">
              Set up on your favorite hardware platform in minutes. Click any device for detailed installation steps.
            </p>
            <div className="h-1 w-12 bg-gold rounded-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {devices.map((dev) => {
              const Icon = dev.icon;
              return (
                <Link
                  key={dev.slug}
                  href={`/devices/${dev.slug}`}
                  className="glass-card rounded-xl p-5 flex flex-col items-center gap-4 text-center hover:scale-[1.03] transition-transform duration-200 group border border-white/5"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-gold group-hover:text-gold-hover transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                    {dev.name}
                  </span>
                  <span className="text-[10px] text-gold font-bold flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    Setup Guide <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FIFA World Cup & Live Sports Banner Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0E0E17] via-[#09090E] to-dark-bg border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.03),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side info */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-start items-center lg:items-start">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs text-emerald-500 font-bold uppercase tracking-wider animate-pulse">
                <Trophy className="h-3.5 w-3.5" /> Streaming 2026 FIFA World Cup Live
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                Don't Miss a Single Goal: <br />
                <span className="text-gold">FIFA World Cup</span> in 4K UHD & 60FPS
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl">
                Get full access to all matches, qualifiers, and friendly fixtures of the FIFA World Cup. Our high-bandwidth streaming infrastructure guarantees a latency-free, smooth live stream experience.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-2">
                <div className="flex items-center gap-3 bg-white/5 border border-white/5 p-4 rounded-xl">
                  <Check className="h-5 w-5 text-gold shrink-0" />
                  <div className="text-start">
                    <h4 className="text-white text-sm font-bold">Ultra-Smooth 60FPS</h4>
                    <p className="text-gray-400 text-xs">High frame-rate prevents lag during fast gameplay.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/5 border border-white/5 p-4 rounded-xl">
                  <Check className="h-5 w-5 text-gold shrink-0" />
                  <div className="text-start">
                    <h4 className="text-white text-sm font-bold">Dual Feed Backup</h4>
                    <p className="text-gray-400 text-xs">Redundant streams prevent interruptions mid-match.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/5 border border-white/5 p-4 rounded-xl">
                  <Check className="h-5 w-5 text-gold shrink-0" />
                  <div className="text-start">
                    <h4 className="text-white text-sm font-bold">Multi-Audio Commentary</h4>
                    <p className="text-gray-400 text-xs">Choose English, Spanish, French, or Arabic audio.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/5 border border-white/5 p-4 rounded-xl">
                  <Check className="h-5 w-5 text-gold shrink-0" />
                  <div className="text-start">
                    <h4 className="text-white text-sm font-bold">EPG Live Schedule</h4>
                    <p className="text-gray-400 text-xs">Sync calendars with kickoff times automatically.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-gold to-yellow-600 hover:from-gold-hover hover:to-yellow-500 text-dark-bg text-sm font-extrabold text-center shadow-lg shadow-gold/25 hover:shadow-gold/35 transition-all"
                >
                  Get Instant World Cup Pass
                </a>
                <Link
                  href="/channels"
                  className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-extrabold text-center transition-all"
                >
                  View All Sports Channels
                </Link>
              </div>
            </div>

            {/* Right side match schedules / visual display */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="glass-panel border border-gold/20 p-6 rounded-3xl bg-[#12121E]/90 relative overflow-hidden">
                <div className="absolute top-0 right-0 h-28 w-28 bg-gold/5 blur-2xl rounded-full" />
                <h3 className="font-display font-bold text-lg text-white mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gold animate-ping" />
                  <span>FIFA World Cup Qualifiers (Live Updates)</span>
                </h3>

                <div className="flex flex-col gap-3">
                  <div className="bg-white/5 border border-white/5 p-3.5 rounded-2xl flex items-center justify-between">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-white text-xs font-bold">Brazil vs Argentina</span>
                      <span className="text-gray-400 text-[10px]">CONMEBOL Qualifiers</span>
                    </div>
                    <span className="text-[10px] font-extrabold bg-gold/15 text-gold px-2.5 py-1 rounded-md border border-gold/10 uppercase tracking-wide">
                      Live • 72' (1 - 0)
                    </span>
                  </div>

                  <div className="bg-white/5 border border-white/5 p-3.5 rounded-2xl flex items-center justify-between">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-white text-xs font-bold">France vs England</span>
                      <span className="text-gray-400 text-[10px]">UEFA Nations League</span>
                    </div>
                    <span className="text-[10px] font-extrabold bg-white/5 text-gray-400 px-2.5 py-1 rounded-md uppercase tracking-wide">
                      Today • 20:45 CET
                    </span>
                  </div>

                  <div className="bg-white/5 border border-white/5 p-3.5 rounded-2xl flex items-center justify-between">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-white text-xs font-bold">USA vs Mexico</span>
                      <span className="text-gray-400 text-[10px]">CONCACAF Qualifiers</span>
                    </div>
                    <span className="text-[10px] font-extrabold bg-white/5 text-gray-400 px-2.5 py-1 rounded-md uppercase tracking-wide">
                      Tomorrow • 18:30 EST
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 text-center">
                  <span className="text-xs text-gray-400">
                    Also includes <strong>ESPN, Sky Sports, TNT Sports, and beIN Sports</strong>.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="relative py-20 lg:py-28 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center flex flex-col items-center gap-4 mb-16">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              {t("Pricing.title")}
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl">
              {t("Pricing.subtitle")}
            </p>
            <div className="h-1 w-12 bg-gold rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => {
              const isPopular = plan.popular;
              return (
                <div
                  key={i}
                  className={`glass-panel rounded-3xl p-8 flex flex-col gap-6 relative border transition-all duration-300 ${
                    isPopular
                      ? "border-gold bg-[#12121D]/75 shadow-xl shadow-gold/5 -translate-y-2 md:-translate-y-4 keep-light"
                      : "border-white/5 hover:border-white/10"
                  }`}
                >
                  {isPopular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gold text-dark-bg font-extrabold text-[10px] uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <h3 className="font-display font-semibold text-lg text-white">{plan.name}</h3>
                    <p className="text-gray-400 text-xs mt-1">{plan.desc}</p>
                  </div>

                  <div className="flex items-baseline gap-1 py-4 border-y border-white/5">
                    <span className="font-display font-extrabold text-4xl sm:text-5xl text-white">
                      {t("Pricing.currencySymbol")}{plan.price}
                    </span>
                    <span className="text-gray-400 text-sm font-medium">{plan.period}</span>
                  </div>

                  <ul className="flex flex-col gap-3.5 my-4">
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <Check className="h-4.5 w-4.5 text-gold shrink-0" />
                      <span>{t("Pricing.channels")}</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <Check className="h-4.5 w-4.5 text-gold shrink-0" />
                      <span>{t("Pricing.vod")}</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <Check className="h-4.5 w-4.5 text-gold shrink-0" />
                      <span>{t("Pricing.quality")}</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <Check className="h-4.5 w-4.5 text-gold shrink-0" />
                      <span>{t("Pricing.buffer")}</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <Check className="h-4.5 w-4.5 text-gold shrink-0" />
                      <span>{t("Pricing.support")}</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <Check className="h-4.5 w-4.5 text-gold shrink-0" />
                      <span>{t("Pricing.devices")}</span>
                    </li>
                  </ul>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-bold text-center text-sm transition-all ${
                      isPopular
                        ? "bg-gradient-to-r from-gold to-yellow-600 text-dark-bg shadow-lg shadow-gold/15"
                        : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    {t("Pricing.cta")}
                  </a>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center text-xs text-gray-400 max-w-md mx-auto flex items-center justify-center gap-2 bg-[#0E0E15] border border-white/5 py-3 px-4 rounded-xl">
            <ShieldCheck className="h-4.5 w-4.5 text-gold shrink-0" />
            <span>Includes <strong>7-Day Money Back Guarantee</strong>. Refund issued immediately if unsatisfied.</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 bg-[#08080C] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center flex flex-col items-center gap-4 mb-16">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              What Our Subscribers Say
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl">
              We connect thousands of happy customers globally. Here is their honest feedback.
            </p>
            <div className="h-1 w-12 bg-gold rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 flex flex-col gap-4 border border-white/5">
                <div className="flex items-center gap-1">
                  {[...Array(test.rating)].map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "{test.review}"
                </p>
                <div className="mt-2 border-t border-white/5 pt-4">
                  <span className="text-white font-semibold text-sm">{test.name}</span>
                  <span className="text-gray-500 text-xs block">{test.country}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center flex flex-col items-center gap-4 mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              {t("FAQ.title")}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              {t("FAQ.subtitle")}
            </p>
            <div className="h-1 w-12 bg-gold rounded-full" />
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => {
              const isOpen = activeFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-xl border border-white/5 bg-[#0E0E15]/50 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(i)}
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

          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold-hover font-semibold"
            >
              <span>View all frequently asked questions</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA band */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-[#0E0E17] to-[#08080C] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center gap-6 relative z-10">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Ready to Upgrade Your TV Experience?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Join thousands of satisfied global subscribers. Immediate setup, risk-free money-back guarantee, and full 24/7 technical setup assistance.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-gold to-yellow-600 hover:from-gold-hover hover:to-yellow-500 text-dark-bg text-base font-extrabold shadow-lg shadow-gold/25 hover:shadow-gold/35 transition-all"
          >
            Chat with us on WhatsApp to Setup
          </a>
        </div>
      </section>
    </div>
  );
}
