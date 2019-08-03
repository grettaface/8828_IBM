import $ from 'jquery';
import { TweenMax } from 'gsap/umd/Tweenmax';
import { Power4 } from 'gsap';

export default class slide2 {
  mount() {
    TweenMax.fromTo(
      $('#slide-2-bar-1'),
      0.6,
      {
        width: '0%'
      },
      {
        ease: Power4.easeOut,
        width: '46%'
      }
    );
  }

  unmount() {
    TweenMax.fromTo(
      $('#slide-2-bar-1'),
      0.6,
      {
        width: '46%'
      },
      {
        ease: Power4.easeIn,
        width: '0%'
      }
    );
  }
}
