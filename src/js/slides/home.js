import { TweenMax } from 'gsap';
import Typewriter from 'typewriter-effect/dist/core';

export default class home {
  constructor() {
    this.headerType = new Typewriter('#home-header', {
      delay: 20,
      cursor: '_'
    });
  }

  animationComplete() {
    TweenMax.fromTo(
      '#home-subheader',
      1,
      {
        opacity: 0,
        transform: 'translateY(30px)'
      },
      {
        opacity: 1,
        transform: 'translateY(0)'
      }
    );
  }

  mount() {
    this.headerType
      .typeString('Infrastructure for every stage of your AI journey')
      .start()
      .callFunction(this.animationComplete);
  }

  unmount() {
    this.headerType.deleteAll('fast');
    TweenMax.fromTo(
      '#home-subheader',
      1,
      {
        opacity: 1,
        transform: 'translateY(0)'
      },
      {
        opacity: 0,
        transform: 'translateY(30px)'
      }
    );
  }
}
