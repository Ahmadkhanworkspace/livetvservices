import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Tv, Mail, ShieldAlert } from "lucide-react";

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations("Footer");
  const isRtl = locale === "ar" || locale === "ur";

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Pricing" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/channels", label: "Channels" },
    { href: "/countries", label: "Regions" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/support", label: "Support" },
  ];

  const devicesLinks = [
    { href: "/devices/fire-stick", label: "Fire Stick Setup" },
    { href: "/devices/smart-tv", label: "Smart TV Setup" },
    { href: "/devices/android", label: "Android Setup" },
    { href: "/devices/apple-tv-ios", label: "Apple TV Setup" },
    { href: "/devices/mag-box", label: "MAG Box Setup" },
    { href: "/devices/web-browser", label: "Web Browser Play" },
  ];

  const legalLinks = [
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/refund-policy", label: "Refund Policy" },
    { href: "/dmca", label: "DMCA Copyright" },
    { href: "/cookie-policy", label: "Cookie Policy" },
  ];

  return (
    <footer className="bg-[#050508] border-t border-white/5 pt-16 pb-8 z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 mb-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="h-9 w-9 rounded-lg bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center font-display font-extrabold text-dark-bg text-xl shadow-lg shadow-gold/15">
                L
              </span>
              <span className="font-display font-bold text-xl tracking-tight bg-gradient-to-r from-white to-gold bg-clip-text text-transparent">
                LiveTV<span className="text-gold">Services</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed mt-2">
              {t("tagline")}
            </p>
            <div className="flex flex-col gap-2 mt-4 text-sm text-gray-400">
              <span className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-gold" />
                <span>support@livetvservices.com</span>
              </span>
              <span className="flex items-center gap-2">
                <ShieldAlert className="h-4 w-4 text-gold" />
                <span>Safe & Secure SSL connection</span>
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-display font-semibold text-sm tracking-wider uppercase">
              {t("quickLinks")}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Devices Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-display font-semibold text-sm tracking-wider uppercase">
              {t("devices")}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {devicesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-display font-semibold text-sm tracking-wider uppercase">
              {t("legal")}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Lower footer copyright info */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p className="text-center md:text-start w-full md:w-auto">
            {t("copyright")}
          </p>
          <div className="flex items-center gap-6 justify-center md:justify-end w-full md:w-auto">
            <span className="hover:text-white transition-colors">100% Secure Checkout</span>
            <span className="hover:text-white transition-colors">99.9% Uptime Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
