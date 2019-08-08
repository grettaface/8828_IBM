import $ from 'jquery';
import { TweenMax } from 'gsap/umd/Tweenmax';
import { Power4 } from 'gsap';

export default class slide2 {
  constructor() {
    $('.owner-grid__item').click(e => {
      $('.cube', e.currentTarget).toggleClass('turnt');
    });
  }
  mount() {
    TweenMax.fromTo(
      $('#slide-two-bar-1'),
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
      '.slide-two-content h2',
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
      '.owner-grid__item',
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
    $('.owner-grid__item .cube').removeClass('turnt');

    TweenMax.fromTo(
      $('#slide-two-bar-1'),
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
      '.slide-two-content h2',
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

    TweenMax.staggerFromTo(
      '.owner-grid__item',
      0.3,
      {
        opacity: 1,
        transform: 'translateY(0px)'
      },
      {
        opacity: 0,
        transform: 'translateY(30px)'
      },
      0.1
    );
  }
}
