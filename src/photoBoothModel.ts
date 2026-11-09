export const stickerKinds=['bow','heart','star','flower','penguin','poop'] as const;
export type StickerKind=typeof stickerKinds[number];
export type Sticker={id:number;kind:StickerKind;x:number;y:number;size:number;angle:number};
export const frameColors=['#fffdf6','#dceaf5','#f4c4d3'];
export const defaultCaption='You and me (and ur friend Steve)';
export const defaultStickers:Sticker[]=[{id:1,kind:'bow',x:730,y:100,size:175,angle:15}];

// Update old defaults without discarding custom captions or added stickers.
export function migrateCaption(value:string){return value==='you & me, in every chapter.'?defaultCaption:value;}
export function migrateStickers(value:unknown):Sticker[]{
 if(!Array.isArray(value))return defaultStickers.map(s=>({...s}));
 return value.flatMap(s=>{
  if(!s||typeof s!=='object')return [];
  if(s.id===2&&s.kind==='heart')return [];
  const kind=s.kind==='wave'?'poop':s.kind;
  if(!stickerKinds.includes(kind)||!['id','x','y','size','angle'].every(key=>Number.isFinite(s[key])))return [];
  return [{...s,kind} as Sticker];
 });
}

export function photoLayout(width:number,height:number){
 const scale=Math.min(770/width,1100/height);
 const w=width*scale,h=height*scale;
 return {width:Math.ceil(w+130),height:Math.ceil(h+230),photo:{x:65,y:65,width:w,height:h},captionY:65+h+70,footerY:65+h+125};
}

export type PrintLayout=ReturnType<typeof photoLayout>;
export function stickerPlacement(sticker:Sticker,layout:PrintLayout){
 const angle=sticker.angle*Math.PI/180;
 const extent=Math.abs(Math.cos(angle))+Math.abs(Math.sin(angle));
 const size=Math.min(sticker.size*layout.width/900,Math.min(layout.width,layout.height)/extent);
 const radius=size/2*extent;
 return {size,x:Math.max(radius,Math.min(layout.width-radius,sticker.x/900*layout.width)),y:Math.max(radius,Math.min(layout.height-radius,sticker.y/1100*layout.height)),radius};
}
export function moveSticker(sticker:Sticker,x:number,y:number,layout:PrintLayout){
 const {radius}=stickerPlacement(sticker,layout);
 return {...sticker,x:Math.max(radius,Math.min(layout.width-radius,x))/layout.width*900,y:Math.max(radius,Math.min(layout.height-radius,y))/layout.height*1100};
}

function legacyValue(key:string):unknown{try{return JSON.parse(localStorage.getItem(key)||'null');}catch{return null;}}
export function initialCaption(){const value=legacyValue('katherine-caption-v1');return typeof value==='string'?migrateCaption(value):defaultCaption;}
export function initialStickers(){const value=legacyValue('katherine-stickers-v1');return value===null?defaultStickers.map(s=>({...s})):migrateStickers(value);}
