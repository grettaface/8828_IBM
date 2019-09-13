import $ from 'jquery';
import { TweenMax } from 'gsap';
import { Power4 } from 'gsap';

import NavBlocks from '../components/navBlocks';

export default class slide5 {
  constructor({ navCallback }) {
    this.navBlocks = new NavBlocks({
      element: $('.slide-five .nav-blocks'),
      onItemSelected: navCallback
    });
  }

  mount() {
    console.log('mount');
    TweenMax.fromTo(
      '.slide-five .intro-slide-content',
      0.6,
      {
        opacity: 0,
        transform: 'translateY(30px)'
      },
      {
        opacity: 1,
        transform: 'translateY(0)',
        ease: Power4.easeOut
      }
    );
  }

  unmount() {
    TweenMax.fromTo(
      '.slide-five .intro-slide-content',
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
  }
}
