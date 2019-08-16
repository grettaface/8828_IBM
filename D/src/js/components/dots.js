import $ from 'jquery';

export default class Dots {
  constructor({ callback, element }) {
    this.ucd = $('.use-case__dot', element);
    this.ucd.on('click', e => {
      const ct = $(e.currentTarget);
      this.ucd.removeClass('active');
      ct.addClass('active');
      callback(ct.attr('data-index'));
    });
  }

  reset() {
    this.ucd.removeClass('active');
    $(this.ucd[0]).addClass('active');
  }
}
