import $ from 'jquery';
import { TweenMax } from 'gsap/umd/Tweenmax';
import { Power4 } from 'gsap';

export default class slide2 {
  mount() {
    TweenMax.fromTo(
      '#slide-two-bar-1',
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
      '#slide-two-bar-2',
      0.6,
      {
        width: '0%'
      },
      {
        ease: Power4.easeUut,
        width: '46%'
      }
    );

    TweenMax.fromTo(
      '.slide-two-content h2',
      0.6,
      {
        opacity: 0,
        transform: 'translateY(30px)'
      },
      {
        delay: 1,
        opacity: 1,
        transform: 'translateY(0)'
      }
    );

    TweenMax.fromTo(
      '.slide-two-content p',
      0.6,
      {
        opacity: 0,
        transform: 'translateY(30px)'
      },
      {
        delay: 1.2,
        opacity: 1,
        transform: 'translateY(0)'
      }
    );

    TweenMax.staggerFromTo(
      '.slide-two-content .slide-pod',
      0.6,
      {
        opacity: 0,
        transform: 'translateY(30px)'
      },
      {
        delay: 1.5,
        opacity: 1,
        transform: 'translateY(0)'
      },
      0.2
    );
  }

  unmount() {
    $('.network-grid__item .cube').removeClass('turnt');

    TweenMax.fromTo(
      '#slide-two-bar-1',
      0.6,
      {
        ease: Power4.easeIn,
        width: '19%'
      },
      {
        width: '0%'
      }
    );

    TweenMax.fromTo(
      '#slide-two-bar-2',
      0.6,
      {
        ease: Power4.easeIn,
        width: '46%'
      },
      {
        width: '0%'
      }
    );

    TweenMax.fromTo(
      '.slide-two-content h2',
      0.3,
      {
        opacity: 1,
        transform: 'translateY(0)'
      },
      {
        opacity: 0,
        transform: 'translateY(30px)'
      }
    );

    TweenMax.fromTo(
      '.slide-two-content p',
      0.3,
      {
        opacity: 1,
        transform: 'translateY(0)'
      },
      {
        opacity: 0,
        transform: 'translateY(30px)'
      }
    );

    TweenMax.fromTo(
      '.slide-two-content .slide-pod',
      0.3,
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
