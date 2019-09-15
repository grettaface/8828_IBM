import $ from 'jquery';
import { TweenMax, Back } from 'gsap';

export default class Slider {
  constructor({ element }) {
    this.slides = $('.slider-icon', element);
    this.slideContent = $('.slider-content__item', element);

    this.slides.on('click', e => {
      const ct = $(e.currentTarget);
      this.slides.removeClass('active');
      ct.addClass('active');

      this.slideContent.removeClass('active');
      $(`[data-index=${ct.attr('data-index')}]`, element).addClass('active');
    });
  }

  mount() {
    TweenMax.staggerTo(
      this.slides,
      0.5,
      {
        opacity: 1,
        transform: 'scale(1)',
        ease: Back.easeOut
      },
      0.1
    );
  }

  unmount() {
    TweenMax.to(this.slides, 0.5, {
      opacity: 0,
      transform: 'scale(0.8)',
      ease: Back.easeIn
    });
  }

  reset() {
    this.slides.removeClass('active');
    this.slideContent.removeClass('active');
  }
}
