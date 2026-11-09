export type SoundEffect='button'|'magazine'|'passport'|'rattle'|'pop'|'sticks'|'shutter'|'letter';
type Clips=Record<SoundEffect,{src:string;gain:number}>;
type Options={createContext?:()=>AudioContext;load?:(src:string,signal:AbortSignal)=>Promise<ArrayBuffer>;now?:()=>number};

/** One short Foley voice, no queued playback, and no effect-driven animation changes. */
export function createSoundEffects(clips:Clips,options:Options={}){
 const now=options.now??(()=>performance.now());
 const load=options.load??(async(src,signal)=>{const response=await fetch(src,{signal});if(!response.ok)throw new Error('Sound unavailable');return response.arrayBuffer();});
 const abort=new AbortController();const buffers=new Map<SoundEffect,AudioBuffer>();
 let context:AudioContext|null=null;let disposed=false;let enabled=true;let generation=0;let pending:SoundEffect|null=null;let lastRequest=-Infinity;
 let active:{source:AudioBufferSourceNode;gain:GainNode;end:number}|null=null;
 function getContext(){if(context)return context;const Constructor=typeof window!=='undefined'?(window.AudioContext||(window as Window & {webkitAudioContext?:typeof AudioContext}).webkitAudioContext):undefined;try{context=options.createContext?options.createContext():Constructor?new Constructor():null;}catch{context=null;}return context;}
 function stopVoice(){if(!context||!active)return context?.currentTime??0;const at=context.currentTime;const voice=active;active=null;try{voice.gain.gain.cancelScheduledValues(at);voice.gain.gain.setValueAtTime(Math.max(0,voice.gain.gain.value),at);voice.gain.gain.linearRampToValueAtTime(0,at+.012);voice.source.stop(at+.012);}catch{/* An already-ended voice needs no work. */}return at+.012;}
 function stop(){generation++;pending=null;stopVoice();}
 async function preload(){const ctx=getContext();if(!ctx||disposed)return;await Promise.all((Object.keys(clips) as SoundEffect[]).map(async name=>{try{const bytes=await load(clips[name].src,abort.signal);if(disposed)return;const buffer=await ctx.decodeAudioData(bytes);if(!disposed)buffers.set(name,buffer);}catch{/* Missing/blocked effects never block the website. */}}));}
 function play(name:SoundEffect){
  const ctx=context;const buffer=buffers.get(name);const requested=now();
  if(disposed||!enabled||!ctx||!buffer||requested-lastRequest<160)return false;
  if(name==='button'&&(pending||(active&&active.end>ctx.currentTime)))return false;
  const ticket=++generation;pending=name;lastRequest=requested;
  const begin=()=>{
   if(disposed||!enabled||ticket!==generation)return;
   pending=null;
   // A blocked or slow start is dropped, never replayed after the interaction.
   if(ctx.state!=='running'||now()-requested>150)return;
   const start=stopVoice();const source=ctx.createBufferSource();const gain=ctx.createGain();source.buffer=buffer;gain.gain.setValueAtTime(0,start);gain.gain.linearRampToValueAtTime(clips[name].gain,start+.003);gain.gain.setValueAtTime(clips[name].gain,start+Math.max(.003,buffer.duration-.015));gain.gain.linearRampToValueAtTime(0,start+buffer.duration);source.connect(gain);gain.connect(ctx.destination);
   const voice={source,gain,end:start+buffer.duration};active=voice;source.onended=()=>{source.disconnect();gain.disconnect();if(active===voice)active=null;};source.start(start);
  };
  if(ctx.state==='running')begin();else{try{void ctx.resume().then(begin).catch(()=>{if(ticket===generation)pending=null;});}catch{pending=null;}}
  return true;
 }
 return {preload,play,stop,setEnabled(next:boolean){enabled=next;if(!next)stop();},dispose(){if(disposed)return;stop();disposed=true;abort.abort();buffers.clear();if(context)void context.close().catch(()=>{});}};
}
let current:ReturnType<typeof createSoundEffects>|null=null;
export function installSoundEffects(clips:Clips){const player=createSoundEffects(clips);current=player;void player.preload();return {...player,dispose(){player.dispose();if(current===player)current=null;}};}
export function playSound(name:SoundEffect){current?.play(name);}
export function stopSoundEffects(){current?.stop();}

/** Capture click also covers native keyboard activation and touch, once per action. */
export function playButtonSound(event:Event){
 if(event.defaultPrevented||!(event.target instanceof Element))return;
 const button=event.target.closest('button,[role="button"]');
 if(!button||button.matches(':disabled,[disabled],[aria-disabled="true"]')||button.closest('[data-music-control],[data-sound="handled"]'))return;
 playSound('button');
}
