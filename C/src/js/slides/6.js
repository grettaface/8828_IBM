import $ from 'jquery';
import { TweenMax } from 'gsap/umd/Tweenmax';

export default class slide6 {
  mount() {
    TweenMax.fromTo(
      '.network-partner__header',
      0.5,
      {
        transform: 'translateY(30px)',
        opacity: 0
      },
      {
        delay: 0.5,
        transform: 'translateY(0)',
        opacity: 1
      }
    );

    TweenMax.fromTo(
      '.network-partner__subheader',
      0.5,
      {
        transform: 'translateY(30px)',
        opacity: 0
      },
      {
        delay: 0.7,
        transform: 'translateY(0)',
        opacity: 1
      }
    );

    TweenMax.staggerFromTo(
      '.slide-six .network-partner-pod',
      0.5,
      {
        transform: 'translateY(30px)',
        opacity: 0
      },
      {
        delay: 1,
        transform: 'translateY(0)',
        opacity: 1
      },
      0.2
    );
  }

  unmount() {
    TweenMax.fromTo(
      '.network-partner__header',
      0.5,
      {
        transform: 'translateY(0px)',
        opacity: 1
      },
      {
        transform: 'translateY(30px)',
        opacity: 0
      }
    );

    TweenMax.fromTo(
      '.slide-six .network-partner-pod',
      0.5,
      {
        transform: 'translateY(0px)',
        opacity: 1
      },
      {
        transform: 'translateY(30px)',
        opacity: 0
      }
    );

    TweenMax.fromTo(
      '.network-partner__subheader',
      0.5,
      {
        transform: 'translateY(0px)',
        opacity: 1
      },
      {
        transform: 'translateY(30px)',
        opacity: 0
      }
    );
  }
}
