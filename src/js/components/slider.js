import $ from 'jquery';
import { TweenMax, Power4 } from 'gsap';

export default class Slider {
  constructor({ element }) {
    this.slides = $('.slider-icon', element);
    this.slideContent = $('.slider-content__item', element);
    this.sliding = $('.sliding', element);
    this.masked = $('.masked', element);

    this.slides.on('click', e => {
      const ct = $(e.currentTarget);
      this.slides.removeClass('active');
      ct.addClass('active');

      this.slideContent.removeClass('active');
      $(`[data-index=${ct.attr('data-index')}]`, element).addClass('active');
    });
  }

  mount() {
    for (let i = 0; i < this.masked.length; i++) {
      let item = $(this.masked[i]);

      item

        .delay(200 * i)
        .addClass('start')
        .delay(333)
        .queue(function(next) {
          $(this).addClass('show');
          $(this).addClass('end');
          $(this).removeClass('start');
          next();
        });
    }

    this.animation = TweenMax.staggerTo(
      this.sliding,
      0.5,
      {
        opacity: 1,
        transform: 'translateX(0)',
        ease: Power4.easeOut
      },
      0.1
    );

    TweenMax.staggerTo(
      this.slides,
      0.5,
      {
        delay: 1,
        opacity: 1,
        transform: 'translateX(0)',
        ease: Power4.easeOut
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
        transform: 'translateX(-30px)',
        ease: Power4.easeIn
      },
      0.1,
      () => {
        this.masked.removeClass('end').removeClass('show');
      }
    );

    TweenMax.staggerTo(
      this.slides,
      0.5,
      {
        opacity: 0,
        transform: 'translateX(-20px)',
        ease: Power4.easeIn
      },
      0.1
    ).reverse();
  }

  reset() {
    this.slides.removeClass('active');
    this.slideContent.removeClass('active');
  }
}
