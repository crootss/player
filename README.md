# Embed Video Player

Sebelumnya pastikan video suda di kompresi

## Kompresi Video

- **Resolusi**: 1080x1920 (Full HD dalam format vertikal, kemungkinan untuk layar ponsel atau penggunaan portrait).
- **Frame Rate**: 50 FPS (cukup tinggi, biasanya 24-30 FPS sudah memadai).
- **Audio Track**: Video memiliki 1 track audio, yang dapat dihapus jika tidak diperlukan untuk mengurangi ukuran.
- **Format**: SDR (8-bit 4:2:0, normal untuk video standar).

### Langkah Optimasi yang Bisa Dilakukan:
1. **Turunkan Resolusi**:
   - Jika video digunakan sebagai latar belakang, Full HD (1080x1920) mungkin terlalu besar. Anda bisa menurunkan resolusi ke **720x1280** (720p) atau bahkan **480x854** (480p) untuk mengurangi ukuran file.

   **FFmpeg Command**:
   ```bash
   ffmpeg -i input.mp4 -vf scale=720:-1 output.mp4
   ```

2. **Turunkan Frame Rate**:
   - Frame rate 50 FPS tidak diperlukan untuk latar belakang video. Anda bisa menurunkan frame rate ke **30 FPS** atau bahkan **24 FPS**.
   
   **FFmpeg Command**:
   ```bash
   ffmpeg -i input.mp4 -r 30 output.mp4
   ```

3. **Hapus Audio**:
   - Jika audio tidak dibutuhkan (umumnya tidak untuk video latar belakang), hapus audio track untuk mengurangi ukuran file.

   **FFmpeg Command**:
   ```bash
   ffmpeg -i input.mp4 -an output.mp4
   ```

4. **Kompresi Video**:
   - Gunakan codec modern seperti **H.265 (HEVC)** atau **VP9** untuk kompresi lebih efisien. H.265 dapat mengurangi ukuran file hingga 50% dibanding H.264 tanpa kehilangan kualitas signifikan.

   **FFmpeg Command untuk H.265**:
   ```bash
   ffmpeg -i input.mp4 -vcodec libx265 -crf 28 output.mp4
   ```

   **FFmpeg Command untuk VP9**:
   ```bash
   ffmpeg -i input.mp4 -vcodec libvpx-vp9 -crf 30 -b:v 0 output.webm
   ```

   - **CRF** (Constant Rate Factor): Semakin tinggi nilai CRF, semakin kecil ukuran file, tetapi kualitasnya menurun. Nilai umum:
     - **23-28 untuk H.264**
     - **28-35 untuk H.265**
     - **30-40 untuk VP9**

5. **Potong Durasi Video**:
   - Jika video memiliki durasi panjang, potong ke durasi yang lebih pendek (misalnya, 10-15 detik). Latar belakang tidak memerlukan video panjang karena biasanya akan di-loop.

   **FFmpeg Command**:
   ```bash
   ffmpeg -i input.mp4 -t 10 -c copy output.mp4
   ```

6. **Gunakan Format Web-Friendly**:
   - Convert video ke **WebM (VP9)** atau tetap di **MP4 (H.264)**, karena keduanya didukung oleh semua browser modern.

   **FFmpeg Command untuk WebM**:
   ```bash
   ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 1M -an output.webm
   ```

### Langkah yang Direkomendasikan:
Gabungkan beberapa langkah dalam satu perintah untuk efisiensi. Misalnya:
- Turunkan resolusi ke 720p, frame rate ke 30 FPS, hapus audio, dan gunakan codec H.265:
   ```bash
   ffmpeg -i input.mp4 -vf scale=720:-1 -r 30 -an -vcodec libx265 -crf 28 output.mp4
   ```

### Hasil:
Setelah menerapkan langkah-langkah di atas, ukuran file video Anda akan jauh lebih kecil, dan lebih ringan untuk digunakan sebagai latar belakang di situs web.