import { Link } from "@/i18n/routing";
import { ShieldCheck, Users, Zap, Award } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      title: "Reliability First",
      description: "We deploy state-of-the-art anti-freeze software and scale local CDN servers globally so you enjoy buffer-free sports and movies.",
      icon: Zap,
    },
    {
      title: "Client Centricity",
      description: "Our dedicated technical agents are available 24/7 on WhatsApp, guiding you through application installation on any screen.",
      icon: Users,
    },
    {
      title: "Complete Transparency",
      description: "No hidden charges, no long-term contracts. Cancel your monthly or annual package at any time with no penalties.",
      icon: ShieldCheck,
    },
    {
      title: "Premium Quality",
      description: "We deliver original broadcast streams in 1080p Full HD and 4K UHD resolutions, preserving full audio tracks and subtitles.",
      icon: Award,
    },
  ];

  return (
    <div className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            About LiveTVServices
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl">
            Our mission is to redefine live television entertainment by providing contract-free, high-definition IPTV subscriptions globally.
          </p>
          <div className="h-1 w-12 bg-gold rounded-full" />
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 max-w-5xl mx-auto">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Who We Are
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Founded in 2021, LiveTVServices.com emerged to solve the frustrations of traditional cable TV: high monthly fees, locked-in annual contracts, and bulky physical receivers. By using cloud-based IPTV protocols, we deliver global television feeds directly over the internet.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              We operate high-speed server clusters optimized for low-latency streaming. This ensures that whether you're watching local sports in London, news in Toronto, or movies in Riyadh, your stream stays crystal clear and lag-free.
            </p>
          </div>
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-square rounded-2xl overflow-hidden glass-panel border border-white/5 flex items-center justify-center p-8 bg-gradient-to-br from-[#12121E] to-[#0A0A0F]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent_60%)]" />
              <div className="text-center flex flex-col items-center gap-4 z-10">
                <span className="text-5xl font-display font-black text-gold">5Y+</span>
                <span className="text-sm font-semibold text-white tracking-wider uppercase">Streaming Operations</span>
                <span className="text-xs text-gray-500">Connecting homes worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="mb-20 max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val, i) => {
              const IconComponent = val.icon;
              return (
                <div key={i} className="glass-panel rounded-2xl p-6 sm:p-8 flex gap-5 border border-white/5 hover:border-white/10 transition-all duration-300">
                  <div className="p-3 rounded-xl bg-gold/5 text-gold border border-gold/10 h-fit shrink-0">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-bold text-lg text-white">
                      {val.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="glass-panel border border-white/5 rounded-3xl p-8 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <h3 className="font-display font-bold text-2xl text-white">Ready to experience premium IPTV?</h3>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
            Check out our subscription plans. All plans include full channel coverage and a risk-free money-back guarantee.
          </p>
          <Link
            href="/pricing"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold to-yellow-600 hover:from-gold-hover hover:to-yellow-500 text-dark-bg text-sm font-bold shadow-md"
          >
            Check Subscriptions
          </Link>
        </div>

      </div>
    </div>
  );
}
