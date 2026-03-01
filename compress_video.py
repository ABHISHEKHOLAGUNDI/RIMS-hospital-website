import imageio_ffmpeg
import subprocess
import sys
import os

ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
input_video = r"c:\Users\abhis\Desktop\rims\public\videos\hospital-hero.mp4"
output_video = r"c:\Users\abhis\Desktop\rims\public\videos\hospital-hero-optimized.mp4"

# If optimized video already exists, remove it
if os.path.exists(output_video):
    os.remove(output_video)

# Compress to 720p, H264, CRF 28, faster preset for quick compression
cmd = [
    ffmpeg_exe,
    "-i", input_video,
    "-vf", "scale=-1:720",
    "-c:v", "libx264",
    "-crf", "28",
    "-preset", "faster",
    "-an",  # remove audio to save more space since the hero video is muted
    output_video
]

print(f"Running ffmpeg compression...")
result = subprocess.run(cmd, capture_output=True, text=True)
if result.returncode != 0:
    print("Error compressing video:")
    print(result.stderr[-1000:])
    sys.exit(1)
else:
    print("Successfully compressed video!")
    # Get sizes
    original_size = os.path.getsize(input_video) / (1024 * 1024)
    new_size = os.path.getsize(output_video) / (1024 * 1024)
    print(f"Original size: {original_size:.2f} MB")
    print(f"New size: {new_size:.2f} MB")
