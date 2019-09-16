import $ from 'jquery';
import { TweenMax } from 'gsap';

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

  mount() {
    TweenMax.staggerTo(
      '.slide-two .sliding',
      0.3,
      {
        opacity: 1,
        transform: 'translateY(0)'
      },
      0.1
    );

    TweenMax.to('.slide-two .dot-imagery', 0.3, {
      delay: 0.5,
      opacity: 1,
      transform: 'translateY(0)'
    });
  }

  unmount() {
    TweenMax.staggerTo(
      '.slide-two .sliding',
      0.3,
      {
        opacity: 0,
        transform: 'translateY(30px)'
      },
      0.1
    );

    TweenMax.to('.slide-two .dot-imagery', 0.3, {
      opacity: 0,
      transform: 'translateY(30px)'
    });

    columns.removeClass('active');
    dotContentDetail.removeClass('active');
  }
}
