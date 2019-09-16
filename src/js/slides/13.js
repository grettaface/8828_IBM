import $ from 'jquery';

export default class slide13 {
  constructor() {}

  mount() {
    TweenMax.to('.slide-thirteen .slide-title__icon', 0.5, {
      opacity: 1,
      transform: 'scale(1)',
      ease: Back.easeOut
    });

    TweenMax.to('.slide-thirteen .slide-description__small', 0.5, {
      delay: 0.5,
      opacity: 1,
      transform: 'translateY(0)'
    });

    TweenMax.staggerTo(
      '.slide-thirteen .sliding',
      0.5,
      {
        delay: 0.7,
        opacity: 1,
        transform: 'translateY(0)'
      },
      0.1
    );
  }

  unmount() {
    TweenMax.to('.slide-thirteen .slide-title__icon', 0.5, {
      opacity: 0,
      transform: 'scale(0.8)',
      delay: 0.3,
      ease: Back.easeIn
    });

    TweenMax.to('.slide-thirteen .slide-description__small', 0.5, {
      opacity: 0,
      delay: 0.1,
      transform: 'translateY(30px)'
    });

    TweenMax.staggerTo(
      '.slide-thirteen .sliding',
      0.5,
      {
        opacity: 0,
        transform: 'translateY(30px)'
      },
      0.1
    );
  }
}
