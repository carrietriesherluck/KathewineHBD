import pianoArtwork from './assets/personal/chapter01-01-piano.png';
import marioArtwork from './assets/personal/chapter01-02-mario.png';
import restaurantPhoto from './assets/personal/chapter01-03-restaurant.jpg';
import planetArtwork from './assets/personal/chapter01-04-planets.png';
// All magazine interior copy and media references are personalized here.
type MagazinePage = {
 kicker:string;title:string;body:string;note:string;style:string;
 emphasis?:string;panelText?:string;
 media?:{label:string;description:string;caption:string;src:string};
};
export const magazineInterior:{previous:string;next:string;close:string;spreadLabel:string;pageLabel:string;pages:MagazinePage[]} = {
 previous: 'Previous page', next: 'Next page', close: 'Close magazine',
 spreadLabel: 'Spread', pageLabel: 'Page',
 pages: [
  {kicker:'the “Kaca Duo',title:'Look what you made me DO',body:'For the artist who always had my back',note:'My favourite creative partner, through the poop and all.',style:'editorial',media:{label:'Typhoon Culture — cover artwork',description:'Space for the original Typhoon Culture cover or Katherine’s cover artwork.',caption:'',src:pianoArtwork}},
  {kicker:'',title:'Typhoon Culture',body:'Kaca Duo 出品',note:'',style:'portfolio',media:{label:'Typhoon Culture — inside pages',description:'Space for an original interior spread or artwork from Typhoon Culture.',caption:'an original from the archives',src:marioArtwork}},
  {kicker:'',title:'再也不会看到你下天桥啦',body:'',note:'',style:'photographs',media:{label:'A photograph of us',description:'Space for one real photograph of Katherine and Carrie, or a shared place.',caption:'请寻找图文联系（找不到',src:restaurantPhoto}},
  {kicker:'',title:'艺术细胞咋这么厉害呢.',body:'左眼是为了忘记你，右眼是为了记住你 ，我把右眼遮住，那就可以一直记住你了',emphasis:'左眼是为了忘记你，右眼是为了记住你 ',note:'',style:'archive',media:{label:'An original document or artwork',description:'Space for one original artwork, project page, note or document image.',caption:'',src:planetArtwork}},
  {kicker:'a note to Katherine',title:'我亲爱的slave owner',body:'',panelText:'Lawwwd, I miss them good ol’ days on the plantation, when you’d whup my arhss and I’d be all over ya, darlin’. Hooti fruti.',note:'aye gib uuu all of ma',style:'dedication'},
  {kicker:'editor’s last words. Rip.',title:'5th Year and still going strong',body:'I know they all are jealous of you and me. I would be too. Because aye got myself a good gal I can enjoy one day of death insurance of..',panelText:'in all siriousness, ty for sticking by and trash talking everyone with me.',note:'to be continued →',style:'colophon'},
 ]
};
