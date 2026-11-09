// The removed Journey (old 06) and old Final Letter (07) now both resume at 06.
export function resumeChapter(saved:unknown, count:number):number {
 const value=typeof saved==='number'?saved:typeof saved==='string'&&saved.trim()?Number(saved):NaN;
 return Number.isInteger(value)&&value>=0&&count>0?Math.min(value,count-1):0;
}
