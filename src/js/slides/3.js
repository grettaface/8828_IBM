import $ from 'jquery';
import { TweenMax } from 'gsap';
import { Power4 } from 'gsap';

import NavBlocks from '../components/navBlocks';

export default class slide3 {
  constructor({ navCallback }) {
    this.navBlocks = new NavBlocks({
      element: $('.slide-three .nav-blocks'),
      onItemSelected: navCallback
    });
  }

  mount() {
    TweenMax.fromTo(
      '.slide-three .intro-slide-content',
      0.6,
      {
        opacity: 0,
        transform: 'translateY(30px)'
      },
      {
        delay: 0.3,
        opacity: 1,
        transform: 'translateY(0)',
        ease: Power4.easeOut
      }
    );

    this.navBlocks.mount();
  }

  unmount() {
    TweenMax.fromTo(
      '.slide-three .intro-slide-content',
      0.6,

      {
        opacity: 1,
        transform: 'translateY(0)'
      },
      {
        opacity: 0,
        transform: 'translateY(30px)',
        ease: Power4.easeIn
      }
    );

    this.navBlocks.unmount();
  }
}
