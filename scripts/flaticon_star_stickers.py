import os
import time
import requests

API_KEY = os.environ.get("ANTIGRAVITY_API_KEY", "YOUR_ANTIGRAVITY_API_KEY")
URL = "https://antigravity-api.google.com/v1/generate"

stickers = [
    # Row 1 (Screen Viewport)
    "cute pastel lavender crescent moon decorated with delicate dark botanical leaves and tiny sparkle dots, whimsical celestial sticker, thick white die-cut border",
    "magical fantasy wand with a cute pastel yellow star head and a diagonal purple and white striped handle, flat cartoon vector sticker, clean black outline, white border",
    "golden five-pointed star award badge centered above blue ribbon tails with curved vibrant lettering reading 'EXCELLENT' and small confetti sparks, vector trophy sticker",
    "elegant shooting star trajectory path made of dotted curved lines and varied four-point sparkle stars, minimalist light grey and white vector sticker, clean edges",

    # Row 2 (Screen Viewport)
    "cute minimalist doodle character raising both hands in celebration with curved bold text reading 'Very GOOD' and small star accents, clean black lineart sticker",
    "clean geometric five-pointed gold star with faceted dimensional folds, subtle orange shading, flat vector design, thick white die-cut border, solid white background",
    "interlocking geometric polygon ring star ribbon in vivid bright pink and red tones, modern abstract 3D origami badge, clean vector sticker, white outline",
    "adorable bright yellow star character with round blue eyes, happy open mouth, rosy blush cheeks, floating small blue clouds and sparkle accents, kawaii vector sticker",

    # Row 3 (Screen Viewport)
    "circular badge sticker featuring a smiling star character surrounded by curved rainbow bands and bold curved typography reading 'GOOD WORK!', thick white border",
    "pastel shooting star character trailing a curved multi-colored rainbow ribbon tail with tiny floating accent stars, whimsical flat vector sticker, bold outline",
    "shining golden star trophy cup on an ornate base surrounded by celebratory star confetti and hand-drawn sparkle squiggles, victory award sticker, bold lineart",
    "twin shooting star characters with cute happy faces trailing pastel rainbow trails together in flight, playful celestial vector sticker, thick white die-cut border"
]

headers = {"Authorization": f"Bearer {API_KEY}"}

# Create output folder
os.makedirs("flaticon_star_stickers", exist_ok=True)

for i, prompt in enumerate(stickers, start=1):
    payload = {
        "prompt": f"die-cut sticker of {prompt}, clean 2D vector graphic, pure solid white background, high resolution",
        "aspect_ratio": "1:1"
    }
    
    try:
        response = requests.post(URL, headers=headers, json=payload)
        if response.status_code == 200:
            filename = os.path.join("flaticon_star_stickers", f"star_sticker_{i}.png")
            with open(filename, "wb") as f:
                f.write(response.content)
            print(f"[{i}/{len(stickers)}] Saved: {filename}")
        else:
            print(f"[{i}/{len(stickers)}] Failed ({response.status_code}): {response.text}")
    except Exception as err:
        print(f"[{i}/{len(stickers)}] Request failed: {err}")

    # Delay to respect API rate limits
    time.sleep(2)
