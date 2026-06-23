export default function CookiePolicyPage() {
  return (
    <div className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.03),transparent_50%)] pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-8">
          Cookie Policy
        </h1>
        <p className="text-gray-400 text-xs mb-8">Last Updated: June 23, 2026</p>

        <div className="flex flex-col gap-6 text-gray-300 text-sm leading-relaxed">
          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-lg text-white">1. What are Cookies?</h2>
            <p>
              Cookies are small text documents stored by your browser on your computer or mobile device. They help us remember login sessions, local language settings, and analyze site metrics.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-lg text-white">2. Types of Cookies We Use</h2>
            <p>
              We use necessary session cookies to maintain your shopping cart preferences, and analytical cookies to see where our visitors browse, helping us optimize page speed and layout. We do not use intrusive advertisement trackers.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-lg text-white">3. Disabling Cookies</h2>
            <p>
              You can configure your browser to reject all cookies or notify you before they are set. If you disable cookies, some sections of our marketing website (such as the language selector or pricing panels) may not load correctly.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
