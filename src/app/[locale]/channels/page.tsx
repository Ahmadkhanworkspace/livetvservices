"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { 
  Tv, Trophy, Film, Baby, FileText, Newspaper, Globe, 
  Search, Check, Zap, HelpCircle, Activity 
} from "lucide-react";

export default function ChannelsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    {
      title: "Live Sports Broadcasts",
      description: "Watch live international athletic events, FIFA cups, league fixtures, motorsports, rugby, and cricket in full 50fps/60fps High Definition. Features backup streams to guarantee you never miss a match.",
      icon: Trophy,
      count: "1,500+ streams",
    },
    {
      title: "Movies & Cinema",
      description: "Dedicated movie channels broadcasting 24/7. Content categorized by genre: Action, Comedy, Drama, Thriller, Sci-Fi, Romance, and Classic Cinema with multilingual subtitles.",
      icon: Film,
      count: "2,000+ channels",
    },
    {
      title: "Kids & Family",
      description: "Safe and educational programs for children of all ages. Popular animated series, cartoon broadcasts, learning channels, and teen programs are available in multiple audio tracks.",
      icon: Baby,
      count: "800+ channels",
    },
    {
      title: "Documentaries & Science",
      description: "Explore nature, science, history, space, and travel through premium educational channels. Dive into high-definition documentaries from global broadcasting networks.",
      icon: FileText,
      count: "1,200+ channels",
    },
    {
      title: "24/7 Global News",
      description: "Stay informed with continuous live coverage from international news rooms in North America, Europe, Asia, and the Middle East. Real-time updates on politics, finance, and global events.",
      icon: Newspaper,
      count: "600+ channels",
    },
    {
      title: "International & Regional TV",
      description: "Access regional feeds in over 40 languages. Dedicated grids for UK, US, Canada, Australia, Spain, France, Germany, Latin America, Arabic nations, Turkey, India, and more.",
      icon: Globe,
      count: "12,000+ channels",
    },
  ];

  const sportsEvents = [
    { name: "FIFA World Cup & Qualifiers", status: "Live Coverage", badge: "FIFA" },
    { name: "UEFA Champions League & Europa", status: "Live Coverage", badge: "UEFA" },
    { name: "English Premier League (EPL)", status: "All Matches Live", badge: "EPL" },
    { name: "Spanish La Liga & Copa del Rey", status: "All Matches Live", badge: "LaLiga" },
    { name: "Formula 1 Grand Prix", status: "Full Race Weekend", badge: "F1" },
    { name: "NBA & NFL Playoffs", status: "All Matches Live", badge: "US Sports" },
  ];

  const channelsList = [
    // Sports
    { name: "Sky Sports Main Event Ultra HD", category: "Sports", region: "UK", hd: "4K UHD" },
    { name: "TNT Sports 1 HD (TNT Sports)", category: "Sports", region: "UK", hd: "1080p 60fps" },
    { name: "ESPN US HD", category: "Sports", region: "US", hd: "1080p 60fps" },
    { name: "beIN Sports HD 1 Premium", category: "Sports", region: "Arabic/FR", hd: "1080p 60fps" },
    { name: "DAZN 1 DE", category: "Sports", region: "DE", hd: "1080p" },
    { name: "SuperSport Grandstand HD", category: "Sports", region: "ZA", hd: "1080p 60fps" },
    { name: "Canal+ Sport HD", category: "Sports", region: "FR", hd: "1080p 60fps" },
    { name: "Fox Sports 1 US", category: "Sports", region: "US", hd: "1080p" },
    // Movies
    { name: "HBO Premium HD", category: "Movies", region: "US", hd: "1080p" },
    { name: "Sky Cinema Action HD", category: "Movies", region: "UK", hd: "1080p" },
    { name: "Canal+ Cinema HD", category: "Movies", region: "FR", hd: "1080p" },
    { name: "MGM HD", category: "Movies", region: "US", hd: "1080p" },
    // Entertainment
    { name: "BBC One HD", category: "Entertainment", region: "UK", hd: "1080p" },
    { name: "NBC East HD", category: "Entertainment", region: "US", hd: "1080p" },
    { name: "TF1 HD", category: "Entertainment", region: "FR", hd: "1080p" },
    { name: "Discovery Channel HD", category: "Entertainment", region: "Global", hd: "1080p" },
    // Kids
    { name: "Disney Channel HD", category: "Kids", region: "Global", hd: "1080p" },
    { name: "Nickelodeon HD", category: "Kids", region: "Global", hd: "1080p" },
    { name: "Cartoon Network HD", category: "Kids", region: "Global", hd: "1080p" },
  ];

  const filterCategories = ["All", "Sports", "Movies", "Entertainment", "Kids"];

  const filteredChannels = channelsList.filter((ch) => {
    const matchesSearch = ch.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          ch.region.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = activeCategory === "All" || ch.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-12">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Channel Categories & Live Sports
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl">
            LiveTVServices brings you over 18,000+ live television streams from around the globe, categorized by genre with full sports optimization.
          </p>
          <div className="h-1 w-12 bg-gold rounded-full" />
        </div>

        {/* Live Football & Sports Event Schedule highlight */}
        <section className="glass-panel rounded-3xl p-6 sm:p-8 border border-gold/30 bg-[#12121E]/80 mb-16 relative overflow-hidden keep-light">
          <div className="absolute top-0 right-0 h-40 w-40 bg-gold/5 blur-3xl rounded-full" />
          <div className="flex flex-col gap-6 relative z-10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gold/15 text-gold border border-gold/20">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-white">Live FIFA Football & Sports Coverage</h2>
                  <p className="text-gray-400 text-xs sm:text-sm mt-0.5">Stream your favorite teams with high frame-rate 50fps/60fps servers.</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs text-emerald-500 font-bold uppercase tracking-wide">
                <Activity className="h-3 w-3 animate-pulse shrink-0" />
                <span>Live Broadcasts Active</span>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sportsEvents.map((evt, idx) => (
                <div key={idx} className="bg-white/5 border border-white/5 p-4 rounded-2xl flex items-center justify-between hover:bg-white/10 transition-colors">
                  <div className="flex flex-col gap-1">
                    <span className="text-white text-sm font-semibold">{evt.name}</span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold animate-ping" />
                      <span>{evt.status}</span>
                    </span>
                  </div>
                  <span className="text-[10px] font-bold bg-gold text-dark-bg px-2 py-0.5 rounded-md uppercase tracking-wider shrink-0">
                    {evt.badge}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-2 text-center text-xs text-gray-400">
              ⚡ Coverage includes full local commentary options (English, Arabic, Spanish, French) and EPG schedule syncing.
            </div>
          </div>
        </section>

        {/* Categories Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20 max-w-5xl mx-auto">
          {categories.map((cat, i) => {
            const IconComponent = cat.icon;
            return (
              <div key={i} className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-white/5 hover:border-white/10 transition-all duration-300">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div className="p-3 rounded-xl bg-gold/5 text-gold border border-gold/10">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-bold text-gold bg-gold/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {cat.count}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mt-2">
                    {cat.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Channel Finder Section */}
        <section className="mb-20">
          <div className="text-center flex flex-col items-center gap-3 mb-10">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              Interactive Channel Directory
            </h2>
            <p className="text-gray-400 text-sm max-w-lg">
              Explore a preview of our premium global list. Search by channel name or region to test our grid layout.
            </p>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Category Filter buttons */}
              <div className="flex flex-wrap gap-2 justify-center">
                {filterCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                      activeCategory === cat
                        ? "bg-gold border-gold text-dark-bg shadow-md shadow-gold/15"
                        : "bg-white/5 border-white/5 text-gray-400 hover:text-white hover:border-white/10"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search channels or regions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all"
                />
              </div>
            </div>

            {/* Channels Directory Grid */}
            <div className="glass-panel border border-white/5 rounded-3xl p-6 overflow-hidden">
              {filteredChannels.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {filteredChannels.map((ch, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all"
                    >
                      <div className="flex flex-col gap-1 overflow-hidden pr-3">
                        <span className="text-white text-sm font-bold truncate">{ch.name}</span>
                        <span className="text-gray-500 text-[10px] uppercase font-semibold tracking-wider">
                          {ch.region} • {ch.category}
                        </span>
                      </div>
                      <span className="text-[10px] font-extrabold text-gold bg-gold/10 px-2 py-0.5 rounded border border-gold/10 uppercase tracking-wide shrink-0">
                        {ch.hd}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500 text-sm">
                  No channels match your current search parameters. Try searching for "Sports" or "Sky".
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Dynamic features footer */}
        <div className="glass-panel border border-white/5 rounded-3xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 justify-between text-center md:text-start">
          <div className="flex flex-col gap-2">
            <h3 className="font-display font-bold text-xl text-white">Full VOD Library Included</h3>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              Every plan also includes full access to our on-demand movie database (80,000+ titles) updated weekly with the latest global releases and series.
            </p>
          </div>
          <Link
            href="/pricing"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold to-yellow-600 hover:from-gold-hover hover:to-yellow-500 text-dark-bg text-sm font-bold shadow-md shrink-0"
          >
            Choose Subscription
          </Link>
        </div>

      </div>
    </div>
  );
}
