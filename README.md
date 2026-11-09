# Seventeen, Katherine. — second edition

Carrie’s seven-chapter birthday gift for Katherine, November 9, 2026. This edition replaces the original visual design with a sage-and-linen personal website, illustrated scrapbook objects, and distinct physical motion. No public deployment has been made.

## Open the website

The companion `Seventeen-Katherine-website.zip` contains a self-contained `index.html`. Extract it and open it in a modern browser. The companion `Seventeen-Katherine.html` is the same portable build. All current artwork, fonts, styles and application code are embedded. Direct `file:` execution could not be tested by the review browser; the build is also served through the local HTTP preview.

Current local review: http://127.0.0.1:5178/ (available while the preview server is running).

## Run the editable project

```sh
npm install
npm run dev -- --port 5177
npm run build
npm run build:standalone
```

`dist/` is the standard static build; `standalone/index.html` is the portable build. `npm run preview -- --port 5178` serves `dist/` locally. To review the standalone build, run `python3 -m http.server 5178 --bind 127.0.0.1 --directory standalone`.

## The seven chapters

1. **The call:** illustrated online-school desktop, Accept and Decline branches, staged connection and messages, optional synthesized sound.
2. **The birthday issue:** illustrated magazine cover with editable typography, spine rotation, paper curl and inside spread.
3. **Memory machine:** illustrated enamel shell; independent capsules, glass, resisting handle and dispensing hatch; gravity arc, opening capsule, eight unique rewards, saved collection and click-to-enlarge reward/archive photos.
4. **Our passport:** illustrated leather cover, five spreads, shared-binding page turns, varied stamps, swipe navigation and expandable keepsakes. Phones show one readable page at a time.
5. **A little fortune:** ceramic vessel, thirteen independent sticks, jostle, selected-stick extraction, paper unfurl and six sequential fortunes.
6. **Photo booth:** three photo slots, local photo selection, three paper colours, six sticker types, sticker landing motion, pointer and keyboard positioning, size/rotation, caption and a PNG frame that follows the selected photograph’s proportions.
7. **For my wifey:** returning first message, opening envelope, independent stationery, paginated letter, historical-letter text reader, shared playlist controls and delayed replay.

The app fills the viewport. Desktop has a personal-web contents rail; phones use a chapter selector. Longer writing and archives are paginated. Photo tools open a compact editor on phones. Optional interactions never block chapter navigation.

## Artwork and personal material

Seven active illustrations were created with the built-in Image Generation tool. Final WebP assets are saved in `src/assets/artwork/`; independent HTML/SVG/CSS parts provide interaction and motion. `ART-DIRECTION.md` records the material, lighting, palette, layering and key poses. `ASSET-PROMPTS.md` contains the actual generation prompts.

Personal copy and media references remain in `src/content.ts`. See `public/media/README.md` for the original-media inventory. The four Chapter 01 images, eight Chapter 02 reward originals, five Chapter 03 photographs, three Chapter 05 photographs and background recording are included. Remaining personal-media placeholders are labeled; no personal faces, documents or screenshots have been fabricated. Chapter 06 now uses Carrie’s submitted letter and historical-letter text.

Fonts (Literata, DM Sans, Caveat and LXGW WenKai for Chinese) are bundled locally. No external fonts or stock image requests are required. Uploaded photos remain in the current browser session. The app has no backend, analytics, camera or microphone access.

## Accessibility and review

Semantic controls, visible focus, modal focus trapping, Escape dismissal, optional audio, live status updates, and reduced-motion rules are included. Use the sticker selector, focus the print, and use arrow keys to position a sticker; Shift makes larger steps.

`VERIFICATION.md` records the checks and their limits. The accompanying `redesign-screenshots/` folder contains historical screenshots from the earlier eight-chapter edition, plus later chapter updates. Browser-local progress belongs to the current device and origin. Photo Booth fits the complete photograph, with its paper frame and exported PNG adapting to the image’s proportions.

The active chapter order is 00–06. Photo Booth leads directly to the Final Letter (06). Old saved positions for Our Journey or the former Final Letter both resume at the Final Letter. The removed chapter’s source and illustrations are retained only in archive/removed-journey, outside the active site.

The supplied recordings are bundled in `src/assets/audio/background-music.m4a` (Tightrope) and `src/assets/audio/all-of-me.m4a` (All of Me), and embedded in the portable HTML. One shared player alternates Tightrope → All of Me → Tightrope on repeat. Music waits for the first tap/click or key press if the browser blocks its initial start; explicit mute lasts for the current page session, and each fresh opening starts with music enabled. The header and Chapter 06 song dialog control the same player. Volume remains 35%, and playback continues across chapters.

Chapter 05 uses six transparent cartoon PNG stickers generated with the built-in image_gen tool. The same assets appear in the tray, landing animation and exported print. See `src/assets/stickers/GENERATION.json` for the final prompts and saved file paths.

The submitted Chapter 06 letter and 2023 archive are paginated text, preserving the cipher, list and historical line breaks. Full Chinese font data is included under `src/assets/fonts/` for reproducible source builds.

Images outside Photo Booth can be enlarged without cropping. Interactive illustrated objects have a separate magnify button. The final letter’s opening memory remains for four seconds; Keep reading skips ahead immediately.

Eight quiet CC0 Foley effects are bundled for buttons, paper turns, capsules, fortune sticks, saving a photo and opening/reading the letter. The existing sound control mutes both music and effects. See `SOUND-CREDITS.md` for sources, processing and current listening-test limitations.

The expanded sound families distinguish navigation, object/frame selection, playful reveals/stickers, typing and passport stamping. Variants cycle without immediate repeats; the original eight effects remain available. See the expansion section of `SOUND-CREDITS.md` for the mapping and test limits.
