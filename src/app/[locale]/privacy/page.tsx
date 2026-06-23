export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.03),transparent_50%)] pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-8">
          Privacy Policy
        </h1>
        <p className="text-gray-400 text-xs mb-8">Last Updated: June 23, 2026</p>

        <div className="flex flex-col gap-6 text-gray-300 text-sm leading-relaxed">
          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-lg text-white">1. Information Collection</h2>
            <p>
              We collect the minimal data required to set up and support your subscription. This includes your name, email address, and billing details provided at checkout, alongside device details or setup preferences shared during support chats.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-lg text-white">2. Data Security & Encryption</h2>
            <p>
              Your payment information is processed through secure, SSL-encrypted merchant gateways. We do not store your credit card or account credentials on our database servers. Technical log files are deleted on a rolling basis.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-lg text-white">3. Third-Party Sharing</h2>
            <p>
              LiveTVServices.com does not sell, rent, or lease customer lists to third-party marketing companies. Data is only utilized to configure your streaming lines or coordinate support inquiries.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
