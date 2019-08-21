import $ from 'jquery';
import { TweenMax } from 'gsap/umd/Tweenmax';
import { Power4 } from 'gsap';

export default class slide2 {
  constructor() {
    $('.slide-two .network-grid__item').click(e => {
      const isTurnt = $('.cube', e.currentTarget).hasClass('turnt');
      $('.slide-two .cube').removeClass('turnt');
      // $('.cube', e.currentTarget).toggleClass('turnt');
      if (!isTurnt) {
        $('.cube', e.currentTarget).addClass('turnt');
      }
    });
  }

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

    TweenMax.staggerFromTo(
      '.slide-two .network-grid__item',
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
      '.slide-two .network-grid__item',
      0.3,
      {
        opacity: 1,
        transform: 'translateY(0px)'
      },
      {
        opacity: 0,
        transform: 'translateY(30px)'
      }
    );
  }
}
