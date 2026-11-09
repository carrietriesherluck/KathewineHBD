import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { artifacts } from './content';
import { playSound } from './soundEffects';
import { useViewport, splitReading } from './lib';
const modalLayers:symbol[]=[];
export function Modal({title,children,onClose,className='',focusKey}:{title:string;children:React.ReactNode;onClose:()=>void;className?:string;focusKey?:string}) {
 const ref=useRef<HTMLDivElement>(null);const close=useRef(onClose);close.current=onClose;
 useEffect(()=>{const layer=Symbol();modalLayers.push(layer);const prev=document.activeElement as HTMLElement;ref.current?.focus();const handler=(e:KeyboardEvent)=>{if(modalLayers[modalLayers.length-1]!==layer)return;if(e.key==='Escape'){e.preventDefault();close.current();}if(e.key==='Tab'){const list=Array.from(ref.current?.querySelectorAll<HTMLElement>('button:not(:disabled),a[href],input,select,textarea,[tabindex="0"]')||[]).filter(el=>!el.closest('[hidden]')&&el.getClientRects().length>0);if(!list.length)return;const first=list[0],last=list[list.length-1];if(e.shiftKey&&(document.activeElement===first||document.activeElement===ref.current)){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}};document.addEventListener('keydown',handler,true);return()=>{document.removeEventListener('keydown',handler,true);const index=modalLayers.indexOf(layer);if(index!==-1)modalLayers.splice(index,1);prev?.focus();};},[]);
 useEffect(()=>{ref.current?.focus();},[focusKey]);
 return createPortal(<div className="modal-shade" onClick={e=>{if(e.target===e.currentTarget)onClose();}} onKeyDown={e=>e.stopPropagation()}><div className={`modal-paper ${className}`} role="dialog" aria-modal="true" aria-label={title} tabIndex={-1} ref={ref}><button data-sound="navigation" className="close-button" onClick={onClose} aria-label="Close">×</button>{children}</div></div>,document.body);
}
export function ImageViewer({src,alt,onClose}:{src:string;alt:string;onClose:()=>void}){
 return <Modal title={`Enlarged image: ${alt}`} onClose={onClose} className="memory-modal memory-image-viewer"><button data-sound="navigation" className="memory-large-image" onClick={onClose} aria-label="Close enlarged image"><img src={src} alt={alt}/></button></Modal>;
}
export function ZoomableImage({src,alt='',className='',...props}:React.ImgHTMLAttributes<HTMLImageElement> & {src:string}){
 const [expanded,setExpanded]=useState(false);
 return <><img {...props} data-sound="wood" src={src} alt={alt} className={`zoomable-image ${className}`} role="button" tabIndex={0} aria-label={`Enlarge image: ${alt}`} title="Enlarge image" onClick={e=>{e.stopPropagation();setExpanded(true);}} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();e.stopPropagation();playSound('wood');setExpanded(true);}}}/>{expanded&&<ImageViewer src={src} alt={alt} onClose={()=>setExpanded(false)}/>}</>;
}
export function ImageZoomButton({src,alt,className=''}:{src:string;alt:string;className?:string}){
 const [expanded,setExpanded]=useState(false);
 return <><button data-sound="wood" className={`image-zoom-button ${className}`} aria-label={`Enlarge image: ${alt}`} title="Enlarge image" onClick={e=>{e.stopPropagation();setExpanded(true);}}><span aria-hidden="true">⤢</span></button>{expanded&&<ImageViewer src={src} alt={alt} onClose={()=>setExpanded(false)}/>}</>;
}
export function PageControls({page,count,setPage,label='Page',disabled=false,soundHandled=false,onComplete}:{page:number;count:number;setPage:(v:number)=>void;label?:string;disabled?:boolean;soundHandled?:boolean;onComplete?:()=>void}){return <div className="page-controls"><button data-sound={soundHandled?'handled':'navigation'} onClick={()=>setPage(page-1)} disabled={disabled||page===0} aria-label={`Previous ${label.toLowerCase()}`}>←</button><span aria-live="polite">{label} {page+1} / {count}</span><button data-sound={soundHandled?'handled':'navigation'} onClick={()=>{if(page===count-1&&onComplete)onComplete();else setPage(page+1);}} disabled={disabled||(page===count-1&&!onComplete)} aria-label={page===count-1&&onComplete?'Next chapter':`Next ${label.toLowerCase()}`} title={page===count-1&&onComplete?'Continue to the next chapter':undefined}>→</button></div>}
export function ReadingPages({text,className='',maxCharacters}:{text:string;className?:string;maxCharacters?:number}){const {width,height}=useViewport();const [page,setPage]=useState(0);const pages=splitReading(text,maxCharacters??(width<650?(height<740?220:340):650));useEffect(()=>setPage(0),[text,width,height]);return <div className={`reading-pages ${className}`}><p key={page}>{pages[Math.min(page,pages.length-1)]}</p>{pages.length>1&&<PageControls page={Math.min(page,pages.length-1)} count={pages.length} setPage={setPage}/>}</div>}
function TextArtifact({text,heading}:{text:string;heading?:string}){
 const {width,height}=useViewport();const limit=width<650?(height<620?90:height<740?140:220):(height<620?180:height<800?380:520);
 return <div className="artifact-text">{heading&&<h4>{heading}</h4>}<ReadingPages text={text} maxCharacters={limit}/></div>;
}
export function Artifact({id,onImageClick}:{id:string;onImageClick?:(image:{src:string;alt:string})=>void}){
 const a=artifacts[id];if(!a)return null;
 return <div className="artifact-document"><span className="eyebrow">from our personal archives</span><h3>{a.title}</h3><p>{a.description}</p>{a.kind==='text'&&a.text?<TextArtifact text={a.text} heading={a.textHeading}/>:a.src?(a.kind==='pdf'?<><a className="button" href={a.src} target="_blank" rel="noreferrer">Open original document ↗</a><iframe title={a.title} src={a.src}/></>:<>{onImageClick?<button data-sound="wood" className="artifact-image-button" onClick={()=>onImageClick({src:a.src,alt:a.title})} aria-label={`Enlarge ${a.title}`}><img src={a.src} alt={a.title}/></button>:<ZoomableImage src={a.src} alt={a.title}/>}<a href={a.src} target="_blank" rel="noreferrer">View full-size original ↗</a></>):<div className="missing-artifact"><span>Original to come</span><p>Its place in our story<br/>is already saved.</p></div>}</div>;
}
export function SceneHeading({number,title,subtitle}:{number:number;title:string;subtitle:string}){return <header className="scene-heading"><span className="chapter-number">{String(number).padStart(2,'0')}</span><div><h1>{title}</h1>{subtitle&&<p>{subtitle}</p>}</div></header>}
