import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "../globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const displayFont = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "Hero" });

  return {
    title: "LiveTVServices | Premium Global IPTV Subscription Services",
    description: t("subhead"),
    metadataBase: new URL("https://livetvservices.com"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        es: "/es",
        fr: "/fr",
        de: "/de",
        pt: "/pt",
        ar: "/ar",
        hi: "/hi",
        ur: "/ur",
        tr: "/tr",
        it: "/it",
        ru: "/ru",
        zh: "/zh",
        "x-default": "/en",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming locale is supported
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Get messages for NextIntlClientProvider
  const messages = await getMessages();
  const isRtl = locale === "ar" || locale === "ur";

  const globalSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LiveTVServices",
    "url": "https://livetvservices.com",
    "logo": "https://livetvservices.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+447828932728",
      "contactType": "customer support",
      "availableLanguage": ["en", "es", "fr", "de", "pt", "ar", "hi", "ur", "tr", "it", "ru", "zh"]
    }
  };

  return (
    <html lang={locale} dir={isRtl ? "rtl" : "ltr"} className={`${sansFont.variable} ${displayFont.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-dark-bg text-[#F0F0FA] min-h-screen flex flex-col selection:bg-gold selection:text-dark-bg">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  if (localStorage.theme === 'light') {
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                  }
                } catch (_) {}
              })();
            `
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
        <NextIntlClientProvider messages={messages} locale={locale}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.06),rgba(0,0,0,0))] pointer-events-none z-0" />
          <Navbar locale={locale} />
          <main className="flex-grow z-10 relative">{children}</main>
          <Footer locale={locale} />
          <WhatsAppButton locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
