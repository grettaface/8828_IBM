import $ from 'jquery';

let columns = $('.dot-column');
export default class slide2 {
  constructor() {
    columns.on('click', e => {
      const ct = $(e.currentTarget);
      columns.removeClass('active');
      ct.addClass('active');
      $('.dot-content-detail').removeClass('active');
      $(`.dot-content-detail[data-index=${ct.attr('data-index')}]`).addClass(
        'active'
      );
    });
  }

  mount() {}

  unmount() {}
}
