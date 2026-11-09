# Seventeen, Katherine — sound-effect sources and download sheet

Prepared November 9, 2026. These are proposed sources, not sounds already used in the website. Each Freesound page identifies its recording as Creative Commons 0. Original downloads require a Freesound login. Per Carrie’s instruction, download work stopped at that gate; no account/API workaround or alternate-host substitution was attempted.

Download the original WAV from each linked page and attach the eight originals in the conversation. Keep the supplied filenames; the sound IDs identify them. No trimming or conversion is needed from Carrie. The longer bead/stick recordings will supply only one short excerpt, chosen after listening.

License for every candidate: [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/).

| ID | Intended interaction | Original recording | Creator | Source ID | Full duration |
|---|---|---|---|---|---|
| SFX-01 | General buttons | [Mouth Pop Short](https://freesound.org/people/qubodup/sounds/792928/) | qubodup | 792928 | 0.121 s |
| SFX-02 | Magazine | [paper](https://freesound.org/people/1bob/sounds/651514/) | 1bob | 651514 | 0.509 s |
| SFX-03 | Passport | [Turning page (heavy paper)](https://freesound.org/people/xkeril/sounds/856497/) | xkeril | 856497 | 3.186 s |
| SFX-04 | Memory machine activation | [beads in glass bottle](https://freesound.org/people/blueshrimp1235/sounds/797803/) | blueshrimp1235 | 797803 | 63.637 s |
| SFX-05 | Memory capsule reveal | [Lid Flip/ Pop - 2.wav](https://freesound.org/people/SpaceJoe/sounds/509496/) | SpaceJoe | 509496 | 1.078 s |
| SFX-06 | Fortune draw | [Wooden Stick Taps](https://freesound.org/people/GammaGool/sounds/855313/) | GammaGool | 855313 | 3.791 s |
| SFX-07 | Photo Booth Save | [1968 Praktica Super TL Camera Shutter 02](https://freesound.org/people/kurumik/sounds/871467/) | kurumik | 871467 | 0.255 s |
| SFX-08 | Final letter | [Paper Rustle](https://freesound.org/people/BenjaminNelan/sounds/353125/) | BenjaminNelan | 353125 | 1.129 s |

## Selection and use notes

- **SFX-01:** A recorded mouth pop, offered as an organic rounded-boink candidate; select only after listening. Play once per completed button activation, never on hover or in addition to a chapter-specific effect.
- **SFX-02:** One short page flip at a valid page-turn start; reuse for magazine opening/closing if suitable. Invalid/busy/boundary actions stay silent.
- **SFX-03:** Select a single clean, weightier flip excerpt; trigger at a valid spread-turn start. Do not play the full recording if it extends beyond the animation.
- **SFX-04:** Physical plastic beads inside glass; a substitute candidate for full-sized plastic capsule balls, not a recording of an actual capsule machine. Select one soft shake from the end, around 0.7–1.0 seconds, after listening. One playback when dispense begins.
- **SFX-05:** One plastic lid pop, trimmed around the transient with a short fade; trigger once when capsule opening begins.
- **SFX-06:** Actual thin wooden sticks tapping; select a short gentle group after audition, with no repeated synthetic layering. Trigger once when shaking starts; no second sound for the same draw.
- **SFX-07:** One brief physical camera shutter when a ready composition starts saving. Failed/disabled/duplicate export attempts stay silent.
- **SFX-08:** One short paper rustle when opening begins; align with the existing motion without changing its timing. May be reused for full-letter page turns, one sound per valid turn.

## Pending implementation and testing

- Originals have not been downloaded or auditioned. Suitability is provisional and based on the published recording descriptions, not a listening test. The button sound is a natural pop candidate for the requested rounded boink; the machine source uses plastic beads as a tactile proxy for capsule balls.
- Preserve raw originals. Prepare short, quietly balanced versions with trimmed silence and small fades; avoid harsh peaks. Exact edits and levels must be set after audition.
- Use one shared effects player, a short retrigger guard and a fixed maximum of one active effect. Specialized sounds replace the general button sound for their interaction. Ignore invalid, disabled and busy actions.
- Tie effects to the existing sound-enabled state, halt effects immediately on mute, and never replay delayed/blocked sounds later. Handle rejected playback without interrupting any website interaction. Preserve both background songs and their playlist behavior.
- Replace the existing synthesized Accept/Decline beeps with the general tactile button sound rather than stacking two sounds. This is an audio-only change for the implementation phase.
- Test all eight effects in the website, including touch/keyboard, mute, rapid repeats, page boundaries, chapter changes, blocked playback and Photo Booth export. The browser access host was unavailable during sourcing, so no actual-website listening test has been completed.
- No website code, visuals, animation sequence, copy, timing or original media was changed during this sourcing step.
