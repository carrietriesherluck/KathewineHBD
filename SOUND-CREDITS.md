# Seventeen, Katherine — sound-effect credits

The original eight Foley recordings were supplied by Carrie and integrated November 9, 2026. An additional set expands their interaction identities as documented below. Every linked Freesound page identifies its recording as Creative Commons 0. Source/license pages were checked during sourcing; Carrie downloaded and supplied the originals. No account/API workaround or alternate-host substitution was used.

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

## Expanded interaction identities — November 9

All eight requested source pages (including the retained original pop and duplicate shutter) were rechecked and still identify the sounds as Creative Commons 0. User-supplied originals were matched by sound ID and filename; no additional download or broad search was used. The new source map is `personalization/sound-effects-expansion-sources.json`; exact excerpts, hashes, formats and gains are in `personalization/sound-effects-expansion-processing.json`.

| Interaction | Source and creator | Implementation |
|---|---|---|
| Original primary pop retained | [Mouth Pop Short](https://freesound.org/people/qubodup/sounds/792928/) — qubodup (792928) | Original primary pop retained |
| Tiny navigation clicks | [UI Button Click](https://freesound.org/people/benzix2/sounds/467951/) — benzix2 (467951) | Tiny navigation clicks; original Ogg retained |
| Photo/frame/object selection | [Wooden Click](https://freesound.org/people/BenjaminNelan/sounds/321083/) — BenjaminNelan (321083) | Photo/frame/object selection |
| Four isolated samples for reveals/stickers | [Bubble Pop UI and Game Sounds Multiple Samples](https://freesound.org/people/el_boss/sounds/669921/) — el_boss (669921) | Four isolated samples for reveals/stickers; two also vary primary playful buttons |
| One short typing-indicator burst, not a loop | [keyboard_typing_loop1.wav](https://freesound.org/people/peoplearehappy/sounds/841238/) — peoplearehappy (841238) | One short typing-indicator burst, not a loop |
| Clicking the passport stamp | [Stamp](https://freesound.org/people/kermite607/sounds/362622/) — kermite607 (362622) | Clicking the passport stamp |
| Alternates with the preserved plastic lid pop for capsule opening | [The Best Bubble Pop Sound For Game and UI](https://freesound.org/people/el_boss/sounds/669918/) — el_boss (669918) | Alternates with the preserved plastic lid pop for capsule opening |
| Same original as the existing shutter | [1968 Praktica Super TL Camera Shutter 02](https://freesound.org/people/kurumik/sounds/871467/) — kurumik (871467) | Same original as the existing shutter; no replacement |

Four separate bubble samples were isolated from source 669921 at 0.020–0.240, 2.005–2.255, 5.145–5.415 and 7.630–7.910 seconds. The complete 10.652-second source is never played. Other additions are one wood click (0.086 s), one short typing excerpt (0.670 s), one stamp impact (0.270 s), and one capsule bubble (0.215 s). The tiny navigation Ogg is already approximately 0.123 s / 10 KB and is retained unchanged without a lossy conversion. A primary-click fallback handles browsers that cannot decode Vorbis.

Primary playful buttons retain the original pop and gain two quiet bubble variants. Navigation uses its tiny click, object/frame selections use wood, and stickers/keepsake reveals use a four-pop family. Within each family, selection cycles rather than assigning arbitrary identities. Immediate repeat variants are excluded; shared bubble sources are also avoided back-to-back across families when alternatives exist. Navigation and wood rates vary only by ±1%; main Foley sounds retain their natural rate.

The typing recording is not continuously looped. One brief burst begins when the actual typing indicator becomes visible, does not restart at the first message, and stops when the indicator ends, sound is muted or the chapter changes. Stamp playback replaces the generic click on the existing stamp button and preserves its keepsake reveal. Capsule opening alternates the original plastic pop and new bubble; neither original is discarded. The new shutter download is byte-identical to the installed source, so Save keeps its existing shutter and remains free of an extra boink.

All original eight processed files and their established gains remain unchanged. Specialized sounds suppress UI clicks; the one-active-voice rule, quiet gains, rapid-click guard, soft replacement/mute fade, playback-policy handling, both background songs, visuals and animation sequences are preserved. No hover sounds were added.

Automated checks covered the original eight cues, all new mappings, repeated variants, shared-source repeat avoidance, ±1% rate limits, named typing cleanup, stamp reveal, mute, disabled/busy states, keyboard/swipe, Save and unsupported-codec fallback. Rendered content/visual structures and animation timers match the prior version in checked desktop/phone states. These are mocked playback/DOM checks, not listening tests: the browser host remains unavailable, so subjective audible quality and actual in-browser playback remain unverified.
