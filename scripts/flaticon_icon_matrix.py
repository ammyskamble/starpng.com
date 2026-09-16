import itertools
import os
import time
import requests

API_KEY = os.environ.get("ANTIGRAVITY_API_KEY", "YOUR_ANTIGRAVITY_API_KEY")
URL = "https://antigravity-api.google.com/v1/generate"

# Core semantic subjects found across all 574 icons on Flaticon
subjects = [
    "classic five-pointed star",
    "four-pointed sparkle diamond",
    "eight-pointed octagram star",
    "shooting star with motion trail",
    "cluster of three twinkling stars",
    "half-filled rating star",
    "trophy cup with star emblem",
    "circular medal with ribbon and star",
    "shield badge with star",
    "user profile avatar with star accent",
    "speech bubble containing a star",
    "document review with stars",
    "hand presenting a floating star",
    "star framed by four corner focus brackets",
    "vertical ribbon bookmark with star"
]

# Standard interface style treatments
styles = [
    "minimalist clean thin outline lineart",
    "solid black silhouette flat glyph",
    "enclosed inside a solid circular badge",
    "enclosed inside an outlined rounded square button"
]

# Generates clean prompt permutations across the collection (60 total)
catalog_prompts = [
    {
        "subject": subject,
        "style": style,
        "prompt": (
            f"minimalist vector UI interface icon of {subject}, {style}, "
            "monochrome solid black on pure white background, "
            "SVG icon style, sharp edges, no shadows, no gray tones"
        )
    }
    for subject, style in itertools.product(subjects, styles)
]

def generate_batch(output_dir="flaticon_icon_matrix"):
    headers = {"Authorization": f"Bearer {API_KEY}"}
    os.makedirs(output_dir, exist_ok=True)
    
    print(f"Starting batch generation for {len(catalog_prompts)} icon permutations...")
    
    for i, item in enumerate(catalog_prompts, start=1):
        slug = f"{item['subject'].replace(' ', '_')}_{item['style'].replace(' ', '_')}"
        filename = os.path.join(output_dir, f"{i:02d}_{slug}.png")
        
        if os.path.exists(filename):
            print(f"[{i}/{len(catalog_prompts)}] Skipping existing: {filename}")
            continue
            
        payload = {
            "prompt": item["prompt"],
            "aspect_ratio": "1:1"
        }
        
        try:
            response = requests.post(URL, headers=headers, json=payload)
            if response.status_code == 200:
                with open(filename, "wb") as f:
                    f.write(response.content)
                print(f"[{i}/{len(catalog_prompts)}] Saved: {filename}")
            else:
                print(f"[{i}/{len(catalog_prompts)}] Failed ({response.status_code}): {response.text}")
        except Exception as err:
            print(f"[{i}/{len(catalog_prompts)}] Request failed: {err}")
            
        time.sleep(1.5)

if __name__ == "__main__":
    print(f"Total permutations generated: {len(catalog_prompts)}")
    for p in catalog_prompts[:5]:
        print(" -", p["prompt"])
