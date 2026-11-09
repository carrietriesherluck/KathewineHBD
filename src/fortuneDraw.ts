export const fortuneStickCount=13;

export function chooseFortuneStick(fortune:number,fortuneCount:number,previous:number,random:()=>number=Math.random){
 // Thirteen numbered sticks share the six written fortunes. Keep that mapping
 // stable while retaining the saved sequence of fortune texts.
 const matching=Array.from({length:fortuneStickCount},(_,i)=>i).filter(i=>i%fortuneCount===fortune);
 const alternatives=matching.filter(i=>i!==previous);
 const choices=alternatives.length?alternatives:matching;
 const sample=random();
 const index=Number.isFinite(sample)?Math.max(0,Math.min(choices.length-1,Math.floor(sample*choices.length))):0;
 return choices[index];
}
