import $ from 'jquery';
import { TweenMax } from 'gsap/umd/Tweenmax';
import { Power4 } from 'gsap';

export default class slide1 {
  constructor() {
    $('.network-grid__item').click(e => {
      console.log('clicked');
      $('.cube', e.currentTarget).toggleClass('turnt');
    });
  }

  mount() {
    TweenMax.fromTo(
      $('#slide-1-bar-1'),
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
      $('#slide-1-bar-2'),
      0.6,
      {
        width: '0%'
      },
      {
        ease: Power4.easeUut,
        width: '46%'
      }
    );
  }

  unmount() {
    TweenMax.fromTo(
      $('#slide-1-bar-1'),
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
      $('#slide-1-bar-2'),
      0.6,
      {
        ease: Power4.easeIn,
        width: '46%'
      },
      {
        width: '0%'
      }
    );
  }
}
