import $ from 'jquery';

import Slider from '../components/slider';

let slider;

export default class slide8 {
  constructor() {
    slider = new Slider({ element: $('.slide-eight .slider') });
  }

  mount() {
    TweenMax.to('.slide-eight .slide-title__icon', 0.5, {
      opacity: 1,
      transform: 'scale(1)',
      ease: Back.easeOut
    });

    TweenMax.to('.slide-eight .slide-title__text', 0.5, {
      delay: 0.3,
      opacity: 1,
      transform: 'translateY(0)'
    });

    TweenMax.to('.slide-eight .slide-description__small', 0.5, {
      delay: 0.5,
      opacity: 1,
      transform: 'translateY(0)'
    });

    TweenMax.to('.slide-eight .slide-image', 0.5, {
      delay: 0.7,
      opacity: 1,
      transform: 'translateY(0)'
    });

    slider.mount();
  }

  unmount() {
    TweenMax.to('.slide-eight .slide-title__icon', 0.5, {
      opacity: 0,
      transform: 'scale(0.8)',
      delay: 0.3,
      ease: Back.easeIn
    });

    TweenMax.to('.slide-eight .slide-title__text', 0.5, {
      opacity: 0,
      delay: 0.2,
      transform: 'translateX(-30px)'
    });

    TweenMax.to('.slide-eight .slide-description__small', 0.5, {
      opacity: 0,
      delay: 0.1,
      transform: 'translateY(30px)'
    });

    TweenMax.to('.slide-eight .slide-image', 0.5, {
      opacity: 0,
      transform: 'translateY(30px)'
    });

    slider.unmount();
    slider.reset();
  }
}
