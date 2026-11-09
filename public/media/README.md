# Personal media

This directory is deliberately empty of invented personal photographs or historical documents.

Put authorized originals in these folders as they become available:

- `photos/` — real friendship photographs (JPG, PNG, or WebP).
- `artifacts/` — obituary, Typhoon Culture covers, campaign poster, Earth paintings, supportive chat screenshot, Christmas message tree, Saturn presentation PDF, and BANANANA MILK PDF.
- `letters/` — the original May 20, 2023 letter as a readable image.
- `audio/` — a licensed recording, if available. Do not redistribute a commercial recording without permission.

Set the corresponding `src` in `src/content.ts`, for example `/media/letters/2023-05-20.jpg`. Images appear without filters or recoloring; PDFs open as original documents. Keep original proportions. For very long letters, use a high-resolution image that remains readable when enlarged.

The photo booth also accepts a local photograph at runtime. It never sends the photograph to a server. Runtime uploads are intentionally not stored across browser sessions.

For music, configure either `music.audioSrc` for authorized local audio or `music.embedUrl` for an authorized official embed URL. Playback always requires a click. Until then, the song control explains that the recording has not been added.

The currently supplied originals are bundled under `src/assets/personal/`: four Chapter 01 images, eight Chapter 02 reward originals, five Chapter 03 photographs and three Chapter 05 photographs. The obituary, cancer campaign and milk archives use their supplied originals. Other historical-document fields remain empty.

Chapter 05 uses `01.JPG`, `02.JPG` and `03.jpg` in filename order. The complete image determines the Polaroid frame and PNG dimensions; originals are not cropped or modified. Six generated transparent cartoon sticker PNGs and their prompts are in `src/assets/stickers/`.

The supplied site-wide background recording is bundled separately in `src/assets/audio/background-music.m4a`. All of Me is bundled in `src/assets/audio/all-of-me.m4a`; both tracks alternate in one shared player controlled by the header and Final Letter song dialog.

The May 20, 2023 archive uses the user-supplied text in `src/content.ts`; no historical-letter image is required.
