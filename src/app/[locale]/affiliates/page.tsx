import { Link } from "@/i18n/routing";
import { Award, DollarSign, Share2, TrendingUp, ShieldCheck } from "lucide-react";

export default function AffiliatesPage() {
  const steps = [
    {
      title: "1. Join for Free",
      description: "Submit a simple registration form to get access to your partner dashboard. No upfront charges or minimum requirements.",
      icon: Award,
    },
    {
      title: "2. Share Your Link",
      description: "Use your customized referral link to recommend our services in blogs, social media channels, or to your friends.",
      icon: Share2,
    },
    {
      title: "3. Track Commissions",
      description: "Monitor real-time visitors, registrations, and completed sales in your personalized affiliate control panel.",
      icon: TrendingUp,
    },
    {
      title: "4. Get Paid Monthly",
      description: "Receive payouts on the 1st of every month via PayPal, direct bank transfer, or crypto (USDT/BTC). Minimum payout is $50.",
      icon: DollarSign,
    },
  ];

  return (
    <div className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Affiliate Partner Program
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl">
            Recommend our premium global IPTV services and earn up to <span className="text-gold font-bold">30% recurring commission</span> on every single referral.
          </p>
          <div className="h-1 w-12 bg-gold rounded-full" />
        </div>

        {/* Benefits Cards split */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 max-w-5xl mx-auto">
          {steps.map((step, i) => {
            const IconComponent = step.icon;
            return (
              <div key={i} className="glass-panel rounded-2xl p-6 flex flex-col gap-4 border border-white/5 hover:border-white/10 transition-all duration-300">
                <div className="p-3.5 rounded-xl bg-gold/5 text-gold border border-gold/10 w-fit">
                  <IconComponent className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mt-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Affiliate call-out */}
        <div className="glass-panel border border-white/5 rounded-3xl p-8 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <ShieldCheck className="h-12 w-12 text-gold" />
          <h2 className="font-display font-bold text-2xl text-white">Ready to start earning?</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
            Register your partner account or contact us via WhatsApp to speak with our affiliate coordinator. We supply all banners, marketing materials, and tracking links to set you up immediately.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold to-yellow-600 hover:from-gold-hover hover:to-yellow-500 text-dark-bg text-sm font-bold shadow-md"
          >
            Become an Affiliate Partner
          </Link>
        </div>

      </div>
    </div>
  );
}
