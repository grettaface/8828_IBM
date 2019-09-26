import $ from 'jquery';
import { TweenLite, Power4 } from 'gsap';

let background;
let sceneContainer;
let leftArrow;
let rightArrow;

export default class SlideNavigation {
  constructor({ slides, callback, element }) {
    background = $('.background');

    this.sni = null;
    this.initial = true;
    this.currentSlideIndex = 0;
    this.currentSlide = slides[this.currentSlideIndex];
    this.slides = slides;
    this.callback = callback;
    sceneContainer = $('.scene-container');
    this.changeSlide = this.changeSlide.bind(this);

    leftArrow = $('.arrow-left');
    rightArrow = $('.arrow-right');

    leftArrow.on('click', () => {
      this.changeSlide(--this.currentSlideIndex);
    });

    rightArrow.on('click', () => {
      this.changeSlide(++this.currentSlideIndex);
    });

    $('.slide-navigation__menu').on('click', () => {
      callback();
    });

    this.changeSlide(0);
  }

  // Transition the slide
  changeSlide(di) {
    di = parseInt(di);

    this.currentSlideIndex = di;

    if (di < 0) {
      this.currentSlideIndex = 0;
      return false;
    }

    if (di > this.slides.length - 1) {
      this.currentSlideIndex = this.slides.length - 1;
      rightArrow.addClass('inactive');
      return false;
    } else {
      rightArrow.removeClass('inactive');
    }

    if (this.currentSlideIndex === 0) {
      leftArrow.addClass('inactive');
    } else {
      leftArrow.removeClass('inactive');
    }

    if (this.currentSlideIndex === this.slides.length - 1) {
      rightArrow.addClass('inactive');
    } else {
      rightArrow.removeClass('inactive');
    }

    if (di === this.currentSlide.index && !this.initial) {
      return;
    }

    if (di === 0) {
      $('.slide-navigation').addClass('inactive');
    } else {
      $('.slide-navigation').removeClass('inactive');
    }

    // Unmount current slide
    if (!this.initial) this.currentSlide.class.unmount();
    this.initial = false;

    const duration = this.initial ? 0 : 2;
    // Transition slide
    TweenLite.to(sceneContainer, duration, {
      left: 0 - $(window).width() * di,
      ease: Power4.easeInOut
    });

    let backgroundDuration = duration * 1000;

    if (di < this.currentSlide.index) {
      backgroundDuration = 250;
    }

    this.currentSlide = this.slides[di];

    setTimeout(() => {
      background.removeClass('data-background');
      background.removeClass('train-background');
      background.removeClass('inference-background');

      // set background
      if (di >= 3 && di <= 5) {
        background.addClass('data-background');
      }

      if (di >= 6 && di <= 8) {
        background.addClass('train-background');
      }

      if (di >= 9 && di <= 13) {
        background.addClass('inference-background');
      }

      if (di === 13) {
        background.fadeOut();
      } else {
        background.fadeIn();
      }
    }, backgroundDuration);

    setTimeout(() => {
      this.slides[di].class.mount();
    }, duration * 1000 * 0.7);
  }
}
