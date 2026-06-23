export default function DmcaPage() {
  return (
    <div className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.03),transparent_50%)] pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-8">
          DMCA Copyright Compliance
        </h1>
        <p className="text-gray-400 text-xs mb-8">Last Updated: June 23, 2026</p>

        <div className="flex flex-col gap-6 text-gray-300 text-sm leading-relaxed">
          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-lg text-white">1. Copyright Infringement Claims</h2>
            <p>
              LiveTVServices.com respects intellectual property rights. We do not host, store, or index video files, broadcast streams, or media archives on our own server storage. All feeds are linked dynamically from external web sources.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display font-bold text-lg text-white">2. Filing a Takedown Notice</h2>
            <p>
              If you are a copyright owner or authorized representative, and believe that streams indexed on our playlist infringe your copyrights, please contact our legal coordinator at:
            </p>
            <p className="font-semibold text-white mt-1 bg-white/5 border border-white/5 py-3 px-4 rounded-xl w-fit">
              legal@livetvservices.com
            </p>
            <p className="mt-2">
              Please include: (a) physical signature of the copyright owner, (b) description of the copyrighted work, (c) specific URLs or feed details, and (d) your full contact email. Upon receipt, we will remove links to infringing content within 48 business hours.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
