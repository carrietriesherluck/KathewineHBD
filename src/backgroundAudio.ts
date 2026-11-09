export type BackgroundAudioState='off'|'waiting'|'playing'|'error';
type PlaylistOptions={tracks:{src:string}[];onTrackChange?:(index:number)=>void};

// Keep the preference separate from playback: a blocked start is not a mute.
export function createBackgroundAudio(audio:HTMLAudioElement,onStateChange:(state:BackgroundAudioState)=>void,onPreferenceChange:(enabled:boolean)=>void,playlist?:PlaylistOptions){
 let enabled=false;
 let state:BackgroundAudioState='off';
 let request=0;
 let disposed=false;
 let track=0;
 const tracks=playlist?.tracks||[];
 audio.volume=.35;
 audio.loop=tracks.length<2;
 function update(next:BackgroundAudioState){state=next;if(!disposed)onStateChange(next);}
 function start(){
  if(disposed||!enabled)return;
  const current=++request;
  update('waiting');
  const failed=(error:unknown)=>{
   if(disposed||current!==request||!enabled)return;
   audio.pause();
   const name=typeof error==='object'&&error!==null&&'name' in error?String(error.name):'';
   update(name==='NotAllowedError'||name==='AbortError'?'waiting':'error');
  };
  try{void audio.play().then(()=>{if(!disposed&&enabled&&current===request)update('playing');}).catch(failed);}catch(error){failed(error);}
 }
 function setEnabled(next:boolean){
  if(disposed)return;
  enabled=next;
  onPreferenceChange(next);
  if(next)start();
  else{request++;audio.pause();update('off');}
 }
 function selectTrack(index:number){
  if(disposed||index<0||index>=tracks.length||!Number.isInteger(index))return;
  request++;audio.pause();track=index;audio.src=tracks[track].src;audio.load();
  playlist?.onTrackChange?.(track);
 }
 const ended=()=>{if(tracks.length<2)return;selectTrack((track+1)%tracks.length);if(enabled)start();};
 const played=()=>{if(enabled)update('playing');else audio.pause();};
 const paused=()=>{if(audio.paused)update(enabled?'waiting':'off');};
 const failed=()=>{request++;audio.pause();update('error');};
 audio.addEventListener('playing',played);
 audio.addEventListener('pause',paused);
 audio.addEventListener('error',failed);
 audio.addEventListener('ended',ended);
 if(tracks.length)selectTrack(0);
 return {
  setEnabled,
  toggle:()=>setEnabled(!(enabled&&state==='playing'&&!audio.paused)),
  resumeFromGesture:()=>{if(enabled&&state!=='playing')start();},
  playTrack:(index:number)=>{if(disposed||!Number.isInteger(index)||index<0||index>=tracks.length)return;if(index!==track)selectTrack(index);setEnabled(true);},
  dispose:()=>{disposed=true;request++;audio.removeEventListener('playing',played);audio.removeEventListener('pause',paused);audio.removeEventListener('error',failed);audio.removeEventListener('ended',ended);audio.pause();},
 };
}

/** Capture the activating gesture before a chapter/dialog consumes it. */
export function bindMusicGestureResume(target:Document,resume:()=>void){
 const events=['pointerdown','pointerup','touchend','click','keydown'] as const;
 const handler=(event:Event)=>{if(event.target instanceof Element&&event.target.closest('[data-music-control]'))return;resume();};
 for(const name of events)target.addEventListener(name,handler,{capture:true,passive:true});
 return()=>{for(const name of events)target.removeEventListener(name,handler,true);};
}
