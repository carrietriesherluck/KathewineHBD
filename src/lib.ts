import { useEffect, useRef, useState } from 'react';
export function useStored<T>(key:string, fallback:T) {
  const [value,setValue] = useState<T>(()=>{try {const v=localStorage.getItem(key);return v?JSON.parse(v):fallback;}catch{return fallback;}});
  useEffect(()=>{try{localStorage.setItem(key,JSON.stringify(value));}catch{/* Private browsing can disable storage. */}},[key,value]);
  return [value,setValue] as const;
}
export function useTimers(){
 const timers=useRef<ReturnType<typeof setTimeout>[]>([]);
 useEffect(()=>()=>timers.current.forEach(clearTimeout),[]);
 return (fn:()=>void,ms:number)=>{const id=setTimeout(fn,ms);timers.current.push(id);return id;};
}
export function useReducedMotion(){const [r,set]=useState(()=>matchMedia('(prefers-reduced-motion: reduce)').matches);useEffect(()=>{const m=matchMedia('(prefers-reduced-motion: reduce)');const fn=()=>set(m.matches);m.addEventListener('change',fn);return()=>m.removeEventListener('change',fn);},[]);return r;}
export function downloadBlob(blob:Blob,name:string){const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),3000);}

export function useViewport(){
 const [size,set]=useState(()=>({width:window.innerWidth,height:window.innerHeight}));
 useEffect(()=>{const update=()=>set({width:window.innerWidth,height:window.innerHeight});window.addEventListener('resize',update);return()=>window.removeEventListener('resize',update);},[]);
 return size;
}
export function splitReading(text:string,max:number){
 const pages:string[]=[];let remaining=text.trim();
 while(remaining.length>max){
  const count=Math.ceil(remaining.length/max),target=remaining.length/count;
  const minimum=Math.max(1,remaining.length-max*(count-1)-1);
  let cut=0,best=Infinity;
  for(let i=minimum;i<=max;i++)if(/\s/.test(remaining[i]||'')){
   const score=Math.abs(i-target)-(/[.!?…]/.test(remaining[i-1])?35:0);
   if(score<best){cut=i;best=score;}
  }
  if(!cut)cut=remaining.lastIndexOf(' ',max);
  if(cut<1)cut=max;
  pages.push(remaining.slice(0,cut).trim());remaining=remaining.slice(cut).trim();
 }
 if(remaining)pages.push(remaining);return pages;
}
