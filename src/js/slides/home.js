import $ from 'jquery';
import { TweenMax } from 'gsap';
import Typewriter from 'typewriter-effect/dist/core';

export default class home {
  constructor() {
    this.headerType = new Typewriter('#home-header', {
      delay: 20
      // cursor: '_'
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
      .typeString('Infrastructure for <br/>every stage of your<br/> AI journey')
      .start()
      .callFunction(this.animationComplete);
  }

  unmount() {
    setTimeout(() => {
      $('.Typewriter__wrapper').html('');
    }, 1000);
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
