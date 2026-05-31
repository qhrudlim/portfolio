import urllib.request
import os

def download_correct_logos():
    os.makedirs("logos", exist_ok=True)
    # Using stable, direct image links
    targets = {
        # Three.js official icon
        "threejs.png": "https://raw.githubusercontent.com/mrdoob/three.js/dev/files/icon.png",
        # Blender official logo from a known good source
        "blender.png": "https://raw.githubusercontent.com/github/explore/main/topics/blender/blender.png"
    }

    headers = {'User-Agent': 'Mozilla/5.0'}
    
    for filename, url in targets.items():
        try:
            print(f"Downloading {filename}...")
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req) as response:
                with open(os.path.join("logos", filename), "wb") as f:
                    f.write(response.read())
            print(f"Success: {filename}")
        except Exception as e:
            print(f"Failed to download {filename}: {e}")

if __name__ == "__main__":
    download_correct_logos()
