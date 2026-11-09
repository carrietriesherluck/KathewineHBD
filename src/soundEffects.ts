export type SoundEffect='button'|'navigation'|'wood'|'reveal'|'typing'|'stamp'|'magazine'|'passport'|'rattle'|'pop'|'sticks'|'shutter'|'letter';
type Clip={src:string;gain:number;rate?:number};
type Clips=Partial<Record<SoundEffect,Clip & {variants?:readonly Clip[];fallback?:SoundEffect}>>;
type Options={createContext?:()=>AudioContext;load?:(src:string,signal:AbortSignal)=>Promise<ArrayBuffer>;now?:()=>number};
const uiEffects=new Set<SoundEffect>(['button','navigation','wood','reveal']);

/** One Foley voice, semantic variation, no queued playback or animation changes. */
export function createSoundEffects(clips:Clips,options:Options={}){
 const now=options.now??(()=>performance.now());
 const load=options.load??(async(src,signal)=>{const response=await fetch(src,{signal});if(!response.ok)throw new Error('Sound unavailable');return response.arrayBuffer();});
 const abort=new AbortController();const buffers=new Map<string,AudioBuffer>();const lastChoice=new Map<SoundEffect,string>();const cursors=new Map<SoundEffect,number>();
 let context:AudioContext|null=null;let disposed=false;let enabled=true;let generation=0;let pending:SoundEffect|null=null;let lastRequest=-Infinity;let lastSource='';
 let active:{kind:SoundEffect;source:AudioBufferSourceNode;gain:GainNode;end:number}|null=null;
 function getContext(){if(context)return context;const Constructor=typeof window!=='undefined'?(window.AudioContext||(window as Window & {webkitAudioContext?:typeof AudioContext}).webkitAudioContext):undefined;try{context=options.createContext?options.createContext():Constructor?new Constructor():null;}catch{context=null;}return context;}
 function stopVoice(){if(!context||!active)return context?.currentTime??0;const at=context.currentTime;const voice=active;active=null;try{voice.gain.gain.cancelScheduledValues(at);voice.gain.gain.setValueAtTime(Math.max(0,voice.gain.gain.value),at);voice.gain.gain.linearRampToValueAtTime(0,at+.012);voice.source.stop(at+.012);}catch{/* Already ended. */}return at+.012;}
 function stop(name?:SoundEffect){if(!name||pending===name){generation++;pending=null;}if(!name||active?.kind===name)stopVoice();}
 async function preload(){const ctx=getContext();if(!ctx||disposed)return;const sources=new Set(Object.values(clips).flatMap(clip=>(clip.variants??[clip]).map(v=>v.src)));await Promise.all([...sources].map(async src=>{try{const bytes=await load(src,abort.signal);if(disposed)return;const buffer=await ctx.decodeAudioData(bytes);if(!disposed)buffers.set(src,buffer);}catch{/* Effects never block the website. */}}));}
 function choose(name:SoundEffect){
  const group=clips[name];if(!group)return null;
  let choices=(group.variants??[group]).map((clip,index)=>({clip,index,key:`${clip.src}|${clip.rate??1}`})).filter(v=>buffers.has(v.clip.src));
  if(!choices.length&&group.fallback){const fallback=clips[group.fallback];if(fallback)choices=(fallback.variants??[fallback]).map((clip,index)=>({clip,index,key:`${clip.src}|${clip.rate??1}`})).filter(v=>buffers.has(v.clip.src));}
  if(!choices.length)return null;
  const differentSource=choices.filter(v=>v.clip.src!==lastSource);if(differentSource.length)choices=differentSource;
  const differentVariant=choices.filter(v=>v.key!==lastChoice.get(name));if(differentVariant.length)choices=differentVariant;
  const cursor=cursors.get(name)??-1;return choices.find(v=>v.index>cursor)??choices[0];
 }
 function play(name:SoundEffect){
  const ctx=context;const requested=now();
  if(disposed||!enabled||!ctx||requested-lastRequest<160)return false;
  if(uiEffects.has(name)&&(pending||(active&&active.end>ctx.currentTime)))return false;
  const selection=choose(name);if(!selection)return false;
  const {clip,index,key}=selection;const buffer=buffers.get(clip.src)!;const ticket=++generation;pending=name;lastRequest=requested;
  const begin=()=>{
   if(disposed||!enabled||ticket!==generation)return;pending=null;
   // Drop blocked or slow requests; never produce a delayed surprise sound.
   if(ctx.state!=='running'||now()-requested>150)return;
   const start=stopVoice();const source=ctx.createBufferSource();const gain=ctx.createGain();const rate=clip.rate??1;const duration=buffer.duration/rate;source.buffer=buffer;source.playbackRate.value=rate;gain.gain.setValueAtTime(0,start);gain.gain.linearRampToValueAtTime(clip.gain,start+.003);gain.gain.setValueAtTime(clip.gain,start+Math.max(.003,duration-.015));gain.gain.linearRampToValueAtTime(0,start+duration);source.connect(gain);gain.connect(ctx.destination);
   const voice={kind:name,source,gain,end:start+duration};active=voice;source.onended=()=>{source.disconnect();gain.disconnect();if(active===voice)active=null;};source.start(start);lastSource=clip.src;lastChoice.set(name,key);cursors.set(name,index);
  };
  if(ctx.state==='running')begin();else{try{void ctx.resume().then(begin).catch(()=>{if(ticket===generation)pending=null;});}catch{pending=null;}}
  return true;
 }
 return {preload,play,stop,setEnabled(next:boolean){enabled=next;if(!next)stop();},dispose(){if(disposed)return;stop();disposed=true;abort.abort();buffers.clear();if(context)void context.close().catch(()=>{});}};
}
let current:ReturnType<typeof createSoundEffects>|null=null;
export function installSoundEffects(clips:Clips){const player=createSoundEffects(clips);current=player;void player.preload();return {...player,dispose(){player.dispose();if(current===player)current=null;}};}
export function playSound(name:SoundEffect){current?.play(name);}
export function stopSoundEffects(name?:SoundEffect){current?.stop(name);}

/** Native keyboard activation and touch both dispatch one click; no hover sounds. */
export function playButtonSound(event:Event){
 if(event.defaultPrevented||!(event.target instanceof Element))return;
 const button=event.target.closest('button,[role="button"]');
 if(!button||button.matches(':disabled,[disabled],[aria-disabled="true"]')||button.closest('[data-music-control],[data-sound="handled"]'))return;
 const identity=button.closest('[data-sound]')?.getAttribute('data-sound');
 playSound(identity&&uiEffects.has(identity as SoundEffect)?identity as SoundEffect:'button');
}
