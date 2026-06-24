import blogs from "@/data/blogs.json";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { ArrowLeft, Clock, Calendar, MessageSquare, BookOpen } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { getWhatsappNumber } from "@/app/api/whatsapp/route";

export async function generateStaticParams() {
  return blogs.map((b) => ({
    slug: b.slug,
  }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  const t = await getTranslations({ locale });
  const whatsappNumber = await getWhatsappNumber();
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    t("WhatsApp.message") + " [Blog: " + post.title + "]"
  )}`;

  // Programmatic JSON-LD Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": post.title,
    "description": post.intro,
    "datePublished": post.date,
    "inLanguage": locale,
    "author": {
      "@type": "Organization",
      "name": "LiveTVServices",
      "url": "https://livetvservices.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LiveTVServices",
      "logo": {
        "@type": "ImageObject",
        "url": "https://livetvservices.com/logo.png"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `https://livetvservices.com/${locale}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `https://livetvservices.com/${locale}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://livetvservices.com/${locale}/blog/${post.slug}`
      }
    ]
  };

  return (
    <div className="pt-32 pb-20 relative">
      {/* Dynamic JSON-LD Schema Injector */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.04),transparent_50%)] pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gold mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to blog index</span>
        </Link>

        {/* Article Meta */}
        <div className="flex items-center gap-4 text-xs text-gray-500 font-semibold mb-4">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            <span>{post.date}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            <span>{post.readTime}</span>
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-6">
          {post.title}
        </h1>
        
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed border-l-2 border-gold pl-4 italic mb-10">
          {post.intro}
        </p>

        {/* Sections */}
        <div className="flex flex-col gap-8 mb-16">
          {post.sections.map((sect, index) => (
            <div key={index} className="flex flex-col gap-3">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                {sect.heading}
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {sect.content}
              </p>
            </div>
          ))}
        </div>

        {/* Support call-out */}
        <div className="glass-panel border border-white/5 rounded-3xl p-8 text-center flex flex-col items-center gap-6 bg-gradient-to-br from-[#12121E] to-[#0A0A0F]">
          <BookOpen className="h-12 w-12 text-gold" />
          <h3 className="font-display font-bold text-2xl text-white">Need help implementing these steps?</h3>
          <p className="text-gray-400 text-sm sm:text-base">
            Don't get stuck in settings! Our technical engineers are online 24/7. Open a WhatsApp chat and we will configure the player app for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/pricing"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold to-yellow-600 hover:from-gold-hover hover:to-yellow-500 text-dark-bg text-sm font-bold shadow-md"
            >
              View Pricing Plans
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-bold flex items-center justify-center gap-2"
            >
              <MessageSquare className="h-4.5 w-4.5 text-gold" />
              <span>Get WhatsApp Support</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
