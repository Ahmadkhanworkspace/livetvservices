import { Link } from "@/i18n/routing";
import { Check, ArrowRight, ShieldCheck, Mail, MonitorPlay, Tv, Play } from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Plan",
      description: "Select the subscription duration (1, 3, 6, or 12 months) that fits your budget and needs. All plans include full premium channel coverage and dedicated technical support.",
      icon: Tv,
    },
    {
      number: "02",
      title: "Receive Credentials",
      description: "Once your payment is processed, our system generates your custom access credentials (Xtream API details and M3U playlist URL) and sends them to your email or WhatsApp within 5 to 15 minutes.",
      icon: Mail,
    },
    {
      number: "03",
      title: "Install a Player App",
      description: "Download a compatible IPTV player application on your device (such as Smarters Player, XCIPTV, or TiviMate). We have step-by-step guides for every device category.",
      icon: MonitorPlay,
    },
    {
      number: "04",
      title: "Log in & Start Watching",
      description: "Open the player app, choose the 'Xtream Codes API' option, enter the credentials we sent you, and click connect. You will immediately access over 18,000+ live channels and VOD media libraries.",
      icon: Play,
    },
  ];

  return (
    <div className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            How It Works
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl">
            Setting up your IPTV subscription is quick and straightforward. Follow our simple process.
          </p>
          <div className="h-1 w-12 bg-gold rounded-full" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col gap-4 border border-white/5 relative overflow-hidden group">
                <div className="absolute top-4 right-6 text-5xl font-display font-black text-white/5 group-hover:text-gold/5 transition-colors">
                  {step.number}
                </div>
                <div className="p-3.5 rounded-xl bg-gold/5 text-gold border border-gold/10 w-fit">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-white mt-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Support call-out */}
        <div className="glass-panel border border-white/5 rounded-3xl p-8 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <ShieldCheck className="h-12 w-12 text-gold" />
          <h2 className="font-display font-bold text-2xl text-white">Need help during setup?</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
            Our expert team is available 24/7 on WhatsApp. If you encounter any issues downloading players or logging in, just send us a message, and we'll walk you through the process step-by-step.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold to-yellow-600 hover:from-gold-hover hover:to-yellow-500 text-dark-bg text-sm font-bold shadow-md shadow-gold/10"
          >
            Get Help Now
          </Link>
        </div>

      </div>
    </div>
  );
}
