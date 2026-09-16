import React, { useState, useMemo } from 'react';
import { STAR_ASSETS, CATEGORIES, LEVELS, type StarAsset } from '../data/stars';
import { injectColorShades } from '../utils/colorUtils';
import StarStudioModal from './StarStudioModal';
import { Search, Sliders, Copy, Check, Download, Sparkles, Zap, ShieldCheck, Cpu, Tag, FileCode, CheckCircle2, Lock, Layers } from 'lucide-react';

interface StarCatalogProps {
  initialCategory?: string;
}

const POPULAR_TAGS = [
  { label: 'Star Bears', query: 'bear' },
  { label: 'Star Stickers', query: 'sticker' },
  { label: 'Animated Stars', query: 'animated' },
  { label: 'Star Moon', query: 'moon' },
  { label: 'Star Frames', query: 'frame' },
  { label: 'UI Star Icons', query: 'ui-' },
  { label: '5-Star Rating', query: 'rating' },
  { label: '3D Faceted Gold', query: 'faceted' },
  { label: 'Lens Flare FX', query: 'flare' },
  { label: 'Y2K Cyber', query: 'y2k' },
  { label: 'Star Badges', query: 'badge' },
  { label: 'Cute Kawaii', query: 'kawaii' },
];

export default function StarCatalog({ initialCategory = 'all' }: StarCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [activeLevel, setActiveLevel] = useState<string>('all');
  const [isLiveAnimated, setIsLiveAnimated] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedStar, setSelectedStar] = useState<StarAsset | null>(null);
  const [isStudioOpen, setIsStudioOpen] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Filter stars by category, level, search query, and active tags
  const filteredStars = useMemo(() => {
    return STAR_ASSETS.filter((star) => {
      const matchesCategory = activeCategory === 'all' || star.category === activeCategory;
      const matchesLevel = activeLevel === 'all' || star.level === activeLevel;
      const query = searchQuery.toLowerCase().trim();
      const tag = selectedTag ? selectedTag.toLowerCase().trim() : '';

      const matchesSearch =
        !query ||
        star.title.toLowerCase().includes(query) ||
        star.description.toLowerCase().includes(query) ||
        star.tags.some((t) => t.toLowerCase().includes(query));

      const matchesTag =
        !tag ||
        star.title.toLowerCase().includes(tag) ||
        star.description.toLowerCase().includes(tag) ||
        star.tags.some((t) => t.toLowerCase().includes(tag)) ||
        star.category.toLowerCase().includes(tag) ||
        star.level.toLowerCase().includes(tag);

      return matchesCategory && matchesLevel && matchesSearch && matchesTag;
    });
  }, [activeCategory, activeLevel, searchQuery, selectedTag]);

  const openStudio = (star: StarAsset) => {
    setSelectedStar(star);
    setIsStudioOpen(true);
  };

  const handleTagClick = (tagQuery: string) => {
    if (selectedTag === tagQuery) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tagQuery);
      setSearchQuery('');
    }
  };

  // Quick 1-Click Copy directly from card
  const handleQuickCopy = async (e: React.MouseEvent, star: StarAsset) => {
    e.stopPropagation();
    try {
      const coloredContent = injectColorShades(star.svgContent, star.defaultColor, `quick_${star.id}`);
      const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${star.viewBox}" width="1024" height="1024">${coloredContent}</svg>`;
      const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const img = new Image();

      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.clearRect(0, 0, 1024, 1024);
        ctx.drawImage(img, 0, 0, 1024, 1024);
        URL.revokeObjectURL(url);

        canvas.toBlob(async (pngBlob) => {
          if (pngBlob && navigator.clipboard && window.ClipboardItem) {
            await navigator.clipboard.write([
              new ClipboardItem({ 'image/png': pngBlob })
            ]);
            setCopiedId(star.id);
            setTimeout(() => setCopiedId(null), 2500);
          } else {
            const link = document.createElement('a');
            link.download = `${star.slug}-transparent.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
          }
        }, 'image/png');
      };
      img.src = url;
    } catch (err) {
      console.error(err);
      openStudio(star);
    }
  };

  return (
    <div className="w-full">
      {/* Competitor Differentiator Banner: StarPNG vs Flaticon */}
      <div className="mb-6 p-3.5 bg-white border border-[#ebebeb] rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs shadow-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#171717] flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Why StarPNG beats Flaticon:
          </span>
          <span className="text-[#4d4d4d] hidden sm:inline">
            Free Vector SVGs (Flaticon paywalls SVGs at $12/mo) &bull; 4K 2048px (Flaticon caps at 512px) &bull; Zero attribution required.
          </span>
        </div>
        <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-medium">
          <ShieldCheck className="w-3.5 h-3.5" /> 100% Free CC0 License
        </div>
      </div>

      {/* Top Filter & Search Bar */}
      <div className="mb-6 space-y-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8f8f8f]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSelectedTag(null);
              }}
              placeholder="Search 160k+ star styles (e.g. AI star, 3D, Y2K, 5-star rating, gold)..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-[#ebebeb] rounded-lg text-[#171717] placeholder:text-[#8f8f8f] focus:outline-none focus:border-[#171717] focus:ring-1 focus:ring-[#171717] transition-all shadow-xs"
            />
            {(searchQuery || selectedTag) && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTag(null);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8f8f8f] hover:text-[#171717] font-medium"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Metrics Badge & Live Animation Toggle */}
          <div className="flex items-center gap-2.5 text-xs text-[#8f8f8f] font-mono">
            <button
              type="button"
              onClick={() => setIsLiveAnimated(!isLiveAnimated)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                isLiveAnimated
                  ? 'bg-amber-50 border-amber-300 text-amber-900 font-semibold'
                  : 'bg-white border-[#ebebeb] text-[#8f8f8f]'
              }`}
              title="Toggle live animations on stars"
            >
              <Sparkles className={`w-3.5 h-3.5 ${isLiveAnimated ? 'text-amber-500 animate-spin' : 'text-[#8f8f8f]'}`} />
              <span>{isLiveAnimated ? 'Live Animation ON' : 'Animation OFF'}</span>
            </button>
            <span className="hidden lg:flex items-center gap-1 text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
              <Cpu className="w-3.5 h-3.5" /> AI & 3D Vector Shading
            </span>
            <span className="text-[#171717] font-semibold">{filteredStars.length} Assets Found</span>
          </div>
        </div>

        {/* Flaticon-style Related Keyword Tag Cloud */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-[#8f8f8f] font-mono text-[11px] uppercase tracking-wider mr-1 flex items-center gap-1 shrink-0">
            <Tag className="w-3 h-3 text-[#8f8f8f]" /> Related:
          </span>
          {POPULAR_TAGS.map((tag) => {
            const isTagActive = selectedTag === tag.query;
            return (
              <button
                key={tag.label}
                type="button"
                onClick={() => handleTagClick(tag.query)}
                className={`whitespace-nowrap px-2.5 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                  isTagActive
                    ? 'bg-[#171717] text-white shadow-xs'
                    : 'bg-[#f4f4f4] hover:bg-[#ebebeb] text-[#4d4d4d] hover:text-[#171717]'
                }`}
              >
                {tag.label}
              </button>
            );
          })}
        </div>

        {/* Complexity Level Filter Pills (Basic, Moderate, High-Level) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-[#8f8f8f] font-mono text-[11px] uppercase tracking-wider mr-1 flex items-center gap-1 shrink-0">
            <Layers className="w-3 h-3 text-[#8f8f8f]" /> Complexity:
          </span>
          {LEVELS.map((lvl) => {
            const isLevelActive = activeLevel === lvl.id;
            return (
              <button
                key={lvl.id}
                type="button"
                onClick={() => setActiveLevel(lvl.id)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  isLevelActive
                    ? 'bg-[#171717] text-white shadow-xs'
                    : 'bg-white border border-[#ebebeb] text-[#4d4d4d] hover:border-[#171717] hover:text-[#171717]'
                }`}
              >
                {lvl.id === 'basic' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>}
                {lvl.id === 'moderate' && <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>}
                {lvl.id === 'high' && <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>}
                {lvl.name}
              </button>
            );
          })}
        </div>

        {/* Category Pills (@DESIGN.md button-category-pill) */}
        <div className="flex items-center gap-2 overflow-x-auto pt-1 pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedTag(null);
                }}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#171717] text-white shadow-xs'
                    : 'bg-white border border-[#ebebeb] text-[#4d4d4d] hover:border-[#171717] hover:text-[#171717]'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Star Assets */}
      {filteredStars.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-xl border border-[#ebebeb]">
          <Sparkles className="w-8 h-8 text-[#8f8f8f] mx-auto mb-3" />
          <h3 className="text-base font-semibold text-[#171717] mb-1">No star graphics match your search</h3>
          <p className="text-xs text-[#8f8f8f] mb-4">Try clicking one of the popular tags above or reset your filters.</p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory('all');
              setActiveLevel('all');
              setSearchQuery('');
              setSelectedTag(null);
            }}
            className="px-4 py-2 text-xs font-medium rounded-full bg-[#171717] text-white hover:bg-black transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredStars.map((star) => {
            const isCopied = copiedId === star.id;
            return (
              <div
                key={star.id}
                onClick={() => openStudio(star)}
                className="group relative bg-white rounded-xl border border-[#ebebeb] hover:border-[#171717] transition-all duration-200 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md cursor-pointer"
              >
                {/* Visual Preview Stage */}
                <div className="relative w-full aspect-square p-6 flex items-center justify-center checkerboard-bg border-b border-[#ebebeb] overflow-hidden">
                  {/* Category Pill Tag & Level Badge */}
                  <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5">
                    <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-white/90 backdrop-blur-xs text-[#4d4d4d] rounded-sm border border-[#ebebeb]">
                      {star.categoryName}
                    </span>
                    {star.level === 'high' && (
                      <span className="px-1.5 py-0.5 text-[9px] font-mono font-semibold text-amber-800 bg-amber-100/90 backdrop-blur-xs rounded-sm border border-amber-300">
                        3D / FX
                      </span>
                    )}
                    {star.level === 'moderate' && (
                      <span className="px-1.5 py-0.5 text-[9px] font-mono text-purple-700 bg-purple-50/90 backdrop-blur-xs rounded-sm border border-purple-200">
                        Stylized
                      </span>
                    )}
                    {star.level === 'basic' && (
                      <span className="px-1.5 py-0.5 text-[9px] font-mono text-emerald-700 bg-emerald-50/90 backdrop-blur-xs rounded-sm border border-emerald-200">
                        Basic
                      </span>
                    )}
                  </div>

                  {/* Right Header Badges: Animated & SVG */}
                  <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1">
                    {star.animationType && (
                      <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold text-violet-700 bg-violet-100/90 backdrop-blur-xs rounded-sm border border-violet-300 flex items-center gap-0.5">
                        <Sparkles className="w-2.5 h-2.5" /> LIVE
                      </span>
                    )}
                    <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold text-blue-700 bg-blue-50/95 backdrop-blur-xs rounded-sm border border-blue-200">
                      SVG+PNG
                    </span>
                  </div>

                  {/* SVG Star Illustration with dynamic 3D gradient / shading & live animation */}
                  <div
                    className={`w-3/4 h-3/4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 drop-shadow-sm ${
                      isLiveAnimated && star.animationType ? `animate-star-${star.animationType}` : ''
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${star.viewBox}" class="w-full h-full">${injectColorShades(star.svgContent, star.defaultColor, star.id)}</svg>`
                    }}
                  />

                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-xs text-[#171717] text-xs font-medium border border-[#ebebeb] shadow-sm flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5" />
                      Open Studio
                    </span>
                  </div>
                </div>

                {/* Card Info & Quick Actions */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-semibold text-sm text-[#171717] tracking-tight group-hover:text-[#0070F3] transition-colors">
                      {star.title}
                    </h3>
                    <p className="text-xs text-[#8f8f8f] line-clamp-2 mt-1 leading-relaxed">
                      {star.description}
                    </p>
                  </div>

                  {/* Action Bar */}
                  <div className="mt-4 pt-3 border-t border-[#ebebeb] flex items-center justify-between gap-2">
                    {/* 1-Click Fast Copy to Clipboard */}
                    <button
                      type="button"
                      onClick={(e) => handleQuickCopy(e, star)}
                      title="Direct Copy Transparent PNG to OS Clipboard"
                      className={`flex-1 py-1.5 px-2.5 rounded-full text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        isCopied 
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-300' 
                          : 'bg-[#fafafa] hover:bg-[#171717] text-[#171717] hover:text-white border border-[#ebebeb]'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>Copied PNG!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Quick Copy</span>
                        </>
                      )}
                    </button>

                    {/* Customize Studio Trigger */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openStudio(star);
                      }}
                      title="Change color, size, and download"
                      className="p-1.5 rounded-full bg-white border border-[#ebebeb] hover:border-[#171717] text-[#4d4d4d] hover:text-[#171717] transition-all cursor-pointer"
                      aria-label={`Open customizer for ${star.title}`}
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Interactive Studio Modal */}
      <StarStudioModal
        star={selectedStar}
        isOpen={isStudioOpen}
        onClose={() => setIsStudioOpen(false)}
      />
    </div>
  );
}
