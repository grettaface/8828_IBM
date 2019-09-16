import $ from 'jquery';

import Slider from '../components/slider';

let slider;

export default class slide11 {
  constructor() {
    slider = new Slider({ element: $('.slide-eleven .slider') });
  }

  mount() {
    TweenMax.to('.slide-eleven .slide-title__icon', 0.5, {
      opacity: 1,
      transform: 'scale(1)',
      ease: Back.easeOut
    });

    TweenMax.to('.slide-eleven .slide-title__text', 0.5, {
      delay: 0.3,
      opacity: 1,
      transform: 'translateY(0)'
    });

    TweenMax.to('.slide-eleven .slide-description__small', 0.5, {
      delay: 0.5,
      opacity: 1,
      transform: 'translateY(0)'
    });

    TweenMax.to('.slide-eleven .slide-image', 0.5, {
      delay: 0.7,
      opacity: 1,
      transform: 'translateY(0)'
    });

    slider.mount();
  }

  unmount() {
    TweenMax.to('.slide-eleven .slide-title__icon', 0.5, {
      opacity: 0,
      transform: 'scale(0.8)',
      delay: 0.3,
      ease: Back.easeIn
    });

    TweenMax.to('.slide-eleven .slide-title__text', 0.5, {
      opacity: 0,
      delay: 0.2,
      transform: 'translateX(-30px)'
    });

    TweenMax.to('.slide-eleven .slide-description__small', 0.5, {
      opacity: 0,
      delay: 0.1,
      transform: 'translateY(30px)'
    });

    TweenMax.to('.slide-eleven .slide-image', 0.5, {
      opacity: 0,
      transform: 'translateY(30px)'
    });

    slider.unmount();
    slider.reset();
  }
}
