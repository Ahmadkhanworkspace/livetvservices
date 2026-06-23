import countries from "@/data/countries.json";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { CheckCircle2, ChevronRight, HelpCircle, ArrowLeft, Globe, CreditCard, ShieldCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateStaticParams() {
  return countries.map((c) => ({
    country: c.slug,
  }));
}

export default async function CountryDetailPage({
  params,
}: {
  params: Promise<{ country: string; locale: string }>;
}) {
  const { country: slug, locale } = await params;
  const country = countries.find((c) => c.slug === slug);

  if (!country) {
    notFound();
  }

  const t = await getTranslations({ locale });
  const whatsappNumber = "447828932728";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    t("WhatsApp.message") + " [Region: " + country.name + "]"
  )}`;

  return (
    <div className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.04),transparent_50%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Back Link */}
        <Link
          href="/countries"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gold mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to all regions</span>
        </Link>

        {/* Header */}
        <div className="flex items-start gap-4 mb-10">
          <span className="text-5xl filter drop-shadow pt-1">{country.flag}</span>
          <div className="flex flex-col gap-3">
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Best IPTV Subscription in <span className="text-gold">{country.name}</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mt-2">
              {country.intro}
            </p>
          </div>
        </div>
        <div className="h-1 w-12 bg-gold rounded-full mb-12" />

        {/* Key Features & Payment Options split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Features */}
          <div className="md:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-white/5 flex flex-col gap-5">
            <h2 className="font-display font-bold text-lg text-white flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-gold" />
              <span>Regional Benefits</span>
            </h2>
            <ul className="flex flex-col gap-4">
              {country.features.map((feat, index) => (
                <li key={index} className="text-gray-300 text-sm sm:text-base leading-relaxed flex gap-3">
                  <span className="text-gold text-sm font-bold shrink-0 mt-0.5">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Payments & ISP Details */}
          <div className="md:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 border border-white/5 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="font-display font-bold text-lg text-white flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-gold" />
                <span>Local Payment Options</span>
              </h2>
              <div className="flex flex-wrap gap-2">
                {country.localPaymentMethods.map((pay, index) => (
                  <span
                    key={index}
                    className="text-xs bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg text-gray-300 font-medium"
                  >
                    {pay}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed border-t border-white/5 pt-4">
              <strong>Local Note:</strong> {country.regionalNote}
            </p>
          </div>
        </div>

        {/* Country specific FAQs */}
        <div className="mb-16">
          <h2 className="font-display font-bold text-2xl text-white mb-8 text-center sm:text-start">
            {country.name} IPTV Subscription FAQs
          </h2>
          <div className="flex flex-col gap-4">
            {country.faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/5 bg-[#0E0E15]/50 p-6 flex flex-col gap-2.5"
              >
                <h3 className="font-semibold text-white text-base flex items-center gap-2.5">
                  <HelpCircle className="h-4.5 w-4.5 text-gold shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed ps-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Support call-out */}
        <div className="glass-panel border border-white/5 rounded-3xl p-8 text-center flex flex-col items-center gap-6 bg-gradient-to-br from-[#12121E] to-[#0A0A0F]">
          <Globe className="h-12 w-12 text-gold animate-pulse" />
          <h3 className="font-display font-bold text-2xl text-white">Stream Local & International TV Now</h3>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Choose your pricing tier to activate your subscription. Receive setup credentials within 15 minutes, with full support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/pricing"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold to-yellow-600 hover:from-gold-hover hover:to-yellow-500 text-dark-bg text-sm font-bold shadow-md"
            >
              Check Pricing
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-bold flex items-center justify-center gap-2"
            >
              <span>Setup on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
