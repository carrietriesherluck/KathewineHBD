import { capsuleMedia } from './capsuleMedia';
import { photoBoothPhotos } from './photoBoothAssets';
// Personal copy and media references live here. Paths are relative to public/.
export const chapters = [
  { short: 'The call', title: 'Professionality and Ethicalness.', subtitle: 'Every good story begins somewhere. Every pesticide is made by stepping on pests.', cue: 'A familiar voice is calling.' },
  { short: 'The birthday issue', title: 'My Baby Girl', subtitle: '我是你的气场 280 黄黑皮小狼勾', cue: 'A special edition, just for you.' },
  { short: 'Memory machine', title: '扭扭蛋坤器', subtitle: '我只想铭记这瞬间\n我们一起走过的光年', cue: 'The archives are slightly unhinged.' },
  { short: 'Our passport', title: '成功拿到流动黄旗', subtitle: '', cue: 'Issued to the Pesticide Duo.' },
  { short: 'A little fortune', title: "球球器去球.", subtitle: "Professor Sybill Trelawney strikes again with her magic crystal ball", cue: 'Good things are on their way.' },
  { short: 'Photo booth', title: 'Say cheese!', subtitle: 'how to say 板凳 in English: Abandon…', cue: 'Made by you. Kept by you.' },
  { short: 'For my wifey', title: "I got all I need when I got you and I", subtitle: "I'm stuck in the dark but you're my flashlight.", cue: 'One last thing, Cidy.' },
];
export const dialogue = {
  caller: '8H Carrie Wang', incoming: 'Incoming call…', connecting: 'Connecting to your future poop destiny', declined: '????? MIAH AYES.',
  messages: ['OOPS SORRY I SUDDENLY CALLED YOU 😭', "I’m a new student btw."],
  callMessages: ['啊啊啊对不起！我按错了……', '我是我们班的新生，，有点困惑害羞(Ｔ＿Ｔ)'],
  annotation: 'Nonchalant Carrie would later admit this was done entirely on purpose',
};
export type Motif = 'flower' | 'heart' | 'star' | 'bow' | 'penguin' | 'wave' | 'plant' | 'laptop' | 'palette' | 'planet' | 'table' | 'cake' | 'crest' | 'milk';
export const memories: {title:string; text:string; image:string; artifact?:string}[] = [
  {title:"The Shiterina Obituary", text:"你可能都没看过这个……为什么我做了这个呢……我烧烤了两周真的不知道.就当让我提前一百年锻炼一下", artifact:"obituary", image:capsuleMedia[0]},
  {title:"Cultivate Caner Cancellatoin", text:"大家都要禁止Caner，我们要unite and boyscott Caner. What is caner you ask, Mr. Gavin? Oh wait shit, we meant cancer.", artifact:"cancer", image:capsuleMedia[1]},
  {title:"终于露腿了", text:"许雅淇不长腿毛，只长扣的伤疤，所以我帮她买了光腿神器:) 你最近在扣嘛！！！！给我停下！！！要扣扣我的。谢谢奖励", image:capsuleMedia[2]},
  {title:"BANANANA MILK", text:"Don't want to become Stanley-like and end up hole-digging all year long? Don't want to get bullied at the Green Lake Camp by a kiddo with fractured glasses? We present to you BANANANA MILK\nsponsored by Holes 爱还有那个并没有送出去的坤坤香蕉", artifact:"milk", image:capsuleMedia[3]},
  {title:"KFC MC GAMERRRRR", text:"我们就这样继续玩mc，两个十四岁的大朋友就喜欢一人拿鼠标一人用键盘看到苦力怕找妈妈。哇啊啊啊啊啊啊啊我不知道为什么我想起了catapult。。。。", image:capsuleMedia[4]},
  {title:"Scratch scratch card", text:"越努力越幸运，愿你所想皆能如愿……有没有被我这个暖女暖到。提醒叮咚，halloween想再跟你扮一次鬼，答应人家好不好。", image:capsuleMedia[5]},
  {title:"A very naughty Tencent meeting", text:"主播今天来看看这两个人能不能date？ 瓜子脸特征太明显眼睛太大说明福气不好。手指很粗说明……嘴巴很红说明健将有力。总结只能doi不能date", image:capsuleMedia[6]},
  {title:"Guessing Game", text:"请在我的生日结束前submit ur answer 谢谢", image:capsuleMedia[7]}
];
export const passportPages: {label:string; title:string; text:string; stamp:string; motif:Motif; note:string}[] = [
  {
    "label": "identity document",
    "title": "The Katherine of Aragon",
    "text": "Katherine, owner of Shibao and Cidy. Born 1900 11 09. Witnessed the great fall of Rome and the 911 tower collapse. Witnessed Hawking becoming a wheelchair erection. Witnessed the birth of Madame Zeroni.",
    "stamp": "LIFETIME MEMBERS",
    "motif": "crest",
    "note": "Katherine · 09 November 2009\nSeventeenth birthday · 20261109"
  },
  {
    "label": "port of entry",
    "title": "One “accidental” call",
    "text": "I have a very vivid picture of you in your emerald pe shirt and ur cheeks pink with exhaustion in that teams video box. I think I fell in love then and there, deciding promptly to call u accidentally.",
    "stamp": "PREMEDITATED",
    "motif": "laptop",
    "note": "Place of entry: Online Microsoft Teams\nPurpose of visit: friendship + dominatrix"
  },
  {
    "label": "offline arrival",
    "title": "Have we met?",
    "text": "Now, in my defense. In my defense… I thought u had short hair, so when I saw a group member with long flippy hair, I didn’t dare approach you. It took me an entire day to recognize you. (Only after I confirmed with you offline that very afternoon….) Punish me Daddy..",
    "stamp": "IDENTITY VERIFICATION FAILED",
    "motif": "penguin",
    "note": "Facial recognition: TEMPORARY FAILED\nFriendship recognition: successful"
  },
  {
    "label": "residency record",
    "title": "The inseparable years",
    "text": "8H - like snot and glue together inseparable. All the classes, including Grossman revolting ones and Burnham 深情唱歌ones. 9N/9O - still tight as fungi to ur butthole, every lunch break, every single one!",
    "stamp": "ADMITTED TOGETHER",
    "motif": "table",
    "note": "Going to math class with my favorite person\nBaggage: approximately a thousand inside jokes"
  },
  {
    "label": "birthday visas",
    "title": "Five birthdays marking our adultfying and oldifying",
    "text": "With You. With You. With You. With You. With You…",
    "stamp": "VALID ACROSS DISTANCE",
    "motif": "cake",
    "note": "13 → 14 → 15 → 16 → 17\nNext destination: all the years ahead"
  }
];
export const fortuneIntro = {
  "label": "the Divination Period",
  "title": "You have the Grim. The Grim, my dear, the Grim!.",
  "text": "Right, you've got a crooked sort of cross... That means you're going to have 'trials and suffering' — sorry about that — but there's a thing that could be the sun... hang on... that means 'great happiness' — so you're going to suffer but be very happy…我呸呸呸"
};
export const fortunes = [
  {
    "title": "Disconnected “much?",
    "body": "Your karaoke song choice will be discussed for years since your taste remained in 2019.",
    "foot": ""
  },
  {
    "title": "In One and a Half Year",
    "body": "A mysterious institution across the Pacific Ocean will one day send you an email that changes your life. You will stare at the subject line for seventeen minutes before opening it. Whether it contains acceptance, rejection, or a reminder to submit financial documents, the stars refuse to specify. However, they confidently predict that you will eventually learn the true meaning of American independence: doing laundry while crying over tuition.",
    "foot": ""
  },
  {
    "title": "早睡到底有多难",
    "body": "You will promise yourself that you are going to sleep early. At 10 PM, everything will be going according to plan. At 10:15, someone will enter your room with an interesting piece of information. By midnight, six people will be involved in the conversation. You will learn nothing academically useful.",
    "foot": ""
  },
  {
    "title": "Viva La vida",
    "body": "You will have a surprisingly good day for absolutely no reason. Your classes will be tolerable, the cafeteria food will be decent, and nobody will annoy you significantly. You will become suspicious of this unusual sequence of events. Nothing bad will happen afterward. Sometimes life is simply okay.",
    "foot": ""
  },
  {
    "title": "The Answer is Yes",
    "body": "Whatever that might have scared you is actually 黑切白. It will turn out to the best form of success you have ever experienced recently",
    "foot": ""
  },
  {
    "title": "Run",
    "body": "……..",
    "foot": ""
  }
];
export const artifacts: Record<string,{title:string;src:string;kind:'image'|'pdf'|'text';description:string;text?:string;textHeading?:string}> = {
 obituary:{title:'The Shiterina Obituary',src:capsuleMedia[0],kind:'image',description:'The original friendship artifact'},
 typhoon:{title:'Typhoon Culture',src:'',kind:'image',description:'Katherine’s artwork · Carrie’s editorship'},
 letter2023:{title:'May 20, 2023',src:'',kind:'text',description:'Carrie’s original letter, preserved exactly as written',textHeading:"Original OGGGGG Gang",text:"This has been a while. The last time I wrote you a letter was on Christmas, and now all the Mi-Mis are outdated. So in order to give you a heart Mi-Mi, I'm here again. \nFirst off, let me clear something up (in other words, I'm going to be Sirius Black before I become the greatest showman), And I know even without my Gucci and Louis Vuitton, I'd made you look). \nOk, chop chop, now that's over, ...... Ignore the pause, I'm trying to think of another Mi-Mi and 凑字数. Ok ok ok ok 好的, let's go 情感. I'm always thankful for you, a knucklehead that guesses my lyrics 完形填空 and for me to 训, and to tease me about ac. And to tell you the truth, I only have you, my big fish （插入尔康). <3 Yours,\nCarrier Wayne"},
 cancer:{title:'Cancer campaign poster',src:capsuleMedia[1],kind:'image',description:'An original school campaign'},
 earth:{title:'Katherine’s Earth paintings',src:'',kind:'image',description:'A little world, seen through your eyes'},
 support:{title:'Always in my corner',src:'',kind:'image',description:'Katherine’s original supportive message'},
 christmas:{title:'The Christmas message tree',src:'',kind:'image',description:'A festive design from the archives'},
 saturn:{title:'The Saturn project',src:'',kind:'pdf',description:'One of the worlds we made together'},
 milk:{title:'BANANANA MILK',src:capsuleMedia[3],kind:'image',description:'The original project, in all its glory'},
};
export const photos = [
  {id:'afternoon',label:'A loving evening with Katherine Clarinet BGM',src:photoBoothPhotos[0]}, {id:'together',label:'A demonic clarinet with its reed',src:photoBoothPhotos[1]}, {id:'birthday',label:'A pair of ghosts enslaved by SOIS ghost house',src:photoBoothPhotos[2]},
];
export const letter = {
  "salutation": "My dearest Cidy,",
  "echoMessage": "啊啊啊对不起！我按错了……我是我们班的新生，，有点困惑害羞(Ｔ＿Ｔ)",
  "margin": "for the girl I kisssssss big assh for.",
  "eyebrow": "for your seventeenth slave year",
  "seal": "K+C",
  "paragraphs": [
    "icmeaicsawtwufm\nticmo\nttdttdtwnobb\nbiflh\ntcstcsiasc\nidcidciilmm\n....wcliawtwd.",
    "Happy Birthday to the most gorgeous and professionally ethical person in the entire world.",
    "To take us down memory lane: here are some problems I was facing in 2024\n1 Katherine can’t stop singing When I was 13…\n2 Katherine can’t focus her eyes on ME!! ONLY!!!\n3 Katherine doesn’t FaceTime me anymore…",
    "And now in the current space and time, I will have to admit those three problems still hold truth. They need resolving because we have this relationship that is more squirmy than little m’s hand shake in Santa Tell Me.",
    "Your favorite milla is so proud of you learning how to wipe ur ass alone, how to eject snot, and how to lick ur milk mustache clean. All work I was supposed to do, but now atlas have retired. Essential life skills I hope you will remember for the rest of your life.",
    "For seventeen, I wish you room to grow in every single direction. Make beautiful things. Make disgusting jokes. Be proud of yourself. Clap your hands often (cuz If you're happy and you know it, clap your hands!) And know that wherever life takes you, there is somebody with great lab lab for u bathe."
  ],
  "ending": [
    "If I 重生了回到上网课的第一天， I would absolutely choose you all over again",
    "This time, I would just 强吻你and stick my tongue down your throat.",
    "Happy 17th birthday, wifey. ♡"
  ],
  "signature": "Always your Pesty,",
  "name": "Carrie"
};
export const music = {title:'Tightrope',artist:'The Greatest Showman',audioSrc:'',embedUrl:''};
