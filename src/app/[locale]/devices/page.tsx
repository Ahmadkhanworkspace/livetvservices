import devices from "@/data/devices.json";
import { Link } from "@/i18n/routing";
import { MonitorPlay, Tv, Smartphone, Laptop, Cpu, Globe, ArrowRight, ShieldCheck } from "lucide-react";

const iconsMap: Record<string, any> = {
  MonitorPlay: MonitorPlay,
  Tv: Tv,
  Smartphone: Smartphone,
  Laptop: Laptop,
  Cpu: Cpu,
  Globe: Globe,
};

export default function DevicesPage() {
  return (
    <div className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Device Setup Guides
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl">
            Our IPTV subscription is compatible with almost any modern screen. Select your device for a detailed step-by-step installation guide.
          </p>
          <div className="h-1 w-12 bg-gold rounded-full" />
        </div>

        {/* Devices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
          {devices.map((device) => {
            const IconComponent = iconsMap[device.icon] || Tv;
            return (
              <div
                key={device.slug}
                className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-white/5 hover:border-white/10 transition-all duration-300 group"
              >
                <div className="flex flex-col gap-4">
                  <div className="p-3.5 rounded-xl bg-gold/5 text-gold border border-gold/10 w-fit group-hover:bg-gold/10 transition-all duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-gold transition-colors duration-200">
                    {device.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {device.intro}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5">
                  <Link
                    href={`/devices/${device.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold-hover font-semibold transition-colors"
                  >
                    <span>Read Setup Steps</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support call-out */}
        <div className="glass-panel border border-white/5 rounded-3xl p-8 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <ShieldCheck className="h-12 w-12 text-gold" />
          <h2 className="font-display font-bold text-2xl text-white">Don't see your streaming device listed?</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
            Don't worry! We support almost every media application that accepts M3U Playlists or Xtream API credentials. Contact us on WhatsApp, and our technical support agent will provide manual instructions for your system.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold to-yellow-600 hover:from-gold-hover hover:to-yellow-500 text-dark-bg text-sm font-bold shadow-md"
          >
            Contact Support Agent
          </Link>
        </div>

      </div>
    </div>
  );
}
