import languages from "@/data/languages.json";
import { Link } from "@/i18n/routing";
import { MessageSquare, Globe, ArrowRight, ShieldCheck } from "lucide-react";

export default function LanguagesPage() {
  return (
    <div className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Multi-Language Channel Coverage
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl">
            Stream channels, news, sports, and entertainment in your native tongue. We license and optimize feeds for over 12+ language communities.
          </p>
          <div className="h-1 w-12 bg-gold rounded-full" />
        </div>

        {/* Languages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
          {languages.map((lang) => (
            <div
              key={lang.slug}
              className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-white/5 hover:border-white/10 transition-all duration-300 group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div className="p-3.5 rounded-xl bg-gold/5 text-gold border border-gold/10 w-fit">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold text-gold bg-gold/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {lang.channelsCount} Live
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-white">
                  {lang.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {lang.intro}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {lang.regions.map((region, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-white/5 border border-white/5 px-2 py-1 rounded text-gray-400 font-medium"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support note */}
        <div className="glass-panel border border-white/5 rounded-3xl p-8 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <Globe className="h-12 w-12 text-gold" />
          <h2 className="font-display font-bold text-2xl text-white">Looking for a specific regional dialect or channel?</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
            Our library includes channels from over 50 countries, including minority languages and regional feeds. Send us a message on WhatsApp, and we can check the playlist for your exact channels.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold to-yellow-600 hover:from-gold-hover hover:to-yellow-500 text-dark-bg text-sm font-bold shadow-md"
          >
            Check Channel Lists
          </Link>
        </div>

      </div>
    </div>
  );
}
