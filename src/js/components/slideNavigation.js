import $ from 'jquery';
import { TweenLite, Power4 } from 'gsap';

export default class SlideNavigation {
  constructor({ slides, callback, element }) {
    this.sni = null;
    this.initial = true;
    this.currentSlideIndex = 0;
    this.currentSlide = slides[this.currentSlideIndex];
    this.slides = slides;
    this.callback = callback;
    this.sceneContainer = $('.scene-container');

    this.changeSlide = this.changeSlide.bind(this);

    this.leftArrow = $('.arrow-left');
    this.rightArrow = $('.arrow-right');

    this.leftArrow.on('click', () => {
      this.changeSlide(--this.currentSlideIndex);
    });

    this.rightArrow.on('click', () => {
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
      this.rightArrow.addClass('inactive');
      return false;
    } else {
      this.rightArrow.removeClass('inactive');
    }

    if (this.currentSlideIndex === 0) {
      this.leftArrow.addClass('inactive');
    } else {
      this.leftArrow.removeClass('inactive');
    }

    if (this.currentSlideIndex === this.slides.length - 1) {
      this.rightArrow.addClass('inactive');
    } else {
      this.rightArrow.removeClass('inactive');
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
    TweenLite.to(this.sceneContainer, duration, {
      left: 0 - $(window).width() * di,
      ease: Power4.easeInOut
    });

    this.currentSlide = this.slides[di];

    setTimeout(() => {
      this.slides[di].class.mount();
    }, duration * 1000);
  }
}
