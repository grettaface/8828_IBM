import $ from 'jquery';
import { TweenMax, Power4 } from 'gsap/umd/TweenMax';

export default class home {
  constructor() {}
  mount() {
    TweenMax.fromTo(
      $('.home-content'),
      0.5,
      {
        height: '0%',
        padding: '0',
        width: '0%'
      },
      {
        height: '60%',
        width: '80%',
        padding: '20px 50px 50px',
        ease: Power4.easeOut
      }
    );
    TweenMax.fromTo(
      $('.home-content__header'),
      0.5,
      {
        opacity: 0,
        transform: 'translateY(30px)'
      },
      {
        delay: 0.5,
        opacity: 1,
        transform: 'translateY(0)',
        ease: Power4.easeOut
      }
    );
    TweenMax.fromTo(
      $('.home-content__main-title'),
      0.5,
      {
        opacity: 0,
        transform: 'translateY(30px)'
      },
      {
        delay: 0.65,
        opacity: 1,
        transform: 'translateY(0)',
        ease: Power4.easeOut
      }
    );
    TweenMax.fromTo(
      $('.home-content__subheader'),
      0.5,
      {
        opacity: 0,
        transform: 'translateY(30px)'
      },
      {
        delay: 0.8,
        opacity: 1,
        transform: 'translateY(0)',
        ease: Power4.easeOut
      }
    );
    TweenMax.fromTo(
      $('.home-content .button'),
      0.5,
      {
        opacity: 0,
        transform: 'translateY(30px)'
      },
      {
        delay: 0.95,
        opacity: 1,
        transform: 'translateY(0)',
        ease: Power4.easeOut
      }
    );
  }

  unmount() {
    TweenMax.fromTo(
      $('.home-content__header'),
      0.5,

      {
        delay: 0.8,
        opacity: 1,
        transform: 'translateY(0)'
      },
      {
        ease: Power4.easeIn,
        opacity: 0,
        transform: 'translateY(30px)'
      }
    );
    TweenMax.fromTo(
      $('.home-content__main-title'),
      0.5,

      {
        delay: 0.65,
        opacity: 1,
        transform: 'translateY(0)'
      },
      {
        ease: Power4.easeIn,

        opacity: 0,
        transform: 'translateY(30px)'
      }
    );
    TweenMax.fromTo(
      $('.home-content__subheader'),
      0.5,

      {
        delay: 0.5,
        opacity: 1,
        transform: 'translateY(0)'
      },
      {
        opacity: 0,
        transform: 'translateY(30px)'
      }
    );
    TweenMax.fromTo(
      $('.home-content .button'),
      0.5,

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
