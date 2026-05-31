import urllib.request
import os

def download_logos():
    os.makedirs("logos", exist_ok=True)
    targets = {
        "react.png": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
        "typescript.png": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png",
        "threejs.png": "https://avatars.githubusercontent.com/u/1049281?s=200&v=4",
        "blender.png": "https://avatars.githubusercontent.com/u/451363?s=200&v=4"
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
    download_logos()
