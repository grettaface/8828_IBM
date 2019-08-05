import $ from 'jquery';
import { TweenMax } from 'gsap/umd/Tweenmax';
import { Back } from 'gsap';

export default class slide4 {
  mount() {
    TweenMax.fromTo(
      $('#slide-4-bar-1'),
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
      $('#slide-4-bar-2'),
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
      '.slide-4-content h2',
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
      '.slide-4-content__item',
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

    TweenMax.fromTo(
      '.globe-background',
      0.5,
      {
        transform: 'translateY(30px)',
        opacity: 0
      },
      {
        transform: 'translateY(0)',
        opacity: 1
      }
    );

    TweenMax.fromTo(
      '.globe',
      0.8,
      {
        opacity: 0,
        transform: 'translateX(-50%) translateY(-50%) scale(0)'
      },
      {
        delay: 1,
        opacity: 1,
        transform: 'translateX(-50%) translateY(-50%) scale(1)',
        ease: Back.easeOut
      }
    );
  }

  unmount() {
    TweenMax.fromTo(
      $('#slide-4-bar-1'),
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
      $('#slide-4-bar-2'),
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
      '.globe',
      0.8,
      {
        opacity: 1,
        transform: 'translateX(-50%) translateY(-50%) scale(1)'
      },
      {
        opacity: 0,
        transform: 'translateX(-50%) translateY(-50%) scale(0)',

        ease: Power4.easeOutBack
      }
    );

    TweenMax.to('.globe-background', 0.5, {
      transform: 'translateY(30px)',
      opacity: 0
    });

    TweenMax.to('.slide-4-content__item', 0.5, {
      transform: 'translateY(30px)',
      opacity: 0
    });
  }
}
