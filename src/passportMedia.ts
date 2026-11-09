import first from './assets/personal/chapter03-01.jpg';
import second from './assets/personal/chapter03-02.jpg';
import third from './assets/personal/chapter03-03.jpg';
import fourth from './assets/personal/chapter03-04.jpg';
import fifth from './assets/personal/chapter03-05.jpg';

// Filename order supplied by Carrie; each spread and reveal share one original.
export const passportMedia=[first,second,third,fourth,fifth].map((src,index)=>({
 src,alt:`Personal photograph for passport spread ${index+1}`,
}));
