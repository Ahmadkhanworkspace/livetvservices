import { Link } from "@/i18n/routing";
import { Star, ShieldCheck, MessageSquare, Heart } from "lucide-react";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "John D.",
      location: "United States",
      rating: 5,
      date: "2 days ago",
      text: "Setting up was a breeze on my Fire Stick. The picture quality is amazing (4K for major sports broadcasts). I canceled my $120/month cable bill immediately.",
    },
    {
      name: "Sarah M.",
      location: "Canada",
      rating: 5,
      date: "1 week ago",
      text: "The VOD section is outstanding. Tons of movies and full series with French subtitles. The server stability has been excellent over the last 6 months.",
    },
    {
      name: "Ahmed Y.",
      location: "Saudi Arabia",
      rating: 5,
      date: "3 days ago",
      text: "أفضل خدمة على الإطلاق! البث ثابت جداً ولا يوجد أي تقطيع خلال المباريات الكبيرة. الدعم الفني على الواتساب ممتاز وسريع الاستجابة.",
    },
    {
      name: "David L.",
      location: "United Kingdom",
      rating: 5,
      date: "2 weeks ago",
      text: "Highly recommended IPTV subscription. I was skeptical at first, but the anti-freeze stabilization works perfectly during live football games on my LG Smart TV.",
    },
    {
      name: "Elena R.",
      location: "Spain",
      rating: 5,
      date: "1 month ago",
      text: "Excelente servicio al cliente. Me ayudaron a configurarlo en mi Smart TV con IBO Player. Los canales españoles funcionan genial y la calidad es insuperable.",
    },
    {
      name: "Pierre G.",
      location: "France",
      rating: 5,
      date: "3 weeks ago",
      text: "Très satisfait de mon abonnement de 12 mois. La qualité d'image est au rendez-vous et il n'y a pas de coupures. Le service client répond rapidement.",
    }
  ];

  return (
    <div className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Customer Testimonials
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl">
            See why over 10,000+ active subscribers trust LiveTVServices for their daily television, movie, and sports entertainment.
          </p>
          <div className="h-1 w-12 bg-gold rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
          {testimonials.map((test, i) => (
            <div
              key={i}
              className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-white/5 hover:border-white/10 transition-all duration-300 relative"
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 text-gold fill-gold" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 font-medium">{test.date}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "{test.text}"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-white font-bold text-sm block">{test.name}</span>
                  <span className="text-gray-500 text-xs">{test.location}</span>
                </div>
                <span className="text-[10px] text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3" /> Verified Client
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="glass-panel border border-white/5 rounded-3xl p-8 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <Heart className="h-12 w-12 text-gold animate-pulse" />
          <h2 className="font-display font-bold text-2xl text-white">Join our family of happy subscribers</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
            Every subscription is backed by our full 7-day money-back guarantee. If you're not satisfied, we will issue a full refund immediately.
          </p>
          <Link
            href="/pricing"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold to-yellow-600 hover:from-gold-hover hover:to-yellow-500 text-dark-bg text-sm font-bold shadow-md"
          >
            Start Streaming Now
          </Link>
        </div>

      </div>
    </div>
  );
}
