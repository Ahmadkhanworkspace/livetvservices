import { Link } from "@/i18n/routing";

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.03),transparent_50%)] pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-8">
          Terms of Service
        </h1>
        <p className="text-gray-400 text-xs mb-8">Last Updated: June 23, 2026</p>

        <div className="flex flex-col gap-6 text-gray-300 text-sm leading-relaxed">
          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-lg text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing and purchasing subscription plans from LiveTVServices.com, you agree to comply with and be bound by the following terms and conditions. If you disagree with any part of these terms, you are prohibited from utilizing our streaming network.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-lg text-white">2. Subscription Usage & Screen Limits</h2>
            <p>
              Each active subscription is allocated a specific number of concurrent connections (default is 1 active stream). Attempting to utilize the same subscription details across multiple screens simultaneously is a violation of these terms. If our system detects multi-screen sharing on a single connection package, your access credentials may be automatically suspended.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-lg text-white">3. Network Stability & Local Throttling</h2>
            <p>
              LiveTVServices does not guarantee that streams will be completely error-free or uninterrupted. Streaming quality depends on your local internet service provider (ISP), home Wi-Fi signal, and local routing nodes. We are not liable for ISP throttling, censorship blocks, or device compatibility issues, though we offer 24/7 technical advice to bypass these.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-lg text-white">4. Account Expiration & Renewal</h2>
            <p>
              Subscriptions are one-time payments. We do not automatically bill your payment method. Once your subscription cycle expires, your access is terminated unless you purchase a renewal package.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
