import $ from 'jquery';
import { TweenMax } from 'gsap/umd/Tweenmax';
import { Power4 } from 'gsap';

export default class slide1 {
  mount() {
    console.log('init slide 1');
    TweenMax.fromTo(
      $('#slide-bar-1'),
      0.6,
      {
        width: '0%'
      },
      {
        ease: Power4.easeOut,
        width: '19%'
      }
    );

    TweenMax.fromTo(
      $('#slide-bar-2'),
      0.6,
      {
        width: '0%'
      },
      {
        delay: 0.1,
        ease: Power4.easeOut,
        width: '46%'
      }
    );
  }

  unmount() {
    console.log('unmount slide 1');
    TweenMax.fromTo(
      $('#slide-bar-1'),
      0.6,
      {
        delay: 0.1,
        ease: Power4.easeOut,
        width: '19%'
      },
      {
        width: '0%'
      }
    );

    TweenMax.fromTo(
      $('#slide-bar-2'),
      0.6,

      {
        ease: Power4.easeOut,
        width: '46%'
      },
      {
        width: '0%'
      }
    );
  }
}
