import $ from 'jquery';
import { TweenMax } from 'gsap/umd/Tweenmax';
import { Power4 } from 'gsap';

export default class slide5 {
  mount() {
    TweenMax.fromTo(
      $('.slide-five h1'),
      1,
      {
        opacity: 0,
        transform: 'translateY(30px)'
      },
      {
        ease: Power4.easeOut,
        opacity: 1,
        transform: 'translateY(0)'
      }
    );

    TweenMax.fromTo(
      $('.slide-five__subhead'),
      1,
      {
        opacity: 0,
        transform: 'translateY(30px)'
      },
      {
        delay: 0.2,
        ease: Power4.easeOut,
        opacity: 1,
        transform: 'translateY(0)'
      }
    );
  }

  unmount() {
    TweenMax.fromTo(
      $('.slide-five h1'),
      1,
      {
        ease: Power4.easeIn,
        opacity: 1,
        transform: 'translateY(0)'
      },
      {
        delay: 0.2,
        opacity: 0,
        transform: 'translateY(30px)'
      }
    );

    TweenMax.fromTo(
      $('.slide-five__subhead'),
      1,
      {
        opacity: 1,
        transform: 'translateY(0)'
      },
      {
        ease: Power4.easeIn,
        opacity: 0,
        transform: 'translateY(30px)'
      }
    );
  }
}
