export default function RefundPolicyPage() {
  return (
    <div className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.03),transparent_50%)] pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-8">
          Refund & Money-Back Policy
        </h1>
        <p className="text-gray-400 text-xs mb-8">Last Updated: June 23, 2026</p>

        <div className="flex flex-col gap-6 text-gray-300 text-sm leading-relaxed">
          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-lg text-white">1. 7-Day Refund Guarantee</h2>
            <p>
              We stand behind the quality of our service. If you experience severe technical issues (such as constant channel buffering or server connection failures) that our team cannot fix, you are entitled to a full refund within 7 days of purchase.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-lg text-white">2. Technical Support Requirement</h2>
            <p>
              Before requesting a refund, we ask that you contact our 24/7 technical support team on WhatsApp. Most streaming errors are caused by incorrect application parameters, local DNS locks, or weak home Wi-Fi, which our team can fix in under 5 minutes.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-lg text-white">3. Non-Refundable Scenarios</h2>
            <p>
              Refunds will not be issued for change-of-mind requests after the initial 7-day window. We do not refund purchases made on expired accounts, or accounts terminated due to term violations (such as concurrent multi-screen sharing on a 1-connection package).
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
