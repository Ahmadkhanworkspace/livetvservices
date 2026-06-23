import blogs from "@/data/blogs.json";
import { Link } from "@/i18n/routing";
import { ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";

export default function BlogListingPage() {
  return (
    <div className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Tutorials & Help Resources
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl">
            Get professional advice on setting up media players, selecting packages, and resolving buffering issues on your home network.
          </p>
          <div className="h-1 w-12 bg-gold rounded-full" />
        </div>

        {/* Blog Post List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {blogs.map((post) => (
            <div
              key={post.slug}
              className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-white/5 hover:border-white/10 transition-all duration-300 group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{post.readTime}</span>
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-white group-hover:text-gold transition-colors duration-200 leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {post.intro}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold-hover font-semibold transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Support callout */}
        <div className="glass-panel border border-white/5 rounded-3xl p-8 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <BookOpen className="h-12 w-12 text-gold" />
          <h2 className="font-display font-bold text-2xl text-white">Have a technical issue not covered in our blog?</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
            Our technical engineers can resolve your queries immediately. Start a chat on WhatsApp, and we'll diagnose and fix your setup issues.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold to-yellow-600 hover:from-gold-hover hover:to-yellow-500 text-dark-bg text-sm font-bold shadow-md"
          >
            Chat with Engineer
          </Link>
        </div>

      </div>
    </div>
  );
}
