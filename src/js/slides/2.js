import $ from 'jquery';
import { TweenMax } from 'gsap';

let columns = $('.slide-two .dot-column');
let titles = $('.slide-two .dot-column-title');
let dotContentDetail = $('.dot-content-detail');
let dotLink = $('.slide-two .dot-content__link');

export default class slide2 {
  constructor({ navCallback }) {
    columns.on('click', e => {
      const ct = $(e.currentTarget);
      columns.removeClass('active');
      columns.removeClass('loaded');
      ct.addClass('active');
      dotContentDetail.hide();
      titles.addClass('active');
      TweenMax.to(dotContentDetail, 0.5, {
        opacity: 0,
        transform: 'translateY(30px)'
      });

      $(`.dot-content-detail[data-index=${ct.attr('data-index')}]`).show();
      TweenMax.to(
        $(`.dot-content-detail[data-index=${ct.attr('data-index')}]`),
        0.5,
        {
          opacity: 1,
          transform: 'translateY(0)'
        }
      );

      if (ct.attr('data-index') > 1) {
        $('.col-1').removeClass('active');
        $('.col-2').addClass('active');
      } else {
        $('.col-1').addClass('active');
        $('.col-2').removeClass('active');
      }
    });

    dotLink.on('click', e => {
      const ct = $(e.currentTarget);
      navCallback(ct.attr('data-index'));
    });
  }

  mount() {
    for (let i = 0; i < columns.length; i++) {
      setTimeout(() => {
        $(columns[i])
          .addClass('loaded')
          .delay(1000)
          .queue(function(next) {
            // $(this).removeClass('active');
            next();
          });
      }, i * 400 + 1000);
    }

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
    columns.removeClass('loaded');
    titles.removeClass('active');
    columns.removeClass('active');
    dotContentDetail.hide();
  }
}
