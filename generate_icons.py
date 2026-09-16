#!/usr/bin/env python3
"""
generate_icons.py - Standalone Star Icon Generator
Generates UI interface icon PNGs, resizes them, creates the 'star_icons_small/' folder,
and produces an interactive index.html preview gallery.

Usage:
    python generate_icons.py
"""

import os
import sys
import time
import math
import itertools
from io import BytesIO

try:
    import requests
except ImportError:
    requests = None

try:
    from PIL import Image, ImageDraw, ImageOps
except ImportError:
    print("Error: Pillow is required. Install via: pip install Pillow")
    sys.exit(1)

# Configuration
API_KEY = os.environ.get("ANTIGRAVITY_API_KEY", "")
API_URL = "https://antigravity-api.google.com/v1/generate"
OUTPUT_DIR = "star_icons_small"
TARGET_SIZE = (96, 96)  # Crisp UI icon size

# 15 Core Semantic Subjects
SUBJECTS = [
    ("classic_star", "Classic Five-Pointed Star", "solid five-pointed star glyph"),
    ("outline_star", "Clean Outline Star", "clean thin outline five-pointed star"),
    ("diamond_sparkle", "Four-Point Sparkle Diamond", "four-pointed diamond sparkle star"),
    ("octagram_star", "Eight-Pointed Octagram Star", "eight-pointed faceted starburst badge"),
    ("shooting_star", "Shooting Star with Trail", "shooting star with trailing motion speed lines"),
    ("sparkle_cluster", "Cluster of Three Stars", "constellation cluster of three twinkling stars"),
    ("half_star", "Half-Filled Rating Star", "half-filled five-pointed rating star with vertical split"),
    ("trophy_cup", "Trophy Cup with Star Emblem", "championship trophy cup with star emblem embossed"),
    ("medal_badge", "Circular Medal with Star", "round circular medal badge containing a star"),
    ("shield_security", "Shield Badge with Star", "security trust shield badge with star in center"),
    ("user_avatar", "User Avatar with Star Accent", "user profile avatar silhouette with star accent"),
    ("speech_bubble", "Speech Bubble Review with Star", "chat speech bubble containing a star inside"),
    ("document_review", "Document Review with Stars", "document review sheet with rating stars and lines"),
    ("hand_star", "Hand Presenting Floating Star", "hand palm holding or presenting a floating star"),
    ("focus_brackets", "Star in Focus Brackets", "star framed by four corner focus brackets"),
    ("ribbon_bookmark", "Ribbon Bookmark with Star", "vertical hanging ribbon bookmark with star emblem")
]

# 4 Standard Interface Style Treatments
STYLES = [
    ("outline", "Outline Lineart", "minimalist clean thin outline lineart"),
    ("solid", "Solid Glyph", "solid black silhouette flat glyph"),
    ("circle_badge", "Circular Badge", "enclosed inside a solid circular badge with knockout star"),
    ("rounded_square", "Rounded Square Button", "enclosed inside an outlined rounded square button")
]

def draw_star_polygon(draw, cx, cy, r_outer, r_inner, points_count=5, fill=None, outline=None, width=2, rotate_offset=-math.pi/2):
    """Draws an n-point star polygon."""
    pts = []
    total_pts = points_count * 2
    angle_step = math.pi / points_count
    for i in range(total_pts):
        r = r_outer if i % 2 == 0 else r_inner
        ang = rotate_offset + i * angle_step
        x = cx + r * math.cos(ang)
        y = cy + r * math.sin(ang)
        pts.append((x, y))
    
    if fill:
        draw.polygon(pts, fill=fill)
    if outline:
        draw.polygon(pts, outline=outline)
        if width > 1:
            for i in range(len(pts)):
                p1 = pts[i]
                p2 = pts[(i + 1) % len(pts)]
                draw.line([p1, p2], fill=outline, width=width)

def render_local_icon(subject_key, style_key, size=(256, 256)):
    """Procedurally renders a crisp, pixel-perfect 32-bit transparent monochrome icon."""
    img = Image.new("RGBA", size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    w, h = size
    cx, cy = w / 2, h / 2
    color = (23, 23, 23, 255) # Sleek graphite black
    
    # Outer container depending on style
    if style_key == "circle_badge":
        draw.ellipse([16, 16, w - 16, h - 16], fill=color)
        color = (255, 255, 255, 255) # Invert to white knockout
    elif style_key == "rounded_square":
        # Rounded square outline
        draw.rounded_rectangle([16, 16, w - 16, h - 16], radius=32, outline=color, width=10)
    
    is_outline = (style_key == "outline")
    fill_color = None if is_outline else color
    stroke_color = color
    stroke_w = 10 if is_outline else 4

    # Subject specific geometries
    if subject_key in ("classic_star", "outline_star"):
        r_out = 80 if style_key not in ("circle_badge", "rounded_square") else 55
        r_in = r_out * 0.45
        draw_star_polygon(draw, cx, cy, r_out, r_in, 5, fill=fill_color, outline=stroke_color, width=stroke_w)

    elif subject_key == "diamond_sparkle":
        # 4-point diamond star
        r_out = 85 if style_key not in ("circle_badge", "rounded_square") else 60
        r_in = r_out * 0.22
        draw_star_polygon(draw, cx, cy, r_out, r_in, 4, fill=fill_color, outline=stroke_color, width=stroke_w)

    elif subject_key == "octagram_star":
        # 8-point octagram star
        r_out = 80 if style_key not in ("circle_badge", "rounded_square") else 56
        r_in = r_out * 0.55
        draw_star_polygon(draw, cx, cy, r_out, r_in, 8, fill=fill_color, outline=stroke_color, width=stroke_w)

    elif subject_key == "half_star":
        # Half filled rating star
        r_out = 80 if style_key not in ("circle_badge", "rounded_square") else 55
        r_in = r_out * 0.45
        # Draw outline
        draw_star_polygon(draw, cx, cy, r_out, r_in, 5, fill=None, outline=stroke_color, width=8)
        # Mask left half
        left_mask = Image.new("L", size, 0)
        draw_m = ImageDraw.Draw(left_mask)
        draw_m.rectangle([0, 0, cx, h], fill=255)
        # Filled star
        filled = Image.new("RGBA", size, (0, 0, 0, 0))
        draw_f = ImageDraw.Draw(filled)
        draw_star_polygon(draw_f, cx, cy, r_out, r_in, 5, fill=stroke_color, outline=None)
        # Composite
        img.paste(filled, (0, 0), left_mask)

    elif subject_key == "sparkle_cluster":
        # 3 stars
        draw_star_polygon(draw, cx - 30, cy + 10, 48, 14, 4, fill=fill_color, outline=stroke_color, width=6)
        draw_star_polygon(draw, cx + 42, cy - 35, 30, 9, 4, fill=fill_color, outline=stroke_color, width=5)
        draw_star_polygon(draw, cx + 45, cy + 38, 22, 7, 4, fill=fill_color, outline=stroke_color, width=4)

    elif subject_key == "shooting_star":
        # Star head + 3 speed streaks
        draw_star_polygon(draw, cx + 35, cy - 35, 45, 20, 5, fill=fill_color, outline=stroke_color, width=6)
        draw.line([(cx + 5, cy - 10), (cx - 75, cy + 65)], fill=stroke_color, width=8)
        draw.line([(cx + 25, cy + 10), (cx - 40, cy + 75)], fill=stroke_color, width=6)
        draw.line([(cx - 15, cy - 25), (cx - 65, cy + 25)], fill=stroke_color, width=6)

    elif subject_key == "trophy_cup":
        # Trophy cup outline / silhouette
        draw.rectangle([cx - 36, cy - 60, cx + 36, cy + 5], fill=fill_color, outline=stroke_color, width=8)
        draw.arc([cx - 56, cy - 50, cx - 20, cy - 10], 90, 270, fill=stroke_color, width=8)
        draw.arc([cx + 20, cy - 50, cx + 56, cy - 10], -90, 90, fill=stroke_color, width=8)
        draw.rectangle([cx - 8, cy + 5, cx + 8, cy + 35], fill=stroke_color)
        draw.rounded_rectangle([cx - 38, cy + 35, cx + 38, cy + 55], radius=6, fill=fill_color, outline=stroke_color, width=8)
        # Tiny star on cup
        draw_star_polygon(draw, cx, cy - 28, 16, 7, 5, fill=(255, 255, 255, 255) if not is_outline else stroke_color)

    elif subject_key == "shield_security":
        pts = [
            (cx, cy - 70),
            (cx + 55, cy - 45),
            (cx + 55, cy + 10),
            (cx, cy + 65),
            (cx - 55, cy + 10),
            (cx - 55, cy - 45)
        ]
        draw.polygon(pts, fill=fill_color, outline=stroke_color)
        if stroke_w > 1:
            for i in range(len(pts)):
                draw.line([pts[i], pts[(i+1)%len(pts)]], fill=stroke_color, width=stroke_w)
        star_fill = (255, 255, 255, 255) if not is_outline else stroke_color
        draw_star_polygon(draw, cx, cy - 2, 28, 12, 5, fill=star_fill)

    elif subject_key == "speech_bubble":
        draw.rounded_rectangle([cx - 65, cy - 60, cx + 65, cy + 30], radius=20, fill=fill_color, outline=stroke_color, width=8)
        tail = [(cx - 20, cy + 30), (cx - 40, cy + 65), (cx + 5, cy + 30)]
        draw.polygon(tail, fill=fill_color if not is_outline else (0,0,0,0), outline=stroke_color)
        star_fill = (255, 255, 255, 255) if not is_outline else stroke_color
        draw_star_polygon(draw, cx, cy - 15, 28, 12, 5, fill=star_fill)

    elif subject_key == "document_review":
        draw.rounded_rectangle([cx - 50, cy - 70, cx + 50, cy + 65], radius=12, fill=fill_color, outline=stroke_color, width=8)
        # 3 Stars row
        s_fill = (255, 255, 255, 255) if not is_outline else stroke_color
        draw_star_polygon(draw, cx - 26, cy - 35, 14, 6, 5, fill=s_fill)
        draw_star_polygon(draw, cx, cy - 35, 14, 6, 5, fill=s_fill)
        draw_star_polygon(draw, cx + 26, cy - 35, 14, 6, 5, fill=s_fill)
        # Lines
        line_color = (255, 255, 255, 255) if not is_outline else stroke_color
        draw.line([(cx - 30, cy + 5), (cx + 30, cy + 5)], fill=line_color, width=6)
        draw.line([(cx - 30, cy + 28), (cx + 15, cy + 28)], fill=line_color, width=6)

    elif subject_key == "user_avatar":
        draw.ellipse([cx - 30, cy - 65, cx + 30, cy - 5], fill=fill_color, outline=stroke_color, width=8)
        draw.chord([cx - 60, cy + 5, cx + 60, cy + 95], 0, 180, fill=fill_color, outline=stroke_color, width=8)
        # Star badge on top-right
        draw_star_polygon(draw, cx + 45, cy - 45, 25, 10, 5, fill=color, outline=(255,255,255,255), width=3)

    elif subject_key == "focus_brackets":
        draw_star_polygon(draw, cx, cy, 45, 20, 5, fill=fill_color, outline=stroke_color, width=stroke_w)
        # 4 Corner brackets
        d = 65
        arm = 22
        draw.line([(cx - d, cy - d), (cx - d + arm, cy - d)], fill=stroke_color, width=8)
        draw.line([(cx - d, cy - d), (cx - d, cy - d + arm)], fill=stroke_color, width=8)
        draw.line([(cx + d, cy - d), (cx + d - arm, cy - d)], fill=stroke_color, width=8)
        draw.line([(cx + d, cy - d), (cx + d, cy - d + arm)], fill=stroke_color, width=8)
        draw.line([(cx - d, cy + d), (cx - d + arm, cy + d)], fill=stroke_color, width=8)
        draw.line([(cx - d, cy + d), (cx - d, cy + d - arm)], fill=stroke_color, width=8)
        draw.line([(cx + d, cy + d), (cx + d - arm, cy + d)], fill=stroke_color, width=8)
        draw.line([(cx + d, cy + d), (cx + d, cy + d - arm)], fill=stroke_color, width=8)

    elif subject_key == "ribbon_bookmark":
        ribbon_pts = [
            (cx - 35, cy - 70),
            (cx + 35, cy - 70),
            (cx + 35, cy + 65),
            (cx, cy + 35),
            (cx - 35, cy + 65)
        ]
        draw.polygon(ribbon_pts, fill=fill_color, outline=stroke_color)
        if stroke_w > 1:
            for i in range(len(ribbon_pts)):
                draw.line([ribbon_pts[i], ribbon_pts[(i+1)%len(ribbon_pts)]], fill=stroke_color, width=stroke_w)
        s_fill = (255, 255, 255, 255) if not is_outline else stroke_color
        draw_star_polygon(draw, cx, cy - 15, 22, 9, 5, fill=s_fill)

    else:
        # Generic hand + star / fallback
        draw_star_polygon(draw, cx, cy - 25, 45, 19, 5, fill=fill_color, outline=stroke_color, width=stroke_w)
        # Open hand curve below
        draw.arc([cx - 65, cy - 10, cx + 65, cy + 70], 30, 150, fill=stroke_color, width=10)

    return img

def generate_index_html(output_dir, catalog_items):
    """Generates a state-of-the-art interactive HTML preview gallery for star_icons_small."""
    html_path = os.path.join(output_dir, "index.html")
    
    cards_html = ""
    for item in catalog_items:
        cards_html += f"""
        <div class="icon-card" data-subject="{item['subject_key']}" data-style="{item['style_key']}">
          <div class="preview-box">
            <img src="{item['filename']}" alt="{item['title']}" width="64" height="64" />
          </div>
          <div class="card-info">
            <div class="card-title">{item['title']}</div>
            <div class="card-meta">
              <span class="badge">{item['style_name']}</span>
              <span class="size-badge">96x96</span>
            </div>
            <div class="card-actions">
              <a href="{item['filename']}" download class="btn btn-download">Download</a>
              <button class="btn btn-copy" onclick="copyPath('{item['filename']}', this)">Copy</button>
            </div>
          </div>
        </div>
        """
        
    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Star Icons Small — Local UI Interface Icon Suite</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <style>
    :root {{
      --bg: #FAFAFA;
      --card-bg: #FFFFFF;
      --border: #EBEBEB;
      --text: #171717;
      --text-muted: #737373;
      --accent: #F59E0B;
    }}
    * {{ box-sizing: border-box; margin: 0; padding: 0; }}
    body {{
      font-family: 'Inter', system-ui, sans-serif;
      background: var(--bg);
      color: var(--text);
      padding: 40px 24px;
      line-height: 1.5;
    }}
    .container {{ max-w: 1280px; margin: 0 auto; }}
    header {{
      text-align: center;
      margin-bottom: 40px;
    }}
    h1 {{
      font-size: 2.25rem;
      font-weight: 700;
      letter-spacing: -0.03em;
      margin-bottom: 8px;
    }}
    .subtitle {{
      color: var(--text-muted);
      font-size: 1rem;
      max-width: 600px;
      margin: 0 auto 24px;
    }}
    .toolbar {{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
      margin-bottom: 32px;
    }}
    .filter-btn {{
      background: white;
      border: 1px solid var(--border);
      border-radius: 9999px;
      padding: 8px 18px;
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--text);
      cursor: pointer;
      transition: all 0.15s ease;
    }}
    .filter-btn:hover, .filter-btn.active {{
      background: var(--text);
      color: white;
      border-color: var(--text);
    }}
    .grid {{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 20px;
    }}
    .icon-card {{
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }}
    .icon-card:hover {{
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.06);
    }}
    .preview-box {{
      width: 100%;
      height: 120px;
      border-radius: 12px;
      background-image: linear-gradient(45deg, #f0f0f0 25%, transparent 25%), 
                        linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), 
                        linear-gradient(45deg, transparent 75%, #f0f0f0 75%), 
                        linear-gradient(-45deg, transparent 75%, #f0f0f0 75%);
      background-size: 16px 16px;
      background-position: 0 0, 0 8px, 8px -8px, -8px 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 12px;
    }}
    .preview-box img {{
      image-rendering: -webkit-optimize-contrast;
      transition: transform 0.2s ease;
    }}
    .icon-card:hover .preview-box img {{
      transform: scale(1.1);
    }}
    .card-info {{
      width: 100%;
      text-align: center;
    }}
    .card-title {{
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 8px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }}
    .card-meta {{
      display: flex;
      justify-content: center;
      gap: 6px;
      margin-bottom: 12px;
    }}
    .badge {{
      font-size: 0.7rem;
      padding: 2px 8px;
      border-radius: 9999px;
      background: #F4F4F5;
      color: #52525B;
      font-weight: 500;
    }}
    .size-badge {{
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      padding: 2px 6px;
      border-radius: 4px;
      background: #EFF6FF;
      color: #2563EB;
    }}
    .card-actions {{
      display: flex;
      gap: 8px;
      width: 100%;
    }}
    .btn {{
      flex: 1;
      padding: 6px 10px;
      border-radius: 8px;
      font-size: 0.75rem;
      font-weight: 600;
      text-decoration: none;
      text-align: center;
      border: 1px solid var(--border);
      cursor: pointer;
      transition: all 0.15s ease;
    }}
    .btn-download {{
      background: #171717;
      color: white;
      border-color: #171717;
    }}
    .btn-download:hover {{ background: black; }}
    .btn-copy {{
      background: white;
      color: var(--text);
    }}
    .btn-copy:hover {{ background: #f4f4f5; }}
    .copied {{
      background: #10B981 !important;
      color: white !important;
      border-color: #10B981 !important;
    }}
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>Star Icons Small</h1>
      <p class="subtitle">Complete local UI interface icon suite generated with 100% transparent alpha channels. Ready for immediate use in apps, web projects, and designs.</p>
      
      <div class="toolbar">
        <button class="filter-btn active" onclick="filterIcons('all')">All ({len(catalog_items)})</button>
        <button class="filter-btn" onclick="filterIcons('outline')">Outline Lineart</button>
        <button class="filter-btn" onclick="filterIcons('solid')">Solid Glyph</button>
        <button class="filter-btn" onclick="filterIcons('circle_badge')">Circular Badge</button>
        <button class="filter-btn" onclick="filterIcons('rounded_square')">Rounded Square</button>
      </div>
    </header>

    <div class="grid">
      {cards_html}
    </div>
  </div>

  <script>
    function filterIcons(style) {{
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');
      
      const cards = document.querySelectorAll('.icon-card');
      cards.forEach(card => {{
        if (style === 'all' || card.dataset.style === style) {{
          card.style.display = 'flex';
        }} else {{
          card.style.display = 'none';
        }}
      }});
    }}

    function copyPath(filename, btn) {{
      navigator.clipboard.writeText(filename).then(() => {{
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {{
          btn.textContent = originalText;
          btn.classList.remove('copied');
        }}, 1500);
      }});
    }}
  </script>
</body>
</html>
"""
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html_content)

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    print("=" * 60)
    print(f"STAR ICONS SMALL GENERATOR")
    print(f"Output Directory: {os.path.abspath(OUTPUT_DIR)}")
    print(f"Target Resolution: {TARGET_SIZE[0]}x{TARGET_SIZE[1]} px (RGBA Alpha)")
    print("=" * 60)

    # Permutations: 15 Subjects x 4 Styles = 60 Icons
    catalog_items = []
    total_count = len(SUBJECTS) * len(STYLES)
    idx = 1

    for (s_key, s_name, s_desc), (st_key, st_name, st_desc) in itertools.product(SUBJECTS, STYLES):
        filename = f"{idx:02d}_{s_key}_{st_key}.png"
        filepath = os.path.join(OUTPUT_DIR, filename)
        title = f"{s_name} ({st_name})"

        # Render high-res master then resize with high-quality Lanczos resampling
        master_img = render_local_icon(s_key, st_key, size=(256, 256))
        small_img = master_img.resize(TARGET_SIZE, Image.Resampling.LANCZOS)
        small_img.save(filepath, "PNG", optimize=True)

        catalog_items.append({
            "idx": idx,
            "filename": filename,
            "title": title,
            "subject_key": s_key,
            "style_key": st_key,
            "style_name": st_name
        })

        print(f"[{idx:02d}/{total_count}] Generated: {filename}")
        idx += 1

    # Generate interactive index.html preview gallery
    generate_index_html(OUTPUT_DIR, catalog_items)
    index_path = os.path.join(OUTPUT_DIR, "index.html")
    
    print("\n" + "=" * 60)
    print(f"SUCCESS! {len(catalog_items)} UI icon PNGs created in: {OUTPUT_DIR}/")
    print(f"Interactive gallery created: {os.path.abspath(index_path)}")
    print("=" * 60)

if __name__ == "__main__":
    main()
