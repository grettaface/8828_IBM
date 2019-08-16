import $ from 'jquery';
import { TweenMax } from 'gsap/umd/Tweenmax';
import { Power4 } from 'gsap';

export default class slide4 {
  constructor() {
    $('.slide-four .network-grid__item').click(e => {
      const isTurnt = $('.cube', e.currentTarget).hasClass('turnt');
      $('.slide-four .cube').removeClass('turnt');
      // $('.cube', e.currentTarget).toggleClass('turnt');
      if (!isTurnt) {
        $('.cube', e.currentTarget).addClass('turnt');
      }
    });
  }

  mount() {
    TweenMax.fromTo(
      '.slide-four-content h2',
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
      '.slide-four .network-grid__item',
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
      '.slide-four-content h2',
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

    TweenMax.staggerFromTo(
      '.slide-four .network-grid__item',
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
