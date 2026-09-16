import React, { useState, useRef } from 'react';
import {
  generateStarPolygonPoints,
  generateCurvedStarPath,
  generateFacetedStar3D,
  generateLensFlareSvg,
  generateRatingBarSvg,
} from '../utils/starGenerator';
import { generateColorShades } from '../utils/colorUtils';
import {
  Sliders,
  Copy,
  Download,
  Check,
  Sparkles,
  Wand2,
  Maximize2,
  Palette,
  ShieldCheck,
  FileCode,
  Layers,
  Box,
  Sun,
  Star as StarIcon,
  Zap,
  Award,
} from 'lucide-react';

type GeneratorMode = 'geometric' | '3d-faceted' | 'lens-flare' | 'rating-bar' | 'neon';
type ComplexityLevel = 'all' | 'basic' | 'moderate' | 'high';

interface PresetItem {
  name: string;
  level: 'basic' | 'moderate' | 'high';
  mode: GeneratorMode;
  apply: () => void;
}

const COLOR_PRESETS = [
  { name: 'Gold', hex: '#F59E0B' },
  { name: 'Yellow', hex: '#EAB308' },
  { name: 'Cyan Flare', hex: '#06B6D4' },
  { name: 'Neon Violet', hex: '#7928CA' },
  { name: 'Hot Pink', hex: '#FF0080' },
  { name: 'Emerald', hex: '#10B981' },
  { name: 'Midnight', hex: '#171717' },
  { name: 'Pure White', hex: '#FFFFFF' },
];

export default function StarGeneratorStudio() {
  // Mode & Level State
  const [activeMode, setActiveMode] = useState<GeneratorMode>('geometric');
  const [selectedPresetLevel, setSelectedPresetLevel] = useState<ComplexityLevel>('all');

  // Geometric Mode Parameters
  const [points, setPoints] = useState<number>(5);
  const [innerRadius, setInnerRadius] = useState<number>(0.42);
  const [curved, setCurved] = useState<boolean>(false);
  const [curveFactor, setCurveFactor] = useState<number>(0.5);
  const [rotation, setRotation] = useState<number>(0);
  const [isOutline, setIsOutline] = useState<boolean>(false);
  const [strokeWidth, setStrokeWidth] = useState<number>(4);
  const [isStickerMode, setIsStickerMode] = useState<boolean>(false);
  const [stickerBorderWidth, setStickerBorderWidth] = useState<number>(12);

  // 3D Faceted Mode Parameters
  const [points3D, setPoints3D] = useState<number>(5);
  const [innerRadius3D, setInnerRadius3D] = useState<number>(0.42);
  const [lightAngle, setLightAngle] = useState<number>(315);
  const [material3D, setMaterial3D] = useState<'gold' | 'chrome' | 'roseGold' | 'ruby' | 'emerald' | 'obsidian'>('gold');
  const [glint3D, setGlint3D] = useState<boolean>(true);

  // Optical Lens Flare Parameters
  const [flareSpikes, setFlareSpikes] = useState<2 | 4 | 6 | 8>(4);
  const [streakLength, setStreakLength] = useState<number>(1.2);
  const [coreGlow, setCoreGlow] = useState<number>(0.85);
  const [dustCount, setDustCount] = useState<number>(16);
  const [haloRing, setHaloRing] = useState<boolean>(true);

  // Rating Bar Parameters
  const [ratingValue, setRatingValue] = useState<number>(4.5);
  const [ratingSpacing, setRatingSpacing] = useState<number>(8);
  const [activeRatingColor, setActiveRatingColor] = useState<string>('#F59E0B');
  const [inactiveRatingColor, setInactiveRatingColor] = useState<string>('#E2E8F0');

  // Shared Global Colors & Exports
  const [activeColor, setActiveColor] = useState<string>('#F59E0B');
  const [resolution, setResolution] = useState<number>(1024);
  const [bgMode, setBgMode] = useState<'checker' | 'dark' | 'white'>('checker');
  const [copiedStatus, setCopiedStatus] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const shades = generateColorShades(activeColor);

  // Curated Preset Library
  const PRESET_LIBRARY: PresetItem[] = [
    // --- BASIC PRESETS ---
    {
      name: 'Flaticon Die-Cut Sticker',
      level: 'basic',
      mode: 'geometric',
      apply: () => {
        setActiveMode('geometric');
        setPoints(5);
        setInnerRadius(0.42);
        setCurved(false);
        setIsOutline(false);
        setIsStickerMode(true);
        setStickerBorderWidth(12);
        setActiveColor('#FDE047');
      },
    },
    {
      name: 'Classic 5-Star',
      level: 'basic',
      mode: 'geometric',
      apply: () => {
        setActiveMode('geometric');
        setPoints(5);
        setInnerRadius(0.42);
        setCurved(false);
        setIsOutline(false);
        setIsStickerMode(false);
        setActiveColor('#F59E0B');
      },
    },
    {
      name: '4-Point Diamond',
      level: 'basic',
      mode: 'geometric',
      apply: () => {
        setActiveMode('geometric');
        setPoints(4);
        setInnerRadius(0.28);
        setCurved(false);
        setIsOutline(false);
        setActiveColor('#06B6D4');
      },
    },
    {
      name: '6-Point Hexagram',
      level: 'basic',
      mode: 'geometric',
      apply: () => {
        setActiveMode('geometric');
        setPoints(6);
        setInnerRadius(0.58);
        setCurved(false);
        setIsOutline(false);
        setActiveColor('#3B82F6');
      },
    },
    {
      name: '8-Point Compass',
      level: 'basic',
      mode: 'geometric',
      apply: () => {
        setActiveMode('geometric');
        setPoints(8);
        setInnerRadius(0.4);
        setCurved(false);
        setIsOutline(false);
        setActiveColor('#171717');
      },
    },
    {
      name: '16-Point Promo Burst',
      level: 'basic',
      mode: 'geometric',
      apply: () => {
        setActiveMode('geometric');
        setPoints(16);
        setInnerRadius(0.8);
        setCurved(false);
        setIsOutline(false);
        setActiveColor('#E11D48');
      },
    },
    {
      name: 'Minimal Star Outline',
      level: 'basic',
      mode: 'geometric',
      apply: () => {
        setActiveMode('geometric');
        setPoints(5);
        setInnerRadius(0.45);
        setCurved(false);
        setIsOutline(true);
        setStrokeWidth(5);
        setActiveColor('#171717');
      },
    },
    {
      name: '5.0 Solid Rating Bar',
      level: 'basic',
      mode: 'rating-bar',
      apply: () => {
        setActiveMode('rating-bar');
        setRatingValue(5);
        setActiveRatingColor('#F59E0B');
      },
    },

    // --- MODERATE PRESETS ---
    {
      name: 'Y2K 4-Point Spike',
      level: 'moderate',
      mode: 'geometric',
      apply: () => {
        setActiveMode('geometric');
        setPoints(4);
        setInnerRadius(0.12);
        setCurved(true);
        setCurveFactor(0.7);
        setIsOutline(false);
        setActiveColor('#00F0FF');
      },
    },
    {
      name: 'AI Gemini Sparkle',
      level: 'moderate',
      mode: 'geometric',
      apply: () => {
        setActiveMode('geometric');
        setPoints(4);
        setInnerRadius(0.18);
        setCurved(true);
        setCurveFactor(0.65);
        setIsOutline(false);
        setActiveColor('#3B82F6');
      },
    },
    {
      name: 'Cyber Neon Glow',
      level: 'moderate',
      mode: 'neon',
      apply: () => {
        setActiveMode('neon');
        setPoints(4);
        setInnerRadius(0.18);
        setCurved(false);
        setActiveColor('#7928CA');
      },
    },
    {
      name: '4.5 Star Review Bar',
      level: 'moderate',
      mode: 'rating-bar',
      apply: () => {
        setActiveMode('rating-bar');
        setRatingValue(4.5);
        setActiveRatingColor('#F59E0B');
      },
    },

    // --- HIGH-LEVEL PRESETS ---
    {
      name: '3D Gold Trophy Star',
      level: 'high',
      mode: '3d-faceted',
      apply: () => {
        setActiveMode('3d-faceted');
        setPoints3D(5);
        setInnerRadius3D(0.42);
        setMaterial3D('gold');
        setLightAngle(315);
        setGlint3D(true);
      },
    },
    {
      name: '3D Platinum Chrome Star',
      level: 'high',
      mode: '3d-faceted',
      apply: () => {
        setActiveMode('3d-faceted');
        setPoints3D(5);
        setInnerRadius3D(0.42);
        setMaterial3D('chrome');
        setLightAngle(300);
        setGlint3D(true);
      },
    },
    {
      name: '3D Ruby Crystal Gem',
      level: 'high',
      mode: '3d-faceted',
      apply: () => {
        setActiveMode('3d-faceted');
        setPoints3D(6);
        setInnerRadius3D(0.48);
        setMaterial3D('ruby');
        setLightAngle(330);
        setGlint3D(true);
      },
    },
    {
      name: 'Anamorphic Lens Flare',
      level: 'high',
      mode: 'lens-flare',
      apply: () => {
        setActiveMode('lens-flare');
        setFlareSpikes(4);
        setStreakLength(1.3);
        setCoreGlow(0.9);
        setDustCount(18);
        setHaloRing(true);
        setActiveColor('#38BDF8');
      },
    },
    {
      name: 'Stardust Supernova Burst',
      level: 'high',
      mode: 'lens-flare',
      apply: () => {
        setActiveMode('lens-flare');
        setFlareSpikes(8);
        setStreakLength(1.1);
        setCoreGlow(0.95);
        setDustCount(20);
        setHaloRing(true);
        setActiveColor('#F59E0B');
      },
    },
  ];

  const visiblePresets = PRESET_LIBRARY.filter(
    (p) => selectedPresetLevel === 'all' || p.level === selectedPresetLevel
  );

  // Compute SVG markup according to the active mode
  const getSvgBody = (): { content: string; viewBox: string; aspect: string } => {
    if (activeMode === '3d-faceted') {
      const content = generateFacetedStar3D({
        points: points3D,
        innerRadius: innerRadius3D,
        size: 100,
        lightAngle,
        material: material3D,
        glint: glint3D,
      });
      return { content, viewBox: '0 0 100 100', aspect: 'aspect-square' };
    }

    if (activeMode === 'lens-flare') {
      const content = generateLensFlareSvg({
        points: flareSpikes,
        size: 120,
        flareColor: activeColor,
        coreGlow,
        streakLength,
        dustCount,
        halo: haloRing,
      });
      return { content, viewBox: '0 0 120 120', aspect: 'aspect-square' };
    }

    if (activeMode === 'rating-bar') {
      const res = generateRatingBarSvg({
        rating: ratingValue,
        maxStars: 5,
        activeColor: activeRatingColor,
        inactiveColor: inactiveRatingColor,
        spacing: ratingSpacing,
        size: 40,
      });
      return { content: res.svgContent, viewBox: res.viewBox, aspect: 'aspect-[5/1]' };
    }

    if (activeMode === 'neon') {
      const polygonPoints = generateStarPolygonPoints({ points, innerRadius, size: 100, rotation });
      const curvedPath = generateCurvedStarPath({ points, innerRadius, size: 100, curveFactor, rotation });
      const geom = curved ? `<path d="${curvedPath}" />` : `<polygon points="${polygonPoints}" />`;
      const content = `
        <!-- Multi-layer Neon Tube Radiance -->
        <g fill="none" stroke="${shades.main}" stroke-width="${strokeWidth * 3.5}" stroke-linejoin="round" opacity="0.25">${geom}</g>
        <g fill="none" stroke="${shades.main}" stroke-width="${strokeWidth * 2}" stroke-linejoin="round" opacity="0.65">${geom}</g>
        <g fill="none" stroke="#ffffff" stroke-width="${Math.max(1.5, strokeWidth * 0.7)}" stroke-linejoin="round">${geom}</g>
      `;
      return { content, viewBox: '0 0 100 100', aspect: 'aspect-square' };
    }

    // Default: Geometric
    const polygonPoints = generateStarPolygonPoints({ points, innerRadius, size: 100, rotation });
    const curvedPath = generateCurvedStarPath({ points, innerRadius, size: 100, curveFactor, rotation });
    const geom = curved ? `<path d="${curvedPath}" />` : `<polygon points="${polygonPoints}" />`;

    let content = '';
    if (isStickerMode) {
      content = `
        <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.16))">
          <!-- White Die-Cut Vinyl Contour -->
          <g fill="#ffffff" stroke="#ffffff" stroke-width="${stickerBorderWidth}" stroke-linejoin="round" stroke-linecap="round">${geom}</g>
          <!-- Star Core Body -->
          <g fill="${shades.main}" stroke="#1E293B" stroke-width="2.5" stroke-linejoin="round">${geom}</g>
          <!-- Specular Pill Highlight -->
          <ellipse cx="38" cy="27" rx="5.5" ry="2.5" fill="#ffffff" opacity="0.8" transform="rotate(-30 38 27)" />
        </g>
      `;
    } else if (isOutline) {
      content = `<g fill="none" stroke="${shades.main}" stroke-width="${strokeWidth}" stroke-linejoin="round" stroke-linecap="round">${geom}</g>`;
    } else {
      content = `<g fill="${shades.main}">${geom}</g>`;
    }

    return { content, viewBox: '0 0 100 100', aspect: 'aspect-square' };
  };

  const svgData = getSvgBody();

  const getFullSvgString = () => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${svgData.viewBox}" width="${resolution}" height="${resolution}">${svgData.content}</svg>`;
  };

  const renderToCanvas = async (): Promise<HTMLCanvasElement> => {
    return new Promise((resolve, reject) => {
      const svgString = getFullSvgString();
      const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const img = new Image();

      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = resolution;
        canvas.height = resolution;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          URL.revokeObjectURL(url);
          reject(new Error('Canvas unsupported'));
          return;
        }
        ctx.clearRect(0, 0, resolution, resolution);
        ctx.drawImage(img, 0, 0, resolution, resolution);
        URL.revokeObjectURL(url);
        resolve(canvas);
      };

      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error('SVG rendering failed'));
      };

      img.src = url;
    });
  };

  const handleCopyPng = async () => {
    try {
      setIsProcessing(true);
      const canvas = await renderToCanvas();
      canvas.toBlob(async (blob) => {
        if (!blob) throw new Error('Blob generation failed');
        if (navigator.clipboard && window.ClipboardItem) {
          await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
          setCopiedStatus('png');
          setTimeout(() => setCopiedStatus(null), 2500);
        } else {
          handleDownloadPng();
        }
        setIsProcessing(false);
      }, 'image/png');
    } catch (err) {
      console.error(err);
      setIsProcessing(false);
      alert('Could not copy to clipboard. Downloading PNG instead.');
      handleDownloadPng();
    }
  };

  const handleDownloadPng = async () => {
    try {
      setIsProcessing(true);
      const canvas = await renderToCanvas();
      const link = document.createElement('a');
      link.download = `starpng-${activeMode}-${resolution}px.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      setIsProcessing(false);
    } catch (err) {
      console.error(err);
      setIsProcessing(false);
      alert('Download error occurred.');
    }
  };

  const handleDownloadSvg = () => {
    const svgString = getFullSvgString();
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = `starpng-${activeMode}-vector.svg`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleCopySvgCode = async () => {
    const svgString = getFullSvgString();
    try {
      await navigator.clipboard.writeText(svgString);
      setCopiedStatus('svg-code');
      setTimeout(() => setCopiedStatus(null), 2500);
    } catch {
      alert('Failed to copy code.');
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-[#ebebeb] shadow-sm overflow-hidden p-6 md:p-8">
      {/* Top Banner & Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#ebebeb] mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 font-mono text-[11px] uppercase tracking-wider mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Procedural Vector Studio 2.0</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#171717] tracking-tight">
            Universal Star PNG Generator & Customizer
          </h3>
          <p className="text-xs text-[#8f8f8f] mt-1 max-w-2xl">
            Generate any star geometry: geometric polygons, 3D faceted trophy stars, optical anamorphic lens flares, or customized 5-star customer review bars. 100% verified alpha transparent PNG & vector SVG.
          </p>
        </div>

        {/* Engine Mode Tabs */}
        <div className="w-full md:w-auto flex items-center gap-1.5 p-1 bg-[#fafafa] border border-[#ebebeb] rounded-xl overflow-x-auto scrollbar-none max-w-full touch-pan-x shrink-0">
          <button
            type="button"
            onClick={() => setActiveMode('geometric')}
            className={`shrink-0 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              activeMode === 'geometric' ? 'bg-[#171717] text-white shadow-xs' : 'text-[#4d4d4d] hover:text-[#171717]'
            }`}
          >
            <StarIcon className="w-3.5 h-3.5" />
            Geometric
          </button>
          <button
            type="button"
            onClick={() => setActiveMode('3d-faceted')}
            className={`shrink-0 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              activeMode === '3d-faceted' ? 'bg-[#171717] text-white shadow-xs' : 'text-[#4d4d4d] hover:text-[#171717]'
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            3D Faceted
          </button>
          <button
            type="button"
            onClick={() => setActiveMode('lens-flare')}
            className={`shrink-0 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              activeMode === 'lens-flare' ? 'bg-[#171717] text-white shadow-xs' : 'text-[#4d4d4d] hover:text-[#171717]'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            Lens Flare & FX
          </button>
          <button
            type="button"
            onClick={() => setActiveMode('rating-bar')}
            className={`shrink-0 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              activeMode === 'rating-bar' ? 'bg-[#171717] text-white shadow-xs' : 'text-[#4d4d4d] hover:text-[#171717]'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            Rating Bar
          </button>
          <button
            type="button"
            onClick={() => setActiveMode('neon')}
            className={`shrink-0 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              activeMode === 'neon' ? 'bg-[#171717] text-white shadow-xs' : 'text-[#4d4d4d] hover:text-[#171717]'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            Neon
          </button>
        </div>
      </div>

      {/* Preset Bar with Complexity Filtering */}
      <div className="mb-6 p-3 bg-[#fafafa] rounded-xl border border-[#ebebeb] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-semibold text-[#171717] flex items-center gap-1">
            <Wand2 className="w-3.5 h-3.5 text-amber-500" /> Quick Presets:
          </span>
          <div className="flex items-center gap-1 bg-white p-0.5 rounded-full border border-[#ebebeb] text-[10px] font-mono">
            {(['all', 'basic', 'moderate', 'high'] as ComplexityLevel[]).map((lvl) => (
              <button
                key={lvl}
                type="button"
                onClick={() => setSelectedPresetLevel(lvl)}
                className={`px-2 py-0.5 rounded-full uppercase transition-colors cursor-pointer ${
                  selectedPresetLevel === lvl ? 'bg-[#171717] text-white font-bold' : 'text-[#8f8f8f] hover:text-[#171717]'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none max-w-2xl">
          {visiblePresets.map((preset) => (
            <button
              key={preset.name}
              type="button"
              onClick={preset.apply}
              className="whitespace-nowrap px-2.5 py-1 text-xs rounded-md bg-white hover:bg-[#171717] text-[#4d4d4d] hover:text-white border border-[#ebebeb] transition-all cursor-pointer flex items-center gap-1 shadow-2xs"
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  preset.level === 'basic'
                    ? 'bg-emerald-500'
                    : preset.level === 'moderate'
                    ? 'bg-purple-500'
                    : 'bg-amber-500'
                }`}
              />
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Studio Grid: Left Canvas & Right Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive Canvas Stage (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-between p-6 bg-[#fafafa] rounded-xl border border-[#ebebeb]">
          {/* Canvas Mode Controls */}
          <div className="w-full flex items-center justify-between text-xs text-[#8f8f8f] mb-4">
            <span className="font-mono text-[11px] uppercase tracking-wider">
              {activeMode === 'geometric' && `${points} Points • ${Math.round(innerRadius * 100)}% Depth`}
              {activeMode === '3d-faceted' && `${points3D} Points • ${material3D.toUpperCase()}`}
              {activeMode === 'lens-flare' && `${flareSpikes} Spikes • Flare FX`}
              {activeMode === 'rating-bar' && `${ratingValue} Stars • Review Bar`}
              {activeMode === 'neon' && `${points} Points • Neon Glow`}
            </span>
            <div className="flex items-center gap-1 bg-white p-0.5 rounded-full border border-[#ebebeb] shadow-xs">
              <button
                type="button"
                onClick={() => setBgMode('checker')}
                className={`px-2 py-0.5 rounded-full text-[11px] font-medium transition-colors cursor-pointer ${
                  bgMode === 'checker' ? 'bg-[#171717] text-white' : 'text-[#4d4d4d]'
                }`}
              >
                Grid
              </button>
              <button
                type="button"
                onClick={() => setBgMode('dark')}
                className={`px-2 py-0.5 rounded-full text-[11px] font-medium transition-colors cursor-pointer ${
                  bgMode === 'dark' ? 'bg-[#171717] text-white' : 'text-[#4d4d4d]'
                }`}
              >
                Dark
              </button>
              <button
                type="button"
                onClick={() => setBgMode('white')}
                className={`px-2 py-0.5 rounded-full text-[11px] font-medium transition-colors cursor-pointer ${
                  bgMode === 'white' ? 'bg-[#171717] text-white' : 'text-[#4d4d4d]'
                }`}
              >
                White
              </button>
            </div>
          </div>

          {/* Center Live SVG Render Stage */}
          <div
            className={`w-full max-w-[320px] aspect-square rounded-xl border border-[#ebebeb] flex items-center justify-center p-6 transition-colors overflow-hidden ${
              bgMode === 'checker' ? 'checkerboard-bg' : bgMode === 'dark' ? 'bg-[#0f172a]' : 'bg-white'
            }`}
          >
            <div
              className="w-full h-full flex items-center justify-center drop-shadow-sm transition-transform duration-200"
              dangerouslySetInnerHTML={{
                __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${svgData.viewBox}" class="w-full h-full">${svgData.content}</svg>`,
              }}
            />
          </div>

          {/* Verification Badge */}
          <div className="w-full flex items-center justify-between text-[11px] text-[#8f8f8f] font-mono mt-4 pt-3 border-t border-[#ebebeb]">
            <span>Resolution: {resolution}px</span>
            <span className="text-emerald-600 font-sans font-medium flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Real Alpha Transparency
            </span>
          </div>
        </div>

        {/* Right: Parameter Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* ================= MODE 1: GEOMETRIC CONTROLS ================= */}
          {activeMode === 'geometric' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Points */}
                <div className="p-3.5 bg-[#fafafa] rounded-xl border border-[#ebebeb]">
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-[#171717]">Number of Points</label>
                    <span className="font-mono text-xs text-[#171717] font-bold bg-white px-2 py-0.5 rounded-md border border-[#ebebeb]">
                      {points}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="32"
                    value={points}
                    onChange={(e) => setPoints(Number(e.target.value))}
                    className="w-full accent-[#171717] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#8f8f8f] font-mono mt-1">
                    <span>3 (Triangle)</span>
                    <span>16</span>
                    <span>32 (Sunburst)</span>
                  </div>
                </div>

                {/* Inner Radius */}
                <div className="p-3.5 bg-[#fafafa] rounded-xl border border-[#ebebeb]">
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-[#171717]">Inner Spike Depth</label>
                    <span className="font-mono text-xs text-[#171717] font-bold bg-white px-2 py-0.5 rounded-md border border-[#ebebeb]">
                      {Math.round(innerRadius * 100)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.08"
                    max="0.88"
                    step="0.01"
                    value={innerRadius}
                    onChange={(e) => setInnerRadius(Number(e.target.value))}
                    className="w-full accent-[#171717] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#8f8f8f] font-mono mt-1">
                    <span>Sharp Needle (10%)</span>
                    <span>Classic (42%)</span>
                    <span>Shallow (85%)</span>
                  </div>
                </div>
              </div>

              {/* Curved Arms & Rotation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 bg-[#fafafa] rounded-xl border border-[#ebebeb] flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#171717] block">Curved / Flared Arms</span>
                    <span className="text-[11px] text-[#8f8f8f]">Y2K aesthetic flared curved rays</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCurved(!curved)}
                    className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                      curved ? 'bg-[#171717]' : 'bg-[#e5e7eb]'
                    }`}
                  >
                    <span
                      className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                        curved ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="p-3.5 bg-[#fafafa] rounded-xl border border-[#ebebeb]">
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-[#171717]">Rotation Angle</label>
                    <span className="font-mono text-xs text-[#171717] font-bold bg-white px-2 py-0.5 rounded-md border border-[#ebebeb]">
                      {rotation}°
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={rotation}
                    onChange={(e) => setRotation(Number(e.target.value))}
                    className="w-full accent-[#171717] cursor-pointer"
                  />
                </div>
              </div>

              {/* Fill vs Outline Toggle */}
              <div className="p-3.5 bg-[#fafafa] rounded-xl border border-[#ebebeb] flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#171717] block">Outline Stroke Mode</span>
                  <span className="text-[11px] text-[#8f8f8f]">Vector line stroke with transparent center</span>
                </div>
                <div className="flex items-center gap-2">
                  {isOutline && (
                    <input
                      type="range"
                      min="1"
                      max="12"
                      value={strokeWidth}
                      onChange={(e) => setStrokeWidth(Number(e.target.value))}
                      className="w-24 accent-[#171717] cursor-pointer"
                    />
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      setIsOutline(!isOutline);
                      if (!isOutline) setIsStickerMode(false);
                    }}
                    className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                      isOutline ? 'bg-[#171717]' : 'bg-[#e5e7eb]'
                    }`}
                  >
                    <span
                      className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                        isOutline ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Flaticon Die-Cut Sticker Mode Toggle */}
              <div className="p-3.5 bg-[#fafafa] rounded-xl border border-[#ebebeb] flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#171717] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    Flaticon Die-Cut Sticker Style
                  </span>
                  <span className="text-[11px] text-[#8f8f8f]">White vinyl border, drop shadow & glossy highlight</span>
                </div>
                <div className="flex items-center gap-2">
                  {isStickerMode && (
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono text-[#8f8f8f]">Width:</span>
                      <input
                        type="range"
                        min="6"
                        max="24"
                        value={stickerBorderWidth}
                        onChange={(e) => setStickerBorderWidth(Number(e.target.value))}
                        className="w-20 accent-[#171717] cursor-pointer"
                      />
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      setIsStickerMode(!isStickerMode);
                      if (!isStickerMode) setIsOutline(false);
                    }}
                    className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                      isStickerMode ? 'bg-[#171717]' : 'bg-[#e5e7eb]'
                    }`}
                  >
                    <span
                      className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                        isStickerMode ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ================= MODE 2: 3D FACETED CONTROLS ================= */}
          {activeMode === '3d-faceted' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-[#fafafa] rounded-xl border border-[#ebebeb]">
                <label className="text-xs font-semibold text-[#171717] block mb-2">3D Metallic Material</label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {[
                    { id: 'gold', label: '24K Gold', bg: 'bg-amber-400' },
                    { id: 'chrome', label: 'Platinum', bg: 'bg-slate-300' },
                    { id: 'roseGold', label: 'Rose Gold', bg: 'bg-rose-400' },
                    { id: 'ruby', label: 'Ruby Gem', bg: 'bg-red-500' },
                    { id: 'emerald', label: 'Emerald', bg: 'bg-emerald-500' },
                    { id: 'obsidian', label: 'Obsidian', bg: 'bg-slate-900' },
                  ].map((mat) => (
                    <button
                      key={mat.id}
                      type="button"
                      onClick={() => setMaterial3D(mat.id as any)}
                      className={`p-2 rounded-lg border text-center transition-all cursor-pointer ${
                        material3D === mat.id
                          ? 'border-[#171717] bg-white shadow-xs font-bold text-[#171717]'
                          : 'border-[#ebebeb] bg-[#fafafa] text-[#4d4d4d] hover:border-[#171717]'
                      }`}
                    >
                      <span className={`w-3.5 h-3.5 rounded-full ${mat.bg} mx-auto block mb-1`} />
                      <span className="text-[11px] block">{mat.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 3D Points */}
                <div className="p-3.5 bg-[#fafafa] rounded-xl border border-[#ebebeb]">
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-[#171717]">Faceted Points</label>
                    <span className="font-mono text-xs font-bold bg-white px-2 py-0.5 rounded border border-[#ebebeb]">
                      {points3D}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="12"
                    value={points3D}
                    onChange={(e) => setPoints3D(Number(e.target.value))}
                    className="w-full accent-[#171717] cursor-pointer"
                  />
                </div>

                {/* Light Angle */}
                <div className="p-3.5 bg-[#fafafa] rounded-xl border border-[#ebebeb]">
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-[#171717]">3D Light Angle</label>
                    <span className="font-mono text-xs font-bold bg-white px-2 py-0.5 rounded border border-[#ebebeb]">
                      {lightAngle}°
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={lightAngle}
                    onChange={(e) => setLightAngle(Number(e.target.value))}
                    className="w-full accent-[#171717] cursor-pointer"
                  />
                </div>
              </div>

              <div className="p-3.5 bg-[#fafafa] rounded-xl border border-[#ebebeb] flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#171717] block">Specular Apex Glint</span>
                  <span className="text-[11px] text-[#8f8f8f]">Brilliant metallic light reflection at star tip</span>
                </div>
                <button
                  type="button"
                  onClick={() => setGlint3D(!glint3D)}
                  className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                    glint3D ? 'bg-[#171717]' : 'bg-[#e5e7eb]'
                  }`}
                >
                  <span
                    className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                      glint3D ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          )}

          {/* ================= MODE 3: LENS FLARE CONTROLS ================= */}
          {activeMode === 'lens-flare' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Diffraction Spikes */}
                <div className="p-3.5 bg-[#fafafa] rounded-xl border border-[#ebebeb]">
                  <label className="text-xs font-semibold text-[#171717] block mb-2">Diffraction Spikes</label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[2, 4, 6, 8].map((spk) => (
                      <button
                        key={spk}
                        type="button"
                        onClick={() => setFlareSpikes(spk as any)}
                        className={`py-1.5 rounded-lg text-xs font-mono font-medium border transition-colors cursor-pointer ${
                          flareSpikes === spk
                            ? 'bg-[#171717] text-white border-[#171717]'
                            : 'bg-white text-[#4d4d4d] border-[#ebebeb]'
                        }`}
                      >
                        {spk}-Ray
                      </button>
                    ))}
                  </div>
                </div>

                {/* Core Glow */}
                <div className="p-3.5 bg-[#fafafa] rounded-xl border border-[#ebebeb]">
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-[#171717]">Core Laser Bloom</label>
                    <span className="font-mono text-xs font-bold bg-white px-2 py-0.5 rounded border border-[#ebebeb]">
                      {Math.round(coreGlow * 100)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.3"
                    max="1.0"
                    step="0.05"
                    value={coreGlow}
                    onChange={(e) => setCoreGlow(Number(e.target.value))}
                    className="w-full accent-[#171717] cursor-pointer"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Stardust Count */}
                <div className="p-3.5 bg-[#fafafa] rounded-xl border border-[#ebebeb]">
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-[#171717]">Stardust Sparkle Cloud</label>
                    <span className="font-mono text-xs font-bold bg-white px-2 py-0.5 rounded border border-[#ebebeb]">
                      {dustCount} Dots
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={dustCount}
                    onChange={(e) => setDustCount(Number(e.target.value))}
                    className="w-full accent-[#171717] cursor-pointer"
                  />
                </div>

                {/* Halo Toggle */}
                <div className="p-3.5 bg-[#fafafa] rounded-xl border border-[#ebebeb] flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#171717] block">Atmospheric Ring</span>
                    <span className="text-[11px] text-[#8f8f8f]">Camera lens refraction halo</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setHaloRing(!haloRing)}
                    className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                      haloRing ? 'bg-[#171717]' : 'bg-[#e5e7eb]'
                    }`}
                  >
                    <span
                      className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                        haloRing ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ================= MODE 4: RATING BAR BUILDER ================= */}
          {activeMode === 'rating-bar' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-[#fafafa] rounded-xl border border-[#ebebeb]">
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-[#171717]">Rating Value (0.5 to 5.0)</label>
                  <span className="font-mono text-sm text-[#F59E0B] font-bold bg-white px-2.5 py-0.5 rounded border border-[#ebebeb]">
                    ★ {ratingValue.toFixed(1)} / 5.0
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="5.0"
                  step="0.5"
                  value={ratingValue}
                  onChange={(e) => setRatingValue(Number(e.target.value))}
                  className="w-full accent-[#F59E0B] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#8f8f8f] font-mono mt-1">
                  <span>1.0</span>
                  <span>2.0</span>
                  <span>3.0</span>
                  <span>4.0</span>
                  <span>4.5</span>
                  <span>5.0</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 bg-[#fafafa] rounded-xl border border-[#ebebeb]">
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-[#171717]">Star Spacing Gap</label>
                    <span className="font-mono text-xs font-bold bg-white px-2 py-0.5 rounded border border-[#ebebeb]">
                      {ratingSpacing}px
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="20"
                    value={ratingSpacing}
                    onChange={(e) => setRatingSpacing(Number(e.target.value))}
                    className="w-full accent-[#171717] cursor-pointer"
                  />
                </div>

                <div className="p-3.5 bg-[#fafafa] rounded-xl border border-[#ebebeb] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#171717]">Active Star Color</span>
                  <input
                    type="color"
                    value={activeRatingColor}
                    onChange={(e) => setActiveRatingColor(e.target.value)}
                    className="w-8 h-8 rounded-lg cursor-pointer border border-[#ebebeb]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ================= MODE 5: NEON CONTROLS ================= */}
          {activeMode === 'neon' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 bg-[#fafafa] rounded-xl border border-[#ebebeb]">
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-[#171717]">Neon Star Points</label>
                    <span className="font-mono text-xs font-bold bg-white px-2 py-0.5 rounded border border-[#ebebeb]">
                      {points}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="16"
                    value={points}
                    onChange={(e) => setPoints(Number(e.target.value))}
                    className="w-full accent-[#171717] cursor-pointer"
                  />
                </div>

                <div className="p-3.5 bg-[#fafafa] rounded-xl border border-[#ebebeb]">
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-[#171717]">Tube Glow Intensity</label>
                    <span className="font-mono text-xs font-bold bg-white px-2 py-0.5 rounded border border-[#ebebeb]">
                      {strokeWidth}px
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1.5"
                    max="8"
                    step="0.5"
                    value={strokeWidth}
                    onChange={(e) => setStrokeWidth(Number(e.target.value))}
                    className="w-full accent-[#171717] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Global Color Swatches (if not 3D material) */}
          {activeMode !== '3d-faceted' && activeMode !== 'rating-bar' && (
            <div className="p-3.5 bg-[#fafafa] rounded-xl border border-[#ebebeb]">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-[#171717] flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-[#8f8f8f]" /> Color Palette
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={activeColor}
                    onChange={(e) => setActiveColor(e.target.value)}
                    className="w-6 h-6 rounded cursor-pointer border border-[#ebebeb]"
                  />
                  <span className="font-mono text-[11px] text-[#8f8f8f] uppercase">{activeColor}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {COLOR_PRESETS.map((c) => (
                  <button
                    key={c.hex}
                    type="button"
                    onClick={() => setActiveColor(c.hex)}
                    title={c.name}
                    className={`w-7 h-7 rounded-full transition-transform cursor-pointer border ${
                      activeColor.toLowerCase() === c.hex.toLowerCase()
                        ? 'scale-115 ring-2 ring-[#171717] border-transparent'
                        : 'border-[#ebebeb] hover:scale-105'
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Resolution Selector & Actions Bar */}
          <div className="pt-2 border-t border-[#ebebeb] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Resolution Selector */}
            <div className="flex items-center gap-1.5 bg-[#fafafa] p-1 rounded-xl border border-[#ebebeb]">
              <span className="text-[11px] font-mono text-[#8f8f8f] px-2 flex items-center gap-1">
                <Maximize2 className="w-3 h-3" /> Size:
              </span>
              {[512, 1024, 2048, 4096].map((res) => (
                <button
                  key={res}
                  type="button"
                  onClick={() => setResolution(res)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
                    resolution === res ? 'bg-[#171717] text-white shadow-xs' : 'text-[#4d4d4d] hover:text-[#171717]'
                  }`}
                >
                  {res >= 2048 ? `${res / 1024}K` : `${res}px`}
                </button>
              ))}
            </div>

            {/* Export Buttons */}
            <div className="flex items-center gap-2">
              {/* Instant 1-Click Clipboard Copy (Transparent PNG) */}
              <button
                type="button"
                onClick={handleCopyPng}
                disabled={isProcessing}
                className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs ${
                  copiedStatus === 'png'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#171717] hover:bg-black text-white hover:shadow-sm'
                }`}
              >
                {copiedStatus === 'png' ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    Copied PNG!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Quick Copy PNG
                  </>
                )}
              </button>

              {/* PNG Download */}
              <button
                type="button"
                onClick={handleDownloadPng}
                disabled={isProcessing}
                className="px-3.5 py-2.5 rounded-full bg-white hover:bg-[#fafafa] text-[#171717] border border-[#ebebeb] text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-2xs"
                title="Download High-Resolution PNG"
              >
                <Download className="w-3.5 h-3.5" />
                Download PNG
              </button>

              {/* SVG Vector Download */}
              <button
                type="button"
                onClick={handleDownloadSvg}
                className="px-3 py-2.5 rounded-full bg-white hover:bg-[#fafafa] text-[#171717] border border-[#ebebeb] text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-2xs"
                title="Download Pure Vector SVG"
              >
                <FileCode className="w-3.5 h-3.5" />
                SVG
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
