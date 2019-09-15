import $ from 'jquery';

let columns = $('.slide-two .dot-column');
let dotContentDetail = $('.dot-content-detail');
let dotLink = $('.slide-two .dot-content__link');

export default class slide2 {
  constructor({ navCallback }) {
    columns.on('click', e => {
      const ct = $(e.currentTarget);
      columns.removeClass('active');
      ct.addClass('active');
      dotContentDetail.removeClass('active');
      $(`.dot-content-detail[data-index=${ct.attr('data-index')}]`).addClass(
        'active'
      );
    });

    dotLink.on('click', e => {
      const ct = $(e.currentTarget);
      navCallback(ct.attr('data-index'));
    });
  }

  mount() {}

  unmount() {
    columns.removeClass('active');
    dotContentDetail.removeClass('active');
  }
}
