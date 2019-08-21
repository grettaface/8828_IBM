import $ from 'jquery';
import { TweenMax } from 'gsap/umd/Tweenmax';
import { Power4 } from 'gsap';

export default class slide3 {
  mount() {
    TweenMax.fromTo(
      '#slide-three-bar-1',
      0.6,
      {
        width: '0%'
      },
      {
        ease: Power4.easeOut,
        width: '5%'
      }
    );

    TweenMax.fromTo(
      '#slide-three-bar-2',
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
      '.slide-three-vmware',
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
      '.slide-three-content h2',
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
      '.slide-three-content p',
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
      '.slide-three-content .row',
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
      '#slide-three-bar-1',
      0.6,
      {
        ease: Power4.easeIn,
        width: '5%'
      },
      {
        width: '0%'
      }
    );

    TweenMax.fromTo(
      '#slide-three-bar-2',
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
      '.slide-three-content h2',
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
      '.slide-three-vmware',
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
      '.slide-three-content p',
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
      '.slide-three-content .row',
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
