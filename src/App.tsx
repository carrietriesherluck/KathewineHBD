import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { chapters, music } from './content';
import { Modal, SceneHeading } from './components';
import { useReducedMotion, useStored } from './lib';
import Call from './scenes/Call';
import { resumeChapter } from './chapterProgress';
import { backgroundPlaylist } from './musicPlaylist';
import { createBackgroundAudio,type BackgroundAudioState } from './backgroundAudio';
const Magazine=lazy(()=>import('./scenes/Magazine'));const Capsules=lazy(()=>import('./scenes/Capsules'));const Passport=lazy(()=>import('./scenes/Passport'));const Fortune=lazy(()=>import('./scenes/Fortune'));const PhotoBooth=lazy(()=>import('./scenes/PhotoBooth'));const Letter=lazy(()=>import('./scenes/Letter'));
const transitions=['connection','page','capsule','stamp','paper','thread','connection'];
export default function App(){
 const lastChapter=chapters.length-1;
 const [saved,setSaved]=useStored<number>('katherine-chapter-v1',0);const [scene,setScene]=useState(()=>resumeChapter(saved,chapters.length));
 const [transition,setTransition]=useState<string|null>(null);const [menu,setMenu]=useState(false);const [sound,setSound]=useState(true);const [playback,setPlayback]=useState<BackgroundAudioState>(sound?'waiting':'off');const [musicOpen,setMusicOpen]=useState(false);const [help,setHelp]=useState(false);
 const [trackIndex,setTrackIndex]=useState(0);const currentTrack=backgroundPlaylist[trackIndex]||backgroundPlaylist[0];
 const reduced=useReducedMotion();const timer=useRef<ReturnType<typeof setTimeout>|null>(null);const main=useRef<HTMLElement>(null);
 const audio=useRef<HTMLAudioElement>(null);const background=useRef<ReturnType<typeof createBackgroundAudio>|null>(null);
 useEffect(()=>{
  if(!audio.current)return;
  const player=createBackgroundAudio(audio.current,setPlayback,setSound,{tracks:backgroundPlaylist,onTrackChange:setTrackIndex});background.current=player;
  const resume=(event:Event)=>{if(event.target instanceof Element&&event.target.closest('[data-music-control]'))return;player.resumeFromGesture();};
  document.addEventListener('pointerdown',resume);document.addEventListener('click',resume);document.addEventListener('keydown',resume);
  player.setEnabled(sound);
  return()=>{document.removeEventListener('pointerdown',resume);document.removeEventListener('click',resume);document.removeEventListener('keydown',resume);player.dispose();background.current=null;};
 },[]);
 useEffect(()=>()=>{if(timer.current)clearTimeout(timer.current);},[]);
 useEffect(()=>{setSaved(scene);main.current?.focus({preventScroll:true});},[scene,setSaved]);
 function go(index:number){if(!Number.isInteger(index)||index<0||index>lastChapter||transition||index===scene)return;setMenu(false);setTransition(transitions[scene]);timer.current=setTimeout(()=>{setScene(index);setTransition(null);},reduced?40:650);}
 const sceneNodes=[<Call go={()=>go(1)} sound={sound}/>,<Magazine/>,<Capsules/>,<Passport/>,<Fortune/>,<PhotoBooth/>,<Letter replay={()=>go(0)} onMusic={()=>setMusicOpen(true)}/>];
 return <div className={`app scene-${scene} ${scene===lastChapter?'final-chapter':''} ${transition?`is-transitioning transition-${transition}`:''}`}>
 <audio ref={audio} preload="auto" autoPlay hidden/>
 <a className="skip-link" href="#chapter-content">Skip to chapter</a>
 <header className="site-header"><button className="wordmark" onClick={()=>setMenu(true)} aria-label="Open chapter menu">Seventeen, Katherine.<span>a little love letter from your wifey</span></button><div className="header-scrap"><span>the pesticide collection</span><b>handmade for Cidy · issue 017</b></div><div className="header-actions"><button className="sound-button" data-music-control onClick={()=>background.current?.toggle()} aria-pressed={playback==='playing'} aria-label={playback==='playing'?'Turn music and sound off':'Play background music'} title={playback==='playing'?'Turn music and sound off':'Play background music'}>♫ <span>{playback==='playing'?'sound on':!sound?'sound off':playback==='error'?'retry sound':'sound ready'}</span></button><button className="menu-button" onClick={()=>setMenu(true)} aria-label="Open chapter menu">contents ≡</button></div></header>
 <div className="desk-layout"><aside className="contents-rail"><div className="rail-heading">a little world of us</div><nav aria-label="Chapters">{chapters.map((c,i)=><button key={c.short} onClick={()=>go(i)} aria-current={i===scene?'step':undefined} aria-label={`Chapter ${i}: ${c.short}`}><span>{String(i).padStart(2,'0')}</span>{c.short}<b>{i===scene?'↢':''}</b></button>)}</nav><div className="birthday-calendar"><span>November</span><strong>9</strong><small>Monday, 2026</small><p>seventeen looks<br/>segzy on you.</p></div><div className="rail-footer"><div className="rail-signature"><span>Pesty + Cidy</span><small>best viewed with your<br/>favourite person in mind.</small></div><button className="about-link" onClick={()=>setHelp(true)}>about this little world</button></div></aside>
 <main id="chapter-content" ref={main} tabIndex={-1} key={scene} className="scene-main"><SceneHeading number={scene} title={chapters[scene].title} subtitle={chapters[scene].subtitle}/><div className="scene-surface"><Suspense fallback={<div className="chapter-loading">opening the next little world…</div>}>{sceneNodes[scene]}</Suspense></div></main></div>
 <footer className="scene-footer"><button disabled={scene===0||!!transition} onClick={()=>go(scene-1)} aria-label="Previous chapter">← <span>back</span></button><button className="mobile-chapter" onClick={()=>setMenu(true)}>{String(scene).padStart(2,'0')} / {String(lastChapter).padStart(2,'0')} · {chapters[scene].short} <span>⌄</span></button><button disabled={scene===lastChapter||!!transition} onClick={()=>go(scene+1)} aria-label="Next chapter"><span>{scene===lastChapter?'always, Pesty':scene===0?'skip intro':'next chapter'}</span> {scene<lastChapter?'→':'♡'}</button></footer>
 {transition&&<div className={`scene-transition ${transition}`} aria-hidden="true"><span>{scene===lastChapter-1?'for you.':'turning the page…'}</span></div>}
 {menu&&<Modal title="Choose a chapter" onClose={()=>setMenu(false)} className="chapter-menu"><span className="eyebrow">the contents of a friendship</span><h2>Our little world.</h2><nav>{chapters.map((c,i)=><button key={c.short} className={scene===i?'active':''} onClick={()=>{setMenu(false);go(i);}}><span>{String(i).padStart(2,'0')}</span>{c.short}<b>{scene===i?'you are here':'↗'}</b></button>)}</nav></Modal>}
 {musicOpen&&<Modal title="Our song" onClose={()=>setMusicOpen(false)}><div className="music-dialog"><span className="eyebrow">our golden thread</span>{backgroundPlaylist.length?<><h2>{currentTrack.title}</h2>{currentTrack.artist&&<p>{currentTrack.artist}</p>}<div className="music-playlist" role="group" aria-label="Songs">{backgroundPlaylist.map((track,i)=><button key={track.title} data-music-control aria-pressed={i===trackIndex} onClick={()=>background.current?.playTrack(i)}>{track.title}</button>)}</div><button className="button" data-music-control onClick={()=>background.current?.toggle()}>{playback==='playing'?'Pause music':'Play music'}</button></>:<><h2>{music.title}</h2><p>{music.artist}</p><p>A place is saved for our song. The authorized recording hasn’t been added yet.</p><span className="handwritten">The thread is here, even in the quiet.</span></>}</div></Modal>}
 {help&&<Modal title="About this little world" onClose={()=>setHelp(false)}><div className="about-note"><span className="eyebrow">the second edition</span><h2>Made for you.</h2><p>Six (not seven) interactive for my favvvvvvv person on the worldddd. Your physical birthday should be at ur front porch by the time u get back from school. Sorry for the delay, there was heavy traffic.</p><p>Your keepsakes are remembered on this device. Uploaded photos stay in this browser session.</p><span className="handwritten">Love, your Pesty.</span></div></Modal>}
 </div>
}
