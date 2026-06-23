"use client";

import { useState, useEffect } from "react";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Menu, X, ChevronDown, Globe, Sun, Moon } from "lucide-react";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "ur", name: "اردو", flag: "🇵🇰" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
];

export default function Navbar({ locale }: { locale: string }) {
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const router = useRouter();
  
  const [isOpen, setIsOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (document.documentElement.classList.contains("light")) {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  // Monitor scroll for shadow/backdrop change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setLangDropdownOpen(false);
    setIsOpen(false);
  };

  const activeLang = languages.find((lang) => lang.code === locale) || languages[0];
  const isRtl = locale === "ar" || locale === "ur";

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/pricing", label: t("pricing") },
    { href: "/how-it-works", label: t("howItWorks") },
    { href: "/devices", label: t("devices") },
    { href: "/channels", label: t("channels") },
    { href: "/countries", label: t("countries") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-bg/85 backdrop-blur-md border-b border-border py-4 shadow-lg shadow-black/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group z-50">
            <span className="h-9 w-9 rounded-lg bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center font-display font-extrabold text-dark-bg text-xl shadow-lg shadow-gold/25 group-hover:scale-105 transition-transform">
              L
            </span>
            <span className="font-display font-bold text-xl tracking-tight bg-gradient-to-r from-white via-white to-gold bg-clip-text text-transparent">
              LiveTV<span className="text-gold">Services</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "text-gold bg-white/5"
                      : "text-gray-400 hover:text-gold hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Controls (Lang dropdown & CTA) */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 text-sm font-medium hover:text-white transition-all"
                aria-label="Select Language"
              >
                <Globe className="h-4 w-4 text-gold" />
                <span>{activeLang.flag}</span>
                <span>{activeLang.name}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {langDropdownOpen && (
                <div
                  className={`absolute mt-2 w-48 rounded-xl bg-[#0F0F16] border border-white/10 shadow-2xl p-1 z-50 transition-all ${
                    isRtl ? "left-0" : "right-0"
                  }`}
                >
                  <div className="max-h-72 overflow-y-auto custom-scrollbar">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLocaleChange(lang.code)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 text-left text-sm rounded-lg hover:bg-white/5 transition-all ${
                          locale === lang.code ? "text-gold font-semibold bg-white/5" : "text-gray-300"
                        } ${isRtl ? "text-right flex-row-reverse" : ""}`}
                      >
                        <span className="text-base">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Theme Toggle Desktop */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 text-gold transition-all cursor-pointer shrink-0"
              aria-label="Toggle Day/Night Mode"
            >
              {theme === "dark" ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>

            {/* CTA */}
            <Link
              href="/pricing"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-gold to-yellow-600 hover:from-gold-hover hover:to-yellow-500 text-dark-bg text-sm font-bold shadow-lg shadow-gold/15 hover:shadow-gold/25 hover:-translate-y-0.5 transition-all duration-200"
            >
              {t("viewPlans")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Language Switcher Mobile Shortcut */}
            <button
              onClick={() => {
                setLangDropdownOpen(!langDropdownOpen);
                setIsOpen(false);
              }}
              className="p-2 rounded-lg bg-white/5 text-gold border border-white/5"
              aria-label="Change language"
            >
              <Globe className="h-5 w-5" />
            </button>

            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/5 text-gold border border-white/5"
              aria-label="Toggle Day/Night Mode"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button
              onClick={() => {
                setIsOpen(!isOpen);
                setLangDropdownOpen(false);
              }}
              className="p-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 text-gray-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Language Switcher overlay */}
      {langDropdownOpen && (
        <div className="lg:hidden absolute top-20 inset-x-4 glass-panel border border-white/10 rounded-2xl p-4 shadow-2xl z-50">
          <div className="flex justify-between items-center mb-3 pb-2 border-b border-white/5">
            <span className="text-sm font-semibold text-gold flex items-center gap-1.5">
              <Globe className="h-4 w-4" /> Choose Language
            </span>
            <button onClick={() => setLangDropdownOpen(false)} className="text-gray-400">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLocaleChange(lang.code)}
                className={`flex items-center gap-2 p-2.5 text-sm rounded-xl border border-white/5 transition-all ${
                  locale === lang.code
                    ? "bg-gold/15 text-gold border-gold/30 font-semibold"
                    : "bg-white/5 text-gray-300"
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-18 bg-[#0A0A0F]/95 backdrop-blur-lg border-b border-white/5 py-6 px-4 shadow-2xl z-40">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? "text-gold bg-white/5"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  } ${isRtl ? "text-right" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 mt-2 border-t border-white/5 flex flex-col gap-3">
              <Link
                href="/pricing"
                onClick={() => setIsOpen(false)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold to-yellow-600 text-dark-bg font-bold text-center shadow-lg shadow-gold/10"
              >
                {t("viewPlans")}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
