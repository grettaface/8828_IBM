import $ from 'jquery';
import { TweenMax, Back } from 'gsap';

import SplitText from '../plugins/SplitText';

import Slider from '../components/slider';

let slider;
let mySplitText;
let lines;

export default class slide4 {
  constructor() {
    slider = new Slider({ element: $('.slide-four .slider') });

    mySplitText = new SplitText('.slide-four .slide-description', {
      type: 'lines'
    });

    lines = mySplitText.lines;
  }

  mount() {
    TweenMax.to('.slide-four .slide-title__icon', 0.5, {
      opacity: 1,
      transform: 'scale(1)',
      ease: Back.easeOut
    });

    TweenMax.to('.slide-four .slide-title__text', 0.5, {
      delay: 0.3,
      opacity: 1,
      transform: 'translateY(0)'
    });

    TweenMax.staggerFromTo(
      lines,
      0.5,
      {
        opacity: 0,
        transform: 'translateX(30px)'
      },
      {
        ease: Power4.easeOut,
        opacity: 1,
        transform: 'translateX(0)'
      },
      0.1
    );

    TweenMax.to('.slide-four .slide-image', 0.5, {
      delay: 0.7,
      opacity: 1,
      transform: 'translateY(0)'
    });

    slider.mount();
  }

  unmount() {
    TweenMax.to('.slide-four .slide-title__icon', 0.5, {
      opacity: 0,
      transform: 'scale(0.8)',
      delay: 0.3,
      ease: Back.easeIn
    });

    TweenMax.to('.slide-four .slide-title__text', 0.5, {
      opacity: 0,
      delay: 0.2,
      transform: 'translateX(-30px)'
    });

    TweenMax.staggerFromTo(
      lines,
      0.5,
      {
        opacity: 1,
        transform: 'translateX(0)'
      },
      {
        ease: Power4.easeIn,
        opacity: 0,
        transform: 'translateX(-30px)'
      },
      0.1
    );

    TweenMax.to('.slide-four .slide-image', 0.5, {
      opacity: 0,
      transform: 'translateY(30px)'
    });

    slider.unmount();
    slider.reset();
  }
}
