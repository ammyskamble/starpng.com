import React, { useState } from 'react';
import { Copy, Check, Download } from 'lucide-react';
import { injectColorShades } from '../utils/colorUtils';

interface AssetCopyButtonProps {
  svgContent: string;
  defaultColor: string;
  viewBox: string;
  title: string;
  slug: string;
}

export default function AssetCopyButton({
  svgContent,
  defaultColor,
  viewBox,
  title,
  slug,
}: AssetCopyButtonProps) {
  const [copiedSvg, setCopiedSvg] = useState(false);
  const [copiedPng, setCopiedPng] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const getColoredSvg = () => injectColorShades(svgContent, defaultColor, slug);

  const buildFullSvg = (size: number): string => {
    const colored = getColoredSvg();
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="${size}" height="${size}">${colored}</svg>`;
  };

  const svgToPngBlob = (svgStr: string, size: number): Promise<Blob> =>
    new Promise((resolve, reject) => {
      const blob = new Blob([svgStr], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d')!;
        ctx.drawImage(img, 0, 0, size, size);
        URL.revokeObjectURL(url);
        canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('Canvas failed'))), 'image/png');
      };
      img.onerror = reject;
      img.src = url;
    });

  const handleCopySvg = async () => {
    try {
      await navigator.clipboard.writeText(buildFullSvg(512));
      setCopiedSvg(true);
      setTimeout(() => setCopiedSvg(false), 2000);
    } catch (err) {
      console.error('SVG copy failed', err);
    }
  };

  const handleCopyPng = async () => {
    try {
      const svgStr = buildFullSvg(512);
      const blob = await svgToPngBlob(svgStr, 512);
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
      setCopiedPng(true);
      setTimeout(() => setCopiedPng(false), 2000);
    } catch (err) {
      console.error('PNG copy failed', err);
    }
  };

  const handleDownloadPng = async () => {
    setIsDownloading(true);
    try {
      const svgStr = buildFullSvg(2048);
      const blob = await svgToPngBlob(svgStr, 2048);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${slug}-starpng.png`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download failed', err);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDownloadSvg = () => {
    const svgStr = buildFullSvg(512);
    const blob = new Blob([svgStr], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${slug}-starpng.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-3">
      {/* Primary action buttons */}
      <div className="grid grid-cols-2 gap-2">
        <button
          id={`copy-png-${slug}`}
          onClick={handleCopyPng}
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#171717] text-white text-sm font-medium hover:bg-black transition-all shadow-xs"
        >
          {copiedPng ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          {copiedPng ? 'Copied!' : 'Copy PNG'}
        </button>
        <button
          id={`copy-svg-${slug}`}
          onClick={handleCopySvg}
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-[#ebebeb] text-[#171717] text-sm font-medium hover:border-[#171717] transition-all"
        >
          {copiedSvg ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
          {copiedSvg ? 'Copied!' : 'Copy SVG'}
        </button>
      </div>

      {/* Download buttons */}
      <div className="grid grid-cols-2 gap-2">
        <button
          id={`download-png-${slug}`}
          onClick={handleDownloadPng}
          disabled={isDownloading}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#fafafa] border border-[#ebebeb] text-[#4d4d4d] text-xs font-medium hover:border-[#171717] hover:text-[#171717] transition-all disabled:opacity-50"
        >
          <Download className="w-3.5 h-3.5" />
          {isDownloading ? 'Rendering...' : 'PNG 2048px'}
        </button>
        <button
          id={`download-svg-${slug}`}
          onClick={handleDownloadSvg}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#fafafa] border border-[#ebebeb] text-[#4d4d4d] text-xs font-medium hover:border-[#171717] hover:text-[#171717] transition-all"
        >
          <Download className="w-3.5 h-3.5" />
          SVG Vector
        </button>
      </div>

      <p className="text-[11px] text-[#8f8f8f] text-center">
        100% transparent alpha · Free CC0 · No attribution required
      </p>
    </div>
  );
}
