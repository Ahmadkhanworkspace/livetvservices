import countries from "@/data/countries.json";
import { Link } from "@/i18n/routing";
import { Globe, ArrowRight, ShieldCheck } from "lucide-react";

export default function CountriesPage() {
  return (
    <div className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Supported Regions & Coverage
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl">
            LiveTVServices has optimized servers and content licensing across all major global markets. Select a region below to see localized streams and options.
          </p>
          <div className="h-1 w-12 bg-gold rounded-full" />
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {countries.map((country) => (
            <Link
              key={country.slug}
              href={`/countries/${country.slug}`}
              className="glass-panel rounded-2xl p-6 flex items-center justify-between border border-white/5 hover:border-white/10 hover:scale-[1.02] transition-all duration-200 group"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl filter drop-shadow">{country.flag}</span>
                <span className="font-display font-bold text-lg text-white group-hover:text-gold transition-colors">
                  {country.name}
                </span>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-gold group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>

        {/* Global statement */}
        <div className="glass-panel border border-white/5 rounded-3xl p-8 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <Globe className="h-12 w-12 text-gold animate-spin-slow" />
          <h2 className="font-display font-bold text-2xl text-white">Streaming Internationally Outside These Areas?</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
            Our subscription works globally. As long as you have a stable broadband internet connection (at least 15 Mbps), you can watch all 18,000+ channels and 80,000+ VOD files from any location in the world.
          </p>
          <Link
            href="/pricing"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold to-yellow-600 hover:from-gold-hover hover:to-yellow-500 text-dark-bg text-sm font-bold shadow-md"
          >
            Check Packages
          </Link>
        </div>

      </div>
    </div>
  );
}
