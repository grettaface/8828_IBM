import $ from 'jquery';

export default class Slider {
  constructor({ element }) {
    this.slides = $('.use-case__slide', element);
  }

  setSlide(index) {
    this.slides.removeClass('active');
    $(this.slides[index]).addClass('active');
  }

  reset() {
    this.setSlide(0);
  }
}
