import TweenMax from 'gsap';

let donut = new Donutty(document.getElementById('donut-chart'), {
  color: '#054ad8',
  min: 0,
  max: 100,
  radius: 500,
  round: false,
  value: 0,
  thickness: 32
});

export default class slide1 {
  mount() {
    donut.set('value', 82);
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
    donut.set('value', 0);

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
