import os
import time
import requests

API_KEY = os.environ.get("ANTIGRAVITY_API_KEY", "YOUR_ANTIGRAVITY_API_KEY")
URL = "https://antigravity-api.google.com/v1/generate"

icons = [
    # Row 1 (Viewport)
    "solid black silhouette five-pointed star glyph, minimalist UI icon, pure white background, flat vector",
    "round circular medal badge containing an outlined five-pointed star inside, minimalist vector line icon",
    "customer review document sheet with three small five-pointed rating stars on top, clean vector UI icon",
    "clean outline five-pointed star, uniform thin black stroke line art, minimalist interface icon",
    "four-point sparkle star surrounded by motion dust speckles, magical twinkle icon, clean black vector glyph",
    "clipboard review checklist with three stars and horizontal text lines, flat UI interface icon",
    "hand palm holding or presenting a floating five-pointed star, talent and achievement concept, vector icon",

    # Row 2 (Viewport)
    "outlined shooting star with three diagonal trailing motion speed lines, linear vector interface icon",
    "large outlined five-pointed star with a smaller star nested beside it, minimalist UI rating icon",
    "smartphone mobile screen displaying three rating stars in the center, app review feedback icon",
    "solid black shooting star silhouette streaking downward with speed trail dashes, vector icon",
    "geometric four-pointed diamond sparkle star glyph, solid black fill, minimalist UI element",
    "solid silhouette shooting star with two parallel streak motion lines, clean interface icon",
    "user profile avatar silhouette next to a small five-pointed star, favorite user or rating icon",

    # Row 3 (Viewport)
    "hand holding a small floating star silhouette, giving feedback or reward gesture, clean vector icon",
    "classic sharp five-pointed star, solid black geometric silhouette, minimal flat interface glyph",
    "eight-pointed faceted starburst badge silhouette, octagram geometric star icon, bold black fill",
    "paper sheet document review with star rating and checkmarks, minimalist vector glyph",
    "outlined five-pointed star with a smaller accent star floating to the top right, clean line art",
    "championship trophy cup silhouette with a five-pointed star embossed on the cup, achievement icon",
    "user experience feedback icon, human face profile with small star sparkles, minimalist vector"
]

headers = {"Authorization": f"Bearer {API_KEY}"}

# Create output folder
os.makedirs("star_interface_icons", exist_ok=True)

for i, prompt in enumerate(icons, start=1):
    payload = {
        "prompt": (
            f"minimalist vector UI interface icon of {prompt}, "
            "monochrome solid black on seamless pure white background, "
            "SVG icon design style, sharp crisp edges, no gradients, no shadows, no gray tones"
        ),
        "aspect_ratio": "1:1"
    }
    
    try:
        response = requests.post(URL, headers=headers, json=payload)
        if response.status_code == 200:
            filename = os.path.join("star_interface_icons", f"interface_star_{i}.png")
            with open(filename, "wb") as f:
                f.write(response.content)
            print(f"[{i}/{len(icons)}] Saved: {filename}")
        else:
            print(f"[{i}/{len(icons)}] Failed ({response.status_code}): {response.text}")
    except Exception as err:
        print(f"[{i}/{len(icons)}] Request failed: {err}")

    time.sleep(2)
