import $ from 'jquery';
import { TweenMax } from 'gsap/umd/Tweenmax';
import { Power4 } from 'gsap';

export default class slide4 {
  constructor() {
    $('.owner-grid__item').click(e => {
      $('.cube', e.currentTarget).toggleClass('turnt');
    });
  }
  mount() {
    TweenMax.fromTo(
      $('#slide-four-bar-1'),
      0.6,
      {
        width: '0%'
      },
      {
        ease: Power4.easeOut,
        width: '46%'
      }
    );

    TweenMax.fromTo(
      '.slide-four-image',
      0.6,
      {
        opacity: 0,
        transform: 'translateY(30px)'
      },
      {
        delay: 0.5,

        opacity: 1,
        transform: 'translateY(0)'
      }
    );

    TweenMax.fromTo(
      '.slide-four-content h2',
      0.6,
      {
        opacity: 0,
        transform: 'translateY(30px)'
      },
      {
        opacity: 1,
        transform: 'translateY(0)'
      }
    );

    TweenMax.staggerFromTo(
      '.slide-pod',
      0.6,
      {
        opacity: 0,
        transform: 'translateY(30px)'
      },
      {
        delay: 1,
        opacity: 1,
        transform: 'translateY(0)'
      },
      0.2
    );

    TweenMax.staggerFromTo(
      '.slide-four-content p',
      0.6,
      {
        opacity: 0,
        transform: 'translateY(30px)'
      },
      {
        delay: 0.5,
        opacity: 1,
        transform: 'translateY(0)'
      },
      0.2
    );
  }

  unmount() {
    TweenMax.fromTo(
      $('#slide-four-bar-1'),
      0.6,
      {
        width: '46%'
      },
      {
        ease: Power4.easeIn,
        width: '0%'
      }
    );

    TweenMax.fromTo(
      '.slide-four-image',
      0.6,
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
      '.slide-four-content h2',
      0.6,
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
      '.slide-four-content p',
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
      '.slide-pod',
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
