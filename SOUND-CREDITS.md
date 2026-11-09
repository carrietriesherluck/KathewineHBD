# Seventeen, Katherine — sound-effect credits

Eight Foley recordings supplied by Carrie and integrated November 9, 2026. Every linked Freesound page identifies its recording as Creative Commons 0. Source/license pages were checked during sourcing; Carrie downloaded and supplied the originals. No account/API workaround or alternate-host substitution was used.

License for all eight: [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/). Creator names are credited voluntarily; no endorsement is implied.

| Interaction | Recording and creator | Source ID | Source excerpt | Installed duration | Playback gain |
|---|---|---|---|---|---|
| General buttons | [Mouth Pop Short](https://freesound.org/people/qubodup/sounds/792928/) — qubodup | 792928 | 0.000–0.121 s | 0.121 s | 0.3021 |
| Magazine | [paper](https://freesound.org/people/1bob/sounds/651514/) — 1bob | 651514 | 0.000–0.470 s | 0.470 s | 0.4029 |
| Passport | [Turning page (heavy paper)](https://freesound.org/people/xkeril/sounds/856497/) — xkeril | 856497 | 0.270–0.900 s | 0.630 s | 0.3777 |
| Memory machine activation | [beads in glass bottle](https://freesound.org/people/blueshrimp1235/sounds/797803/) — blueshrimp1235 | 797803 | 58.200–58.900 s | 0.700 s | 0.3525 |
| Memory capsule reveal | [Lid Flip/ Pop - 2.wav](https://freesound.org/people/SpaceJoe/sounds/509496/) — SpaceJoe | 509496 | 0.405–0.720 s | 0.315 s | 0.3273 |
| Fortune draw | [Wooden Stick Taps](https://freesound.org/people/GammaGool/sounds/855313/) — GammaGool | 855313 | 0.055–0.830 s | 0.775 s | 0.3525 |
| Photo Booth Save | [1968 Praktica Super TL Camera Shutter 02](https://freesound.org/people/kurumik/sounds/871467/) — kurumik | 871467 | 0.000–0.255 s | 0.255 s | 0.3147 |
| Final letter | [Paper Rustle](https://freesound.org/people/BenjaminNelan/sounds/353125/) — BenjaminNelan | 353125 | 0.200–1.080 s | 0.880 s | 0.4029 |

The button sound is a natural mouth-pop recording for the rounded boink. The machine sound is plastic beads shaken inside glass, used as a tactile capsule-rattle proxy. Fortune uses two actual wooden-stick taps in one continuous excerpt. No layered or synthesized effects were added.

## Original files and processing

Unmodified originals: `archive/sound-originals/`. Installed audio: `src/assets/audio/effects/`. The original byte hashes, processed byte hashes, exact excerpts, durations and measured levels are recorded in `personalization/sound-effects-processing.json`. Source URLs, creators and licenses are also recorded in `personalization/sound-effects-sources.json`.

Each effect uses one contiguous excerpt. Processing: mono downmix, low-rumble/DC reduction at 70 Hz, gentle high-frequency rolloff around 8.5 kHz, level adjustment capped at -8 dBFS peak and -20 dBFS RMS, and small leading/trailing fades. The installed WAVs are 44.1 kHz mono PCM16. Playback gains are 0.3021–0.4029, raised by approximately 2 dB at Carrie’s request; resulting maximum isolated output peaks are approximately -18.4 to -15.9 dBFS. Background music remains at 35%.

## Trigger and mixing behavior

- General buttons: one quiet pop on click, including native touch/keyboard activation; no hover sounds. The old synthesized call beeps were replaced by this pop.
- Magazine: one paper flip at a valid open, close or page-turn start, including arrow keys and swipes.
- Passport: one heavier page sound at a valid cover opening or spread-turn start, including swipes.
- Memory machine: one rattle at activation; one plastic pop when a landed capsule starts opening.
- Fortune: one wooden-stick clip when shaking starts; no additional sound when pulling/revealing the same stick.
- Photo Booth: one shutter at a valid Save start. The PNG export and existing controls are preserved.
- Final letter: one rustle when opening starts; the same effect is reused for valid full-letter page turns.

Specialized controls suppress the general pop. A shared Web Audio player allows one active effect, with a 160 ms retrigger guard and 12 ms fade when replacing or muting a sound. General pops do not interrupt a main effect. The existing music/sound control enables or mutes both systems, and changing chapter stops any remaining effect. The Tightrope / All of Me playlist is unchanged.

Effects preload silently. AudioContext resume is attempted directly during an interaction. Missing audio, rejected playback or late resume requests are dropped without blocking the website or queuing a later surprise sound.

## Verification and limits

WAV decoding/level analysis, source hash checks, mocked AudioContext concurrency/policy/mute tests, all eight interaction handlers, keyboard/swipe paths, disabled/busy guards, Save behavior and existing timer checks passed. Rendered visual/content structures matched the preceding version in the checked desktop/phone states; styles and personalized content are unchanged.

These checks are not a listening test. The browser access host remained unavailable, and a native browser attempt stalled. No actual-website playback/audition, fresh screenshot or subjective listening quality is claimed. Live listening remains to be verified when browser access is restored.
