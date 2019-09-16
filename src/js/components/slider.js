import $ from 'jquery';
import { TweenMax, Back, Power4 } from 'gsap';

export default class Slider {
  constructor({ element }) {
    this.slides = $('.slider-icon', element);
    this.slideContent = $('.slider-content__item', element);
    this.sliding = $('.sliding', element);

    this.slides.on('click', e => {
      const ct = $(e.currentTarget);
      this.slides.removeClass('active');
      ct.addClass('active');

      this.slideContent.removeClass('active');
      $(`[data-index=${ct.attr('data-index')}]`, element).addClass('active');
    });
  }

  mount() {
    this.animation = TweenMax.staggerTo(
      this.sliding,
      0.5,
      {
        opacity: 1,
        transform: 'translateY(0)',
        ease: Power4.easeOut
      },
      0.1
    );

    TweenMax.staggerTo(
      this.slides,
      0.5,
      {
        delay: 0.4,
        opacity: 1,
        transform: 'scale(1)',
        ease: Back.easeOut
      },
      0.1
    );
  }

  unmount() {
    TweenMax.staggerTo(
      this.sliding,
      0.5,
      {
        opacity: 0,
        transform: 'translateY(30px)',
        ease: Power4.easeIn
      },
      0.1
    );

    TweenMax.staggerTo(
      this.slides,
      0.5,
      {
        opacity: 0,
        transform: 'scale(0.8)',
        ease: Back.easeIn
      },
      0.1
    ).reverse();
  }

  reset() {
    this.slides.removeClass('active');
    this.slideContent.removeClass('active');
  }
}
