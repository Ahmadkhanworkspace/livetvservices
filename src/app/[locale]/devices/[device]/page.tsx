import devices from "@/data/devices.json";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { CheckCircle2, ChevronRight, HelpCircle, ArrowLeft, Tv, MessageSquare } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { getWhatsappNumber } from "@/app/api/whatsapp/route";

export async function generateStaticParams() {
  return devices.map((d) => ({
    device: d.slug,
  }));
}

export default async function DeviceDetailPage({
  params,
}: {
  params: Promise<{ device: string; locale: string }>;
}) {
  const { device: slug, locale } = await params;
  const device = devices.find((d) => d.slug === slug);

  if (!device) {
    notFound();
  }

  const t = await getTranslations({ locale });
  const whatsappNumber = await getWhatsappNumber();
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    t("WhatsApp.message") + " [Device: " + device.name + "]"
  )}`;

  return (
    <div className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.04),transparent_50%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Back Link */}
        <Link
          href="/devices"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gold mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to all devices</span>
        </Link>

        {/* Header */}
        <div className="flex flex-col gap-4 mb-12">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            How to Set Up IPTV on <span className="text-gold">{device.name}</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            {device.intro}
          </p>
          <div className="h-1 w-12 bg-gold rounded-full mt-2" />
        </div>

        {/* Step-by-Step Instructions */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/5 mb-16">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-white mb-6 flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-gold" />
            <span>Step-by-Step Configuration Guide</span>
          </h2>

          <div className="flex flex-col gap-6">
            {device.steps.map((step, index) => (
              <div key={index} className="flex gap-4 items-start">
                <span className="flex items-center justify-center h-8 w-8 rounded-lg bg-gold/10 text-gold border border-gold/20 font-display font-bold text-sm shrink-0">
                  {index + 1}
                </span>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed pt-0.5">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Device specific FAQs */}
        <div className="mb-16">
          <h2 className="font-display font-bold text-2xl text-white mb-8 text-center sm:text-start">
            Frequently Asked Questions for {device.name}
          </h2>
          <div className="flex flex-col gap-4">
            {device.faqs.map((faq, i) => (
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

        {/* Urgent support box */}
        <div className="glass-panel border border-white/5 rounded-3xl p-8 text-center flex flex-col items-center gap-6 bg-gradient-to-br from-[#12121E] to-[#0A0A0F]">
          <Tv className="h-12 w-12 text-gold" />
          <h3 className="font-display font-bold text-2xl text-white">Already finished installation?</h3>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Purchase a plan now to receive your Xtream Codes connection parameters instantly. If you need assistance during the setup, our team is available 24/7 on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/pricing"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold to-yellow-600 hover:from-gold-hover hover:to-yellow-500 text-dark-bg text-sm font-bold shadow-md"
            >
              Get IPTV Plan
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-bold flex items-center justify-center gap-2"
            >
              <MessageSquare className="h-4.5 w-4.5 text-gold" />
              <span>Request WhatsApp Setup</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
