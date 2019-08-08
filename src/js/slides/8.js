import $ from 'jquery';
import { TweenMax } from 'gsap/umd/Tweenmax';

export default class slide8 {
  mount() {
    TweenMax.fromTo(
      '.slide-eight .use-case__header',
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
      '.slide-eight .use-case__subheader',
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

    TweenMax.staggerFromTo(
      '.slide-eight .sidebar-pod',
      0.5,
      {
        transform: 'translateY(30px)',
        opacity: 0
      },
      {
        delay: 0.7,
        transform: 'translateY(0)',
        opacity: 1
      },
      0.2
    );

    TweenMax.fromTo(
      '.slide-eight .use-case__content',
      0.5,
      {
        transform: 'translateY(30px)',
        opacity: 0
      },
      {
        delay: 1.2,
        transform: 'translateY(0)',
        opacity: 1
      }
    );
  }

  unmount() {
    TweenMax.fromTo(
      '.slide-eight .use-case__content',
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
      '.slide-eight .sidebar-pod',
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
      '.slide-eight .use-case__subheader',
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
      '.slide-eight .use-case__header',
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
