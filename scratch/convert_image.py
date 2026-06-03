from PIL import Image
import os

png_path = 'images/profil.png'
webp_path = 'images/profil.webp'

if os.path.exists(png_path):
    img = Image.open(png_path)
    # Convert to RGB if needed (profil.png is likely RGBA)
    if img.mode in ('RGBA', 'P'):
        img = img.convert('RGB')
    img.save(webp_path, 'WEBP', quality=80)
    print(f"PNG size: {os.path.getsize(png_path)}")
    print(f"WebP size: {os.path.getsize(webp_path)}")
else:
    print(f"Error: {png_path} not found")
