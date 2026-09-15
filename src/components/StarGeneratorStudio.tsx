import React, { useState, useRef } from 'react';
import { generateStarPolygonPoints, generateCurvedStarPath } from '../utils/starGenerator';
import { generateColorShades } from '../utils/colorUtils';
import { Sliders, Copy, Download, Check, Sparkles, Wand2, Maximize2, Palette, ShieldCheck, FileCode } from 'lucide-react';

const PRESETS = [
  { name: 'Classic 5-Star', points: 5, innerRadius: 0.42, curved: false, style: 'solid' },
  { name: 'Y2K 4-Point Spike', points: 4, innerRadius: 0.15, curved: true, style: 'solid' },
  { name: '8-Point Compass', points: 8, innerRadius: 0.4, curved: false, style: 'solid' },
  { name: '12-Point Starburst', points: 12, innerRadius: 0.65, curved: false, style: 'solid' },
  { name: '16-Point Promo Burst', points: 16, innerRadius: 0.8, curved: false, style: 'solid' },
  { name: '24-Point Sunburst', points: 24, innerRadius: 0.85, curved: false, style: 'solid' },
  { name: 'Minimalist Outline', points: 5, innerRadius: 0.45, curved: false, style: 'outline' },
  { name: 'Cyber Neon Glow', points: 4, innerRadius: 0.2, curved: false, style: 'neon' },
];

const COLOR_PRESETS = [
  { name: 'Gold', hex: '#EAB308' },
  { name: 'Amber', hex: '#F59E0B' },
  { name: 'Cyan Glow', hex: '#06B6D4' },
  { name: 'Electric Violet', hex: '#7928CA' },
  { name: 'Hot Pink', hex: '#FF0080' },
  { name: 'Midnight', hex: '#171717' },
  { name: 'Pure White', hex: '#FFFFFF' },
  { name: 'Emerald', hex: '#10B981' },
];

export default function StarGeneratorStudio() {
  const [points, setPoints] = useState<number>(5);
  const [innerRadius, setInnerRadius] = useState<number>(0.42);
  const [curved, setCurved] = useState<boolean>(false);
  const [curveFactor, setCurveFactor] = useState<number>(0.5);
  const [styleMode, setStyleMode] = useState<'solid' | 'outline' | 'neon' | '3d'>('solid');
  const [strokeWidth, setStrokeWidth] = useState<number>(4);
  const [activeColor, setActiveColor] = useState<string>('#EAB308');
  const [resolution, setResolution] = useState<number>(1024);
  const [bgMode, setBgMode] = useState<'checker' | 'dark' | 'white'>('checker');
  const [copiedStatus, setCopiedStatus] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const shades = generateColorShades(activeColor);

  // Generate the SVG body markup based on state
  const getSvgBody = () => {
    const polygonPoints = generateStarPolygonPoints({ points, innerRadius, size: 100 });
    const curvedPath = generateCurvedStarPath({ points, innerRadius, size: 100, curveFactor });
    const geom = curved ? `<path d="${curvedPath}" />` : `<polygon points="${polygonPoints}" />`;

    if (styleMode === 'outline') {
      return `<g fill="none" stroke="${shades.main}" stroke-width="${strokeWidth}" stroke-linejoin="round" stroke-linecap="round">${geom}</g>`;
    }

    if (styleMode === 'neon') {
      return `
        <!-- Outer Glow -->
        <g fill="none" stroke="${shades.main}" stroke-width="${strokeWidth * 3}" stroke-linejoin="round" opacity="0.3">${geom}</g>
        <g fill="none" stroke="${shades.main}" stroke-width="${strokeWidth * 1.5}" stroke-linejoin="round" opacity="0.7">${geom}</g>
        <g fill="none" stroke="#ffffff" stroke-width="${Math.max(1.5, strokeWidth * 0.6)}" stroke-linejoin="round">${geom}</g>
      `;
    }

    if (styleMode === '3d') {
      return `
        <defs>
          <radialGradient id="gen3DGrad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stop-color="${shades.highlight}" />
            <stop offset="40%" stop-color="${shades.main}" />
            <stop offset="85%" stop-color="${shades.dark}" />
            <stop offset="100%" stop-color="${shades.deep}" />
          </radialGradient>
        </defs>
        <g fill="url(#gen3DGrad)">${geom}</g>
        <!-- Top Specular Highlight Glint -->
        <ellipse cx="44" cy="28" rx="8" ry="4" fill="#ffffff" opacity="0.65" transform="rotate(-20 44 28)" />
      `;
    }

    // Default Solid
    return `<g fill="${shades.main}">${geom}</g>`;
  };

  const getFullSvgString = () => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${resolution}" height="${resolution}">${getSvgBody()}</svg>`;
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
      link.download = `custom-star-${points}points-${resolution}px.png`;
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
    link.download = `custom-star-${points}points-vector.svg`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleApplyPreset = (preset: typeof PRESETS[0]) => {
    setPoints(preset.points);
    setInnerRadius(preset.innerRadius);
    setCurved(preset.curved);
    setStyleMode(preset.style as any);
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-[#ebebeb] shadow-sm overflow-hidden p-6 md:p-8">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#ebebeb] mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 font-mono text-[11px] uppercase tracking-wider mb-1.5">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>Procedural Vector Engine</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#171717] tracking-tight">
            Infinite Star Generator & Customizer
          </h3>
          <p className="text-xs text-[#8f8f8f] mt-1">
            Need an exact point count, spike depth, or custom stroke? Generate any star out of infinite mathematical variations. 100% free CC0.
          </p>
        </div>

        {/* Quick Presets Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-xl scrollbar-none">
          {PRESETS.map((p) => (
            <button
              key={p.name}
              type="button"
              onClick={() => handleApplyPreset(p)}
              className="whitespace-nowrap px-2.5 py-1 text-xs rounded-md bg-[#fafafa] hover:bg-[#171717] text-[#4d4d4d] hover:text-white border border-[#ebebeb] transition-all cursor-pointer"
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Interactive Canvas Stage (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-between p-6 bg-[#fafafa] rounded-xl border border-[#ebebeb]">
          {/* Canvas Mode Controls */}
          <div className="w-full flex items-center justify-between text-xs text-[#8f8f8f] mb-4">
            <span className="font-mono text-[11px] uppercase">
              {points} Points &bull; {Math.round(innerRadius * 100)}% Depth
            </span>
            <div className="flex items-center gap-1 bg-white p-0.5 rounded-full border border-[#ebebeb] shadow-xs">
              <button
                type="button"
                onClick={() => setBgMode('checker')}
                className={`px-2 py-0.5 rounded-full text-[11px] font-medium transition-colors ${
                  bgMode === 'checker' ? 'bg-[#171717] text-white' : 'text-[#4d4d4d]'
                }`}
              >
                Grid
              </button>
              <button
                type="button"
                onClick={() => setBgMode('dark')}
                className={`px-2 py-0.5 rounded-full text-[11px] font-medium transition-colors ${
                  bgMode === 'dark' ? 'bg-[#171717] text-white' : 'text-[#4d4d4d]'
                }`}
              >
                Dark
              </button>
              <button
                type="button"
                onClick={() => setBgMode('white')}
                className={`px-2 py-0.5 rounded-full text-[11px] font-medium transition-colors ${
                  bgMode === 'white' ? 'bg-[#171717] text-white' : 'text-[#4d4d4d]'
                }`}
              >
                White
              </button>
            </div>
          </div>

          {/* Center SVG Render */}
          <div
            className={`w-64 h-64 sm:w-72 sm:h-72 rounded-xl border border-[#ebebeb] flex items-center justify-center p-6 transition-colors ${
              bgMode === 'checker' ? 'checkerboard-bg' : bgMode === 'dark' ? 'bg-[#121212]' : 'bg-white'
            }`}
          >
            <div
              className="w-full h-full flex items-center justify-center drop-shadow-sm transition-transform duration-200"
              dangerouslySetInnerHTML={{
                __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-full h-full">${getSvgBody()}</svg>`
              }}
            />
          </div>

          {/* Quick Metrics */}
          <div className="w-full flex items-center justify-between text-[11px] text-[#8f8f8f] font-mono mt-4 pt-3 border-t border-[#ebebeb]">
            <span>Resolution: {resolution}px</span>
            <span className="text-emerald-600 font-sans font-medium flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> Alpha Transparent
            </span>
          </div>
        </div>

        {/* Right: Parameter Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Sliders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Points Slider */}
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
                onChange={(e) => setPoints(parseInt(e.target.value))}
                className="w-full h-1.5 bg-[#ebebeb] rounded-lg appearance-none cursor-pointer accent-[#171717]"
              />
              <div className="flex justify-between text-[10px] text-[#8f8f8f] mt-1 font-mono">
                <span>3 (Triangle)</span>
                <span>5 (Classic)</span>
                <span>16 (Burst)</span>
                <span>32</span>
              </div>
            </div>

            {/* Inner Radius Slider */}
            <div className="p-3.5 bg-[#fafafa] rounded-xl border border-[#ebebeb]">
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-[#171717]">Inner Spike Depth</label>
                <span className="font-mono text-xs text-[#171717] font-bold bg-white px-2 py-0.5 rounded-md border border-[#ebebeb]">
                  {Math.round(innerRadius * 100)}%
                </span>
              </div>
              <input
                type="range"
                min="0.10"
                max="0.88"
                step="0.02"
                value={innerRadius}
                onChange={(e) => setInnerRadius(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-[#ebebeb] rounded-lg appearance-none cursor-pointer accent-[#171717]"
              />
              <div className="flex justify-between text-[10px] text-[#8f8f8f] mt-1 font-mono">
                <span>10% (Needle)</span>
                <span>45% (Balanced)</span>
                <span>88% (Puffy)</span>
              </div>
            </div>
          </div>

          {/* Style & Shape Toggles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Style Mode */}
            <div className="p-3.5 bg-[#fafafa] rounded-xl border border-[#ebebeb]">
              <label className="text-xs font-semibold text-[#171717] block mb-2">Rendering Style</label>
              <div className="grid grid-cols-4 gap-1.5">
                {(['solid', 'outline', 'neon', '3d'] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setStyleMode(mode)}
                    className={`py-1.5 text-xs font-medium rounded-md capitalize transition-all cursor-pointer ${
                      styleMode === mode
                        ? 'bg-[#171717] text-white shadow-xs'
                        : 'bg-white border border-[#ebebeb] text-[#4d4d4d] hover:border-[#171717]'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Edge Curvature Mode */}
            <div className="p-3.5 bg-[#fafafa] rounded-xl border border-[#ebebeb]">
              <label className="text-xs font-semibold text-[#171717] block mb-2">Edge Geometry</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setCurved(false)}
                  className={`py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                    !curved
                      ? 'bg-[#171717] text-white shadow-xs'
                      : 'bg-white border border-[#ebebeb] text-[#4d4d4d] hover:border-[#171717]'
                  }`}
                >
                  Sharp Spikes
                </button>
                <button
                  type="button"
                  onClick={() => setCurved(true)}
                  className={`py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                    curved
                      ? 'bg-[#171717] text-white shadow-xs'
                      : 'bg-white border border-[#ebebeb] text-[#4d4d4d] hover:border-[#171717]'
                  }`}
                >
                  Curved & Flared
                </button>
              </div>
            </div>
          </div>

          {/* Color & Resolution Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Color Swatches */}
            <div className="p-3.5 bg-[#fafafa] rounded-xl border border-[#ebebeb]">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-[#171717]">Color Swatch</label>
                <input
                  type="color"
                  value={activeColor}
                  onChange={(e) => setActiveColor(e.target.value)}
                  className="w-5 h-5 rounded cursor-pointer border-none p-0"
                />
              </div>
              <div className="grid grid-cols-8 gap-1.5">
                {COLOR_PRESETS.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setActiveColor(c.hex)}
                    title={c.name}
                    className={`h-6 rounded-md border transition-transform cursor-pointer ${
                      activeColor.toLowerCase() === c.hex.toLowerCase() ? 'ring-2 ring-[#171717] scale-110' : 'border-[#ebebeb]'
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Resolution Selector */}
            <div className="p-3.5 bg-[#fafafa] rounded-xl border border-[#ebebeb]">
              <label className="text-xs font-semibold text-[#171717] block mb-2">Export Resolution</label>
              <div className="grid grid-cols-3 gap-1.5">
                {[512, 1024, 2048].map((res) => (
                  <button
                    key={res}
                    type="button"
                    onClick={() => setResolution(res)}
                    className={`py-1 text-xs font-mono rounded-md transition-all cursor-pointer ${
                      resolution === res
                        ? 'bg-[#171717] text-white shadow-xs'
                        : 'bg-white border border-[#ebebeb] text-[#4d4d4d] hover:border-[#171717]'
                    }`}
                  >
                    {res}px
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            {/* Primary Copy to Clipboard */}
            <button
              type="button"
              onClick={handleCopyPng}
              disabled={isProcessing}
              className="w-full sm:flex-1 py-3 px-4 rounded-full bg-[#171717] text-white hover:bg-black font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
            >
              {copiedStatus === 'png' ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Copied Generated PNG!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy PNG to Clipboard</span>
                </>
              )}
            </button>

            {/* Secondary Download PNG */}
            <button
              type="button"
              onClick={handleDownloadPng}
              disabled={isProcessing}
              className="w-full sm:w-auto py-3 px-5 rounded-full bg-white border border-[#ebebeb] hover:border-[#171717] text-[#171717] font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download {resolution}px PNG</span>
            </button>

            {/* Tertiary Download SVG */}
            <button
              type="button"
              onClick={handleDownloadSvg}
              className="w-full sm:w-auto py-3 px-5 rounded-full bg-white border border-[#ebebeb] hover:border-[#171717] text-[#0070F3] font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <FileCode className="w-4 h-4" />
              <span>Free Vector SVG</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
