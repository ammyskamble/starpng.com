import React, { useState, useMemo } from 'react';
import {
  STAR_ASSETS,
  CATEGORIES,
  LEVELS,
  STYLES,
  USE_CASES,
  FORMAT_OPTIONS,
  INDUSTRIES,
  type StarAsset,
  type StarStyle,
  type StarUseCase,
  type AssetFormat,
  type IndustryTag,
} from '../data/stars';
import { injectColorShades } from '../utils/colorUtils';
import StarStudioModal from './StarStudioModal';
import {
  Search,
  Sliders,
  Copy,
  Check,
  Download,
  Sparkles,
  Zap,
  ShieldCheck,
  Cpu,
  Tag,
  FileCode,
  CheckCircle2,
  Layers,
  Palette,
  LayoutGrid,
  Gamepad2,
  X,
  Code,
} from 'lucide-react';

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
  // Faceted Filter States
  const [facetMode, setFacetMode] = useState<'style' | 'useCase' | 'category'>('style');
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [activeStyle, setActiveStyle] = useState<StarStyle | 'all'>('all');
  const [activeUseCase, setActiveUseCase] = useState<StarUseCase | 'all'>('all');
  const [activeFormat, setActiveFormat] = useState<AssetFormat | 'all'>('all');
  const [activeIndustry, setActiveIndustry] = useState<IndustryTag | 'all'>('all');
  const [activeLevel, setActiveLevel] = useState<string>('all');

  // Search & Tag
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isLiveAnimated, setIsLiveAnimated] = useState<boolean>(true);

  // Modals & Clipboards
  const [selectedStar, setSelectedStar] = useState<StarAsset | null>(null);
  const [isStudioOpen, setIsStudioOpen] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedType, setCopiedType] = useState<'png' | 'svg' | null>(null);

  // Compute format counts for toggle buttons
  const formatCounts = useMemo(() => {
    return {
      all: STAR_ASSETS.length,
      svg: STAR_ASSETS.filter((s) => s.primaryFormat === 'svg' || s.formats?.includes('svg')).length,
      png: STAR_ASSETS.filter((s) => s.primaryFormat === 'png' || s.formats?.includes('png')).length,
      animated: STAR_ASSETS.filter((s) => s.isAnimated).length,
    };
  }, []);

  // Filter stars by all active facets
  const filteredStars = useMemo(() => {
    return STAR_ASSETS.filter((star) => {
      // 1. Category match (when initial category is specified or category facet chosen)
      const matchesCategory = activeCategory === 'all' || star.category === activeCategory;

      // 2. Style facet match
      const matchesStyle = activeStyle === 'all' || star.style === activeStyle;

      // 3. Use Case / Function facet match
      const matchesUseCase = activeUseCase === 'all' || star.useCase === activeUseCase;

      // 4. Format-level grouping match
      const matchesFormat =
        activeFormat === 'all' ||
        (activeFormat === 'animated' && star.isAnimated) ||
        (activeFormat === 'svg' && (star.primaryFormat === 'svg' || star.formats?.includes('svg'))) ||
        (activeFormat === 'png' && (star.primaryFormat === 'png' || star.formats?.includes('png')));

      // 5. Semantic Industry tag match
      const matchesIndustry =
        activeIndustry === 'all' || (star.industries && star.industries.includes(activeIndustry as IndustryTag));

      // 6. Complexity level match
      const matchesLevel = activeLevel === 'all' || star.level === activeLevel;

      // 7. Search text match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        star.title.toLowerCase().includes(query) ||
        star.description.toLowerCase().includes(query) ||
        star.tags.some((t) => t.toLowerCase().includes(query)) ||
        (star.style && star.style.toLowerCase().includes(query)) ||
        (star.useCase && star.useCase.toLowerCase().includes(query)) ||
        (star.industries && star.industries.some((i) => i.toLowerCase().includes(query)));

      // 8. Popular Tag match
      const tag = selectedTag ? selectedTag.toLowerCase().trim() : '';
      const matchesTag =
        !tag ||
        star.title.toLowerCase().includes(tag) ||
        star.description.toLowerCase().includes(tag) ||
        star.tags.some((t) => t.toLowerCase().includes(tag)) ||
        star.category.toLowerCase().includes(tag) ||
        star.level.toLowerCase().includes(tag) ||
        (star.style && star.style.toLowerCase().includes(tag)) ||
        (star.useCase && star.useCase.toLowerCase().includes(tag));

      return (
        matchesCategory &&
        matchesStyle &&
        matchesUseCase &&
        matchesFormat &&
        matchesIndustry &&
        matchesLevel &&
        matchesSearch &&
        matchesTag
      );
    });
  }, [activeCategory, activeStyle, activeUseCase, activeFormat, activeIndustry, activeLevel, searchQuery, selectedTag]);

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

  const resetAllFilters = () => {
    setActiveCategory('all');
    setActiveStyle('all');
    setActiveUseCase('all');
    setActiveFormat('all');
    setActiveIndustry('all');
    setActiveLevel('all');
    setSearchQuery('');
    setSelectedTag(null);
  };

  const hasActiveFilters =
    activeCategory !== 'all' ||
    activeStyle !== 'all' ||
    activeUseCase !== 'all' ||
    activeFormat !== 'all' ||
    activeIndustry !== 'all' ||
    activeLevel !== 'all' ||
    Boolean(searchQuery) ||
    Boolean(selectedTag);

  // Quick 1-Click Copy Transparent PNG to OS Clipboard
  const handleQuickCopyPng = async (e: React.MouseEvent, star: StarAsset) => {
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
            await navigator.clipboard.write([new ClipboardItem({ 'image/png': pngBlob })]);
            setCopiedId(star.id);
            setCopiedType('png');
            setTimeout(() => {
              setCopiedId(null);
              setCopiedType(null);
            }, 2500);
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

  // Quick 1-Click Copy Raw Vector SVG Code to Clipboard
  const handleQuickCopySvg = async (e: React.MouseEvent, star: StarAsset) => {
    e.stopPropagation();
    try {
      const coloredContent = injectColorShades(star.svgContent, star.defaultColor, `svg_${star.id}`);
      const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${star.viewBox}" width="512" height="512">\n  ${coloredContent.trim()}\n</svg>`;
      await navigator.clipboard.writeText(svgCode);
      setCopiedId(star.id);
      setCopiedType('svg');
      setTimeout(() => {
        setCopiedId(null);
        setCopiedType(null);
      }, 2500);
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

      {/* Control Panel: Formats, Search, Facets, Industries */}
      <div className="mb-8 space-y-4 bg-white p-4 sm:p-5 rounded-2xl border border-[#ebebeb] shadow-xs">
        {/* 1. FORMAT-LEVEL GROUPING BAR */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pb-3 border-b border-[#f0f0f0]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-semibold uppercase text-[#171717] tracking-wider flex items-center gap-1.5">
              <FileCode className="w-4 h-4 text-amber-500" /> Asset Format:
            </span>
            <div className="inline-flex p-1 rounded-xl bg-[#f4f4f4] border border-[#ebebeb]">
              {FORMAT_OPTIONS.map((fmt) => {
                const isActive = activeFormat === fmt.id;
                const count = formatCounts[fmt.id as keyof typeof formatCounts] ?? STAR_ASSETS.length;
                return (
                  <button
                    key={fmt.id}
                    type="button"
                    onClick={() => setActiveFormat(fmt.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-white text-[#171717] shadow-xs font-semibold'
                        : 'text-[#666666] hover:text-[#171717]'
                    }`}
                    title={fmt.desc}
                  >
                    <span>{fmt.label}</span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                        isActive ? 'bg-[#171717] text-white' : 'bg-[#e5e5e5] text-[#666666]'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Metrics Badge & Live Animation Toggle */}
          <div className="flex items-center justify-end gap-2.5 text-xs text-[#8f8f8f] font-mono">
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
            <span className="text-[#171717] font-semibold bg-[#fafafa] px-3 py-1.5 rounded-full border border-[#ebebeb]">
              {filteredStars.length} of {STAR_ASSETS.length} Assets
            </span>
          </div>
        </div>

        {/* 2. SEARCH BAR & LEVEL FILTER */}
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
              placeholder="Search by keyword, style, industry, or tag (e.g. gaming, 3D, polaris, rating)..."
              className="w-full pl-10 pr-14 py-2 text-sm bg-white border border-[#ebebeb] rounded-xl text-[#171717] placeholder:text-[#8f8f8f] focus:outline-none focus:border-[#171717] focus:ring-1 focus:ring-[#171717] transition-all"
            />
            {(searchQuery || selectedTag) && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTag(null);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8f8f8f] hover:text-[#171717] font-medium cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Complexity Level Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            <span className="text-[#8f8f8f] font-mono text-[11px] uppercase tracking-wider mr-1 flex items-center gap-1 shrink-0">
              <Layers className="w-3.5 h-3.5 text-[#8f8f8f]" /> Level:
            </span>
            {LEVELS.map((lvl) => {
              const isLevelActive = activeLevel === lvl.id;
              return (
                <button
                  key={lvl.id}
                  type="button"
                  onClick={() => setActiveLevel(lvl.id)}
                  className={`whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
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
        </div>

        {/* 3. SEMANTIC INDUSTRY TAGS (Flaticon Utility Grouping) */}
        <div className="pt-2 border-t border-[#f0f0f0]">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="text-[#8f8f8f] font-mono text-[11px] uppercase tracking-wider mr-1 flex items-center gap-1 shrink-0">
              <Gamepad2 className="w-3.5 h-3.5 text-[#8f8f8f]" /> Industry / Utility:
            </span>
            <button
              type="button"
              onClick={() => setActiveIndustry('all')}
              className={`whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeIndustry === 'all'
                  ? 'bg-[#171717] text-white shadow-xs'
                  : 'bg-[#f4f4f4] hover:bg-[#ebebeb] text-[#4d4d4d] hover:text-[#171717]'
              }`}
            >
              All Industries
            </button>
            {INDUSTRIES.map((ind) => {
              const isActive = activeIndustry === ind.id;
              return (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => setActiveIndustry(ind.id)}
                  className={`whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs font-semibold'
                      : 'bg-[#f4f4f4] hover:bg-[#ebebeb] text-[#4d4d4d] hover:text-[#171717]'
                  }`}
                  title={ind.description}
                >
                  <span>{ind.emoji}</span>
                  <span>{ind.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. FACETED FILTERING: SEPARATING STYLE FROM FUNCTION */}
        <div className="pt-2 border-t border-[#f0f0f0] space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <span className="text-[#8f8f8f] font-mono text-[11px] uppercase tracking-wider mr-1 flex items-center gap-1 shrink-0">
                <Sliders className="w-3.5 h-3.5 text-[#8f8f8f]" /> Faceted View:
              </span>
              <div className="inline-flex p-0.5 rounded-lg bg-[#f0f0f0]">
                <button
                  type="button"
                  onClick={() => setFacetMode('style')}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                    facetMode === 'style'
                      ? 'bg-white text-[#171717] shadow-xs font-semibold'
                      : 'text-[#666666] hover:text-[#171717]'
                  }`}
                >
                  <Palette className="w-3 h-3 text-purple-600" />
                  <span>By Visual Style ({activeStyle === 'all' ? 'All' : activeStyle})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFacetMode('useCase')}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                    facetMode === 'useCase'
                      ? 'bg-white text-[#171717] shadow-xs font-semibold'
                      : 'text-[#666666] hover:text-[#171717]'
                  }`}
                >
                  <LayoutGrid className="w-3 h-3 text-emerald-600" />
                  <span>By Function & Use Case ({activeUseCase === 'all' ? 'All' : activeUseCase})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFacetMode('category')}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                    facetMode === 'category'
                      ? 'bg-white text-[#171717] shadow-xs font-semibold'
                      : 'text-[#666666] hover:text-[#171717]'
                  }`}
                >
                  <Tag className="w-3 h-3 text-blue-600" />
                  <span>Standard Categories</span>
                </button>
              </div>
            </div>

            {/* Popular Search Tags */}
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
              <span className="text-[10px] text-[#8f8f8f] font-mono mr-1">Hot:</span>
              {POPULAR_TAGS.slice(0, 5).map((tag) => (
                <button
                  key={tag.label}
                  type="button"
                  onClick={() => handleTagClick(tag.query)}
                  className={`text-[11px] px-2 py-0.5 rounded transition-all cursor-pointer ${
                    selectedTag === tag.query
                      ? 'bg-[#171717] text-white'
                      : 'bg-[#fafafa] hover:bg-[#ebebeb] text-[#666666]'
                  }`}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>

          {/* Facet Mode: STYLE PILLS */}
          {facetMode === 'style' && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {STYLES.map((st) => {
                const isActive = activeStyle === st.id;
                return (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setActiveStyle(st.id)}
                    className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'bg-purple-700 text-white shadow-xs font-semibold'
                        : 'bg-white border border-[#ebebeb] text-[#4d4d4d] hover:border-[#171717] hover:text-[#171717]'
                    }`}
                  >
                    {st.name}
                  </button>
                );
              })}
            </div>
          )}

          {/* Facet Mode: USE CASE & FUNCTION PILLS */}
          {facetMode === 'useCase' && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {USE_CASES.map((uc) => {
                const isActive = activeUseCase === uc.id;
                return (
                  <button
                    key={uc.id}
                    type="button"
                    onClick={() => setActiveUseCase(uc.id)}
                    className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'bg-emerald-700 text-white shadow-xs font-semibold'
                        : 'bg-white border border-[#ebebeb] text-[#4d4d4d] hover:border-[#171717] hover:text-[#171717]'
                    }`}
                  >
                    {uc.name}
                  </button>
                );
              })}
            </div>
          )}

          {/* Facet Mode: STANDARD CATEGORY PILLS */}
          {facetMode === 'category' && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
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
                    className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#171717] text-white shadow-xs font-semibold'
                        : 'bg-white border border-[#ebebeb] text-[#4d4d4d] hover:border-[#171717] hover:text-[#171717]'
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* 5. ACTIVE FILTER CHIP SUMMARY & RESET BAR */}
        {hasActiveFilters && (
          <div className="pt-2 border-t border-[#f0f0f0] flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[#8f8f8f] text-[11px] font-mono">Active Filters:</span>
              {activeFormat !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-[11px]">
                  Format: {activeFormat.toUpperCase()}
                  <button type="button" onClick={() => setActiveFormat('all')} className="hover:text-black">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {activeStyle !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-900 border border-purple-200 text-[11px]">
                  Style: {activeStyle}
                  <button type="button" onClick={() => setActiveStyle('all')} className="hover:text-black">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {activeUseCase !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-[11px]">
                  Function: {activeUseCase}
                  <button type="button" onClick={() => setActiveUseCase('all')} className="hover:text-black">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {activeIndustry !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-[11px]">
                  Industry: {activeIndustry}
                  <button type="button" onClick={() => setActiveIndustry('all')} className="hover:text-black">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {activeCategory !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-900 border border-gray-300 text-[11px]">
                  Category: {activeCategory}
                  <button type="button" onClick={() => setActiveCategory('all')} className="hover:text-black">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {activeLevel !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-900 border border-gray-300 text-[11px]">
                  Level: {activeLevel}
                  <button type="button" onClick={() => setActiveLevel('all')} className="hover:text-black">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-900 border border-gray-300 text-[11px]">
                  Query: "{searchQuery}"
                  <button type="button" onClick={() => setSearchQuery('')} className="hover:text-black">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={resetAllFilters}
              className="text-xs text-red-600 hover:text-red-700 font-medium underline cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Grid of Star Assets */}
      {filteredStars.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-xl border border-[#ebebeb]">
          <Sparkles className="w-8 h-8 text-[#8f8f8f] mx-auto mb-3" />
          <h3 className="text-base font-semibold text-[#171717] mb-1">No star graphics match your filters</h3>
          <p className="text-xs text-[#8f8f8f] mb-4">Try clearing one or more active facets, switching formats, or resetting filters.</p>
          <button
            type="button"
            onClick={resetAllFilters}
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
                  {/* Top Left: Category & Facet Style Badge */}
                  <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 flex-wrap max-w-[70%]">
                    <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-white/95 backdrop-blur-xs text-[#4d4d4d] rounded-sm border border-[#ebebeb]">
                      {star.categoryName}
                    </span>
                    {star.style && (
                      <span className="px-1.5 py-0.5 text-[9px] font-mono font-medium text-purple-800 bg-purple-50/90 backdrop-blur-xs rounded-sm border border-purple-200">
                        {star.style}
                      </span>
                    )}
                  </div>

                  {/* Top Right: Format & Animation Badges */}
                  <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1">
                    {star.animationType && (
                      <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold text-violet-700 bg-violet-100/90 backdrop-blur-xs rounded-sm border border-violet-300 flex items-center gap-0.5">
                        <Sparkles className="w-2.5 h-2.5" /> LIVE
                      </span>
                    )}
                    {star.primaryFormat === 'png' ? (
                      <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold text-amber-800 bg-amber-50/95 backdrop-blur-xs rounded-sm border border-amber-200">
                        PNG
                      </span>
                    ) : (
                      <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold text-blue-700 bg-blue-50/95 backdrop-blur-xs rounded-sm border border-blue-200">
                        SVG
                      </span>
                    )}
                  </div>

                  {/* SVG Star Illustration with dynamic 3D gradient / shading & live animation */}
                  <div
                    className={`w-3/4 h-3/4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 drop-shadow-sm ${
                      isLiveAnimated && star.animationType ? `animate-star-${star.animationType}` : ''
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${star.viewBox}" class="w-full h-full">${injectColorShades(star.svgContent, star.defaultColor, star.id)}</svg>`,
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
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <h3 className="font-semibold text-sm text-[#171717] tracking-tight group-hover:text-[#0070F3] transition-colors truncate">
                        {star.title}
                      </h3>
                    </div>

                    <p className="text-xs text-[#8f8f8f] line-clamp-2 leading-relaxed mb-2.5">
                      {star.description}
                    </p>

                    {/* Semantic Industry Tags */}
                    {star.industries && star.industries.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-2">
                        {star.industries.slice(0, 2).map((ind) => {
                          const info = INDUSTRIES.find((i) => i.id === ind);
                          return (
                            <span
                              key={ind}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-[#f4f4f4] text-[#4d4d4d] border border-[#ebebeb] flex items-center gap-1"
                            >
                              <span>{info?.emoji}</span>
                              <span>{info?.name.split(' ')[0]}</span>
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Format-Aware Quick Action Bar */}
                  <div className="mt-3 pt-3 border-t border-[#ebebeb] flex items-center justify-between gap-2">
                    {/* 1-Click Fast Copy PNG */}
                    <button
                      type="button"
                      onClick={(e) => handleQuickCopyPng(e, star)}
                      title="Direct Copy Transparent PNG to OS Clipboard (Ctrl+V into Figma/Canva)"
                      className={`flex-1 py-1.5 px-2.5 rounded-full text-xs font-medium flex items-center justify-center gap-1 transition-all cursor-pointer ${
                        isCopied && copiedType === 'png'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                          : 'bg-[#fafafa] hover:bg-[#171717] text-[#171717] hover:text-white border border-[#ebebeb]'
                      }`}
                    >
                      {isCopied && copiedType === 'png' ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>PNG</span>
                        </>
                      )}
                    </button>

                    {/* 1-Click Copy SVG Vector Code */}
                    <button
                      type="button"
                      onClick={(e) => handleQuickCopySvg(e, star)}
                      title="Copy Scalable Vector SVG code to clipboard"
                      className={`py-1.5 px-2.5 rounded-full text-xs font-medium flex items-center justify-center gap-1 transition-all cursor-pointer ${
                        isCopied && copiedType === 'svg'
                          ? 'bg-blue-50 text-blue-700 border border-blue-300'
                          : 'bg-white hover:bg-blue-50 text-[#4d4d4d] hover:text-blue-700 border border-[#ebebeb]'
                      }`}
                    >
                      {isCopied && copiedType === 'svg' ? (
                        <Check className="w-3 h-3 text-blue-600" />
                      ) : (
                        <Code className="w-3 h-3" />
                      )}
                      <span>SVG</span>
                    </button>

                    {/* Customize Studio Trigger */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openStudio(star);
                      }}
                      title="Open in Customizer Studio (Recolor, Resize, 4K Export)"
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
      <StarStudioModal star={selectedStar} isOpen={isStudioOpen} onClose={() => setIsStudioOpen(false)} />
    </div>
  );
}
