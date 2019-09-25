import $ from 'jquery';
import TweenMax from 'gsap';

let donutChart = $('#donut-chart');

export default class slide1 {
  mount() {
    donutChart.addClass('filled');
    TweenMax.fromTo(
      '.donut-content__header',
      0.5,
      {
        transform: 'translateY(30px)',
        opacity: 0
      },
      {
        transform: 'translateY(0)',
        opacity: 1,
        ease: Power4.easeOut
      }
    );

    TweenMax.fromTo(
      '.donut-content__text',
      0.5,
      {
        transform: 'translateY(30px)',
        opacity: 0
      },
      {
        delay: 0.1,
        transform: 'translateY(0)',
        opacity: 1,
        ease: Power4.easeOut
      }
    );

    TweenMax.fromTo(
      '.donut-content .attribution',
      0.5,
      {
        transform: 'translateY(30px)',
        opacity: 0
      },
      {
        delay: 0.2,
        transform: 'translateY(0)',
        opacity: 1,
        ease: Power4.easeOut
      }
    );
  }

  unmount() {
    donutChart.removeClass('filled');
    TweenMax.fromTo(
      '.donut-content__header',
      0.5,
      {
        transform: 'translateY(0)',
        opacity: 1,
        ease: Power4.easeIn
      },
      {
        delay: 0.1,
        transform: 'translateY(30px)',
        opacity: 0
      }
    );

    TweenMax.fromTo(
      '.donut-content__text',
      0.5,
      {
        transform: 'translateY(0)',
        opacity: 1,
        ease: Power4.easeIn
      },
      {
        transform: 'translateY(30px)',
        opacity: 0
      }
    );

    TweenMax.fromTo(
      '.donut-content .attribution',
      0.5,
      {
        transform: 'translateY(0)',
        opacity: 1,
        ease: Power4.easeIn
      },
      {
        transform: 'translateY(30px)',
        opacity: 0
      }
    );
  }
}
