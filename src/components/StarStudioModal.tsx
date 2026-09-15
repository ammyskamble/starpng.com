import React, { useState, useEffect, useRef } from 'react';
import type { StarAsset } from '../data/stars';
import { injectColorShades } from '../utils/colorUtils';
import { Download, Copy, Check, X, Sliders, Palette, Maximize2, ShieldCheck, Sparkles, FileCode } from 'lucide-react';

interface StarStudioModalProps {
  star: StarAsset | null;
  isOpen: boolean;
  onClose: () => void;
}

const COLOR_PRESETS = [
  { name: 'Original', hex: 'ORIGINAL' },
  { name: 'Gold', hex: '#EAB308' },
  { name: 'Yellow', hex: '#FACC15' },
  { name: 'Amber', hex: '#F59E0B' },
  { name: 'Midnight', hex: '#171717' },
  { name: 'Pure White', hex: '#FFFFFF' },
  { name: 'Cyan Glow', hex: '#06B6D4' },
  { name: 'Electric Violet', hex: '#7928CA' },
  { name: 'Hot Pink', hex: '#FF0080' },
  { name: 'Emerald', hex: '#10B981' },
];

const RESOLUTIONS = [
  { label: '256 px', size: 256, tag: 'Standard' },
  { label: '512 px', size: 512, tag: 'High-Res' },
  { label: '1024 px', size: 1024, tag: '2K Quad HD' },
  { label: '2048 px', size: 2048, tag: '4K Ultra HD' },
];

export default function StarStudioModal({ star, isOpen, onClose }: StarStudioModalProps) {
  if (!isOpen || !star) return null;

  const [selectedColor, setSelectedColor] = useState<string>('ORIGINAL');
  const [customHex, setCustomHex] = useState<string>(star.defaultColor);
  const [resolution, setResolution] = useState<number>(1024);
  const [bgMode, setBgMode] = useState<'checker' | 'dark' | 'white'>('checker');
  const [copiedStatus, setCopiedStatus] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (star) {
      setSelectedColor('ORIGINAL');
      setCustomHex(star.defaultColor);
    }
  }, [star]);

  const activeColor = selectedColor === 'ORIGINAL' ? star.defaultColor : selectedColor === 'CUSTOM' ? customHex : selectedColor;

  // Generate SVG string with dynamic multi-tone 3D color shades
  const getProcessedSvgString = () => {
    const coloredContent = injectColorShades(star.svgContent, activeColor, 'studio_export');
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${star.viewBox}" width="${resolution}" height="${resolution}">${coloredContent}</svg>`;
  };

  // Convert SVG to Canvas and return DataURL/Blob
  const renderToCanvas = async (): Promise<HTMLCanvasElement> => {
    return new Promise((resolve, reject) => {
      const svgString = getProcessedSvgString();
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
          reject(new Error('Canvas context not supported'));
          return;
        }

        // Draw clean transparent image
        ctx.clearRect(0, 0, resolution, resolution);
        ctx.drawImage(img, 0, 0, resolution, resolution);
        URL.revokeObjectURL(url);
        resolve(canvas);
      };

      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error('Failed to render SVG image'));
      };

      img.src = url;
    });
  };

  // 1-Click Copy Transparent PNG to Clipboard
  const handleCopyPng = async () => {
    try {
      setIsProcessing(true);
      const canvas = await renderToCanvas();
      canvas.toBlob(async (blob) => {
        if (!blob) {
          throw new Error('Blob generation failed');
        }
        if (navigator.clipboard && window.ClipboardItem) {
          await navigator.clipboard.write([
            new ClipboardItem({ 'image/png': blob })
          ]);
          setCopiedStatus('png');
          setTimeout(() => setCopiedStatus(null), 3000);
        } else {
          handleDownloadPng();
        }
        setIsProcessing(false);
      }, 'image/png');
    } catch (err) {
      console.error(err);
      setIsProcessing(false);
      alert('Could not copy to clipboard. Downloading PNG directly instead.');
      handleDownloadPng();
    }
  };

  // 1-Click Download Transparent PNG
  const handleDownloadPng = async () => {
    try {
      setIsProcessing(true);
      const canvas = await renderToCanvas();
      const link = document.createElement('a');
      link.download = `${star.slug}-${resolution}px-transparent.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      setIsProcessing(false);
    } catch (err) {
      console.error(err);
      setIsProcessing(false);
      alert('Download error occurred.');
    }
  };

  // 1-Click Download Vector SVG
  const handleDownloadSvg = () => {
    const svgString = getProcessedSvgString();
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = `${star.slug}-vector.svg`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Copy SVG Source Code
  const handleCopySvgCode = () => {
    const svgString = getProcessedSvgString();
    navigator.clipboard.writeText(svgString);
    setCopiedStatus('svg');
    setTimeout(() => setCopiedStatus(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl border border-[#ebebeb] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Side: Dynamic Preview Stage */}
        <div className="flex-1 flex flex-col items-center justify-between p-6 md:p-8 bg-[#fafafa] border-b md:border-b-0 md:border-r border-[#ebebeb]">
          {/* Top Stage Bar */}
          <div className="w-full flex items-center justify-between text-xs text-[#8f8f8f]">
            <span className="font-mono uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              3D Dynamic Shading Active
            </span>

            {/* Canvas Background Controls */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-[#ebebeb] shadow-xs">
              <button
                type="button"
                onClick={() => setBgMode('checker')}
                title="Transparent Grid"
                className={`px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors ${
                  bgMode === 'checker' ? 'bg-[#171717] text-white' : 'text-[#4d4d4d] hover:text-[#171717]'
                }`}
              >
                Grid
              </button>
              <button
                type="button"
                onClick={() => setBgMode('dark')}
                title="Dark Canvas"
                className={`px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors ${
                  bgMode === 'dark' ? 'bg-[#171717] text-white' : 'text-[#4d4d4d] hover:text-[#171717]'
                }`}
              >
                Dark
              </button>
              <button
                type="button"
                onClick={() => setBgMode('white')}
                title="White Canvas"
                className={`px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors ${
                  bgMode === 'white' ? 'bg-[#171717] text-white' : 'text-[#4d4d4d] hover:text-[#171717]'
                }`}
              >
                White
              </button>
            </div>
          </div>

          {/* Center Stage: Star Visual Display with Live Recolor */}
          <div 
            ref={previewRef}
            className={`my-6 w-64 h-64 sm:w-80 sm:h-80 rounded-xl border border-[#ebebeb] flex items-center justify-center p-8 transition-colors ${
              bgMode === 'checker' ? 'checkerboard-bg' : bgMode === 'dark' ? 'bg-[#121212]' : 'bg-white'
            }`}
          >
            <div 
              className="w-full h-full flex items-center justify-center drop-shadow-md transition-transform duration-300 hover:scale-105"
              dangerouslySetInnerHTML={{
                __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${star.viewBox}" class="w-full h-full">${injectColorShades(star.svgContent, activeColor, 'modal_preview')}</svg>`
              }}
            />
          </div>

          {/* Bottom Stage Info */}
          <div className="w-full flex items-center justify-between text-xs text-[#8f8f8f] pt-2 border-t border-[#ebebeb]">
            <span className="font-mono">Output: {resolution} × {resolution} px</span>
            <span className="text-emerald-600 font-medium flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% True Alpha Transparency
            </span>
          </div>
        </div>

        {/* Right Side: Customizer & Action Controls */}
        <div className="w-full md:w-[380px] p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Header with Title & Close */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#8f8f8f] block mb-1">
                  {star.categoryName}
                </span>
                <h3 className="text-xl font-semibold text-[#171717] tracking-tight">
                  {star.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-full text-[#8f8f8f] hover:text-[#171717] hover:bg-[#fafafa] border border-transparent hover:border-[#ebebeb] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Color Switcher with 3D Gradient support */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#4d4d4d] flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-[#171717]" />
                  Color Tone (3D / Glow Adapted)
                </label>
                <span className="text-xs font-mono text-[#8f8f8f]">
                  {selectedColor === 'ORIGINAL' ? 'Original' : activeColor}
                </span>
              </div>

              {/* Presets Grid */}
              <div className="grid grid-cols-5 gap-2 mb-2">
                {COLOR_PRESETS.map((preset) => {
                  const isSelected = selectedColor === preset.hex;
                  return (
                    <button
                      key={preset.name}
                      type="button"
                      onClick={() => setSelectedColor(preset.hex)}
                      title={preset.name}
                      className={`h-8 rounded-md border flex items-center justify-center transition-all cursor-pointer ${
                        isSelected 
                          ? 'border-[#171717] ring-2 ring-[#171717]/20 scale-105' 
                          : 'border-[#ebebeb] hover:border-[#8f8f8f]'
                      }`}
                      style={{
                        backgroundColor: preset.hex === 'ORIGINAL' ? star.defaultColor : preset.hex,
                      }}
                    >
                      {isSelected && (
                        <Check className={`w-3.5 h-3.5 ${
                          preset.hex === '#FFFFFF' || preset.hex === '#FACC15' || preset.hex === '#EAB308' ? 'text-black' : 'text-white'
                        }`} />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Custom Hex Input */}
              <div className="flex items-center gap-2 mt-2">
                <input
                  type="color"
                  value={customHex}
                  onChange={(e) => {
                    setCustomHex(e.target.value);
                    setSelectedColor('CUSTOM');
                  }}
                  className="w-8 h-8 rounded-md cursor-pointer border border-[#ebebeb] p-0.5"
                  title="Pick custom hex color"
                />
                <input
                  type="text"
                  value={customHex}
                  onChange={(e) => {
                    setCustomHex(e.target.value);
                    setSelectedColor('CUSTOM');
                  }}
                  placeholder="#000000"
                  className="flex-1 px-2.5 py-1.5 text-xs font-mono rounded-md border border-[#ebebeb] bg-[#fafafa] text-[#171717] focus:outline-none focus:border-[#171717]"
                />
              </div>
            </div>

            {/* Resolution Selector */}
            <div className="mb-6">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#4d4d4d] flex items-center gap-1.5 mb-2">
                <Maximize2 className="w-3.5 h-3.5 text-[#171717]" />
                Export Resolution
              </label>
              <div className="grid grid-cols-2 gap-2">
                {RESOLUTIONS.map((res) => {
                  const isSelected = resolution === res.size;
                  return (
                    <button
                      key={res.size}
                      type="button"
                      onClick={() => setResolution(res.size)}
                      className={`px-3 py-2 rounded-lg border text-left transition-all cursor-pointer ${
                        isSelected 
                          ? 'border-[#171717] bg-[#fafafa] text-[#171717] shadow-xs' 
                          : 'border-[#ebebeb] text-[#4d4d4d] hover:border-[#8f8f8f]'
                      }`}
                    >
                      <div className="text-xs font-semibold">{res.label}</div>
                      <div className="text-[10px] text-[#8f8f8f] font-mono">{res.tag}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2 pt-4 border-t border-[#ebebeb]">
            {/* Primary Action: Copy PNG directly to Clipboard */}
            <button
              type="button"
              onClick={handleCopyPng}
              disabled={isProcessing}
              className="w-full py-3 px-4 rounded-full bg-[#171717] text-white hover:bg-black font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-sm active:scale-[0.99] cursor-pointer"
            >
              {copiedStatus === 'png' ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Copied Transparent PNG!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy PNG to Clipboard</span>
                </>
              )}
            </button>

            {/* Secondary Action: Download PNG */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleDownloadPng}
                disabled={isProcessing}
                className="py-2.5 px-3 rounded-full bg-white border border-[#ebebeb] hover:border-[#171717] text-[#171717] text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PNG</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadSvg}
                className="py-2.5 px-3 rounded-full bg-white border border-[#ebebeb] hover:border-[#171717] text-[#171717] text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <FileCode className="w-3.5 h-3.5 text-[#0070F3]" />
                <span>Vector SVG</span>
              </button>
            </div>

            {/* Tertiary Action: Copy SVG Code */}
            <button
              type="button"
              onClick={handleCopySvgCode}
              className="w-full text-center text-xs text-[#8f8f8f] hover:text-[#171717] transition-colors py-1 cursor-pointer"
            >
              {copiedStatus === 'svg' ? 'SVG Code Copied!' : 'Copy raw SVG markup for web/React'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
