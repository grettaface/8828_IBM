import $ from 'jquery';

export default class Slider {
  constructor({ element }) {
    this.slides = $('.use-case__slide', element);
  }

  setSlide(index) {
    console.log('setting slide');
    this.slides.removeClass('active');
    $(this.slides[index]).addClass('active');
  }

  reset() {
    console.log('Resetting');
    this.setSlide(0);
  }
}
