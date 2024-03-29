import $ from 'jquery';

import Slider from '../components/slider';

let slider;
let mySplitText;
let lines;

export default class slide12 {
  constructor() {
    slider = new Slider({ element: $('.slide-twelve .slider') });

    mySplitText = new SplitText('.slide-twelve .slide-description__small', {
      type: 'lines'
    });

    lines = mySplitText.lines;
  }

  mount() {
    TweenMax.to('.slide-twelve .slide-title__icon', 0.5, {
      opacity: 1,
      transform: 'scale(1)',
      ease: Back.easeOut
    });

    TweenMax.to('.slide-twelve .slide-title__text', 0.5, {
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

    TweenMax.to('.slide-twelve .slide-image', 0.5, {
      delay: 0.7,
      opacity: 1,
      transform: 'translateY(0)'
    });

    slider.mount();
  }

  unmount() {
    TweenMax.to('.slide-twelve .slide-title__icon', 0.5, {
      opacity: 0,
      transform: 'scale(0.8)',
      delay: 0.3,
      ease: Back.easeIn
    });

    TweenMax.to('.slide-twelve .slide-title__text', 0.5, {
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

    TweenMax.to('.slide-twelve .slide-image', 0.5, {
      opacity: 0,
      transform: 'translateY(30px)'
    });

    slider.unmount();
    slider.reset();
  }
}
