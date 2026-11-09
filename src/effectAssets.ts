import button from './assets/audio/effects/button.wav';
import magazine from './assets/audio/effects/magazine.wav';
import passport from './assets/audio/effects/passport.wav';
import rattle from './assets/audio/effects/rattle.wav';
import pop from './assets/audio/effects/pop.wav';
import sticks from './assets/audio/effects/sticks.wav';
import shutter from './assets/audio/effects/shutter.wav';
import letter from './assets/audio/effects/letter.wav';
import navigation from './assets/audio/effects/navigation.ogg';
import wood from './assets/audio/effects/wood.wav';
import typing from './assets/audio/effects/typing.wav';
import stamp from './assets/audio/effects/stamp.wav';
import capsuleBubble from './assets/audio/effects/capsule-bubble.wav';
import bubbleA from './assets/audio/effects/bubble-a.wav';
import bubbleB from './assets/audio/effects/bubble-b.wav';
import bubbleC from './assets/audio/effects/bubble-c.wav';
import bubbleD from './assets/audio/effects/bubble-d.wav';
export const effectClips={
 button:{src:button,gain:0.3021,variants:[{src:button,gain:0.3021},{src:bubbleA,gain:.26},{src:bubbleB,gain:.26}]},magazine:{src:magazine,gain:0.4029},passport:{src:passport,gain:0.3777},rattle:{src:rattle,gain:0.3525},pop:{src:pop,gain:0.3273,variants:[{src:pop,gain:0.3273},{src:capsuleBubble,gain:0.3273}]},sticks:{src:sticks,gain:0.3525},shutter:{src:shutter,gain:0.3147},letter:{src:letter,gain:0.4029},
 navigation:{src:navigation,gain:.25,variants:[{src:navigation,gain:.25,rate:1},{src:navigation,gain:.25,rate:.99},{src:navigation,gain:.25,rate:1.01}],fallback:'button' as const},
 wood:{src:wood,gain:.27,variants:[{src:wood,gain:.27,rate:1},{src:wood,gain:.27,rate:.99},{src:wood,gain:.27,rate:1.01}]},
 reveal:{src:bubbleA,gain:.26,variants:[{src:bubbleA,gain:.26},{src:bubbleB,gain:.26},{src:bubbleC,gain:.26},{src:bubbleD,gain:.26}]},
 typing:{src:typing,gain:.18},stamp:{src:stamp,gain:.34},
};
