import $ from 'jquery';
import { TweenMax } from 'gsap/umd/Tweenmax';

import Dots from '../components/dots';
import Slider from '../components/slider';

export default class slide7 {
  constructor() {
    this.dotSelected = this.dotSelected.bind(this);

    this.dots = new Dots({
      callback: this.dotSelected,
      element: $('.slide-seven .use-case__dots')
    });

    this.slider = new Slider({
      element: $('.slide-seven .use-case__content')
    });
  }

  mount() {
    TweenMax.fromTo(
      '.slide-seven .use-case__header',
      0.5,
      {
        transform: 'translateY(30px)',
        opacity: 0
      },
      {
        transform: 'translateY(0)',
        opacity: 1
      }
    );

    TweenMax.fromTo(
      '.slide-seven .use-case__subheader',
      0.5,
      {
        transform: 'translateY(30px)',
        opacity: 0
      },
      {
        delay: 0.5,
        transform: 'translateY(0)',
        opacity: 1
      }
    );

    TweenMax.staggerFromTo(
      '.slide-seven .sidebar-pod',
      0.5,
      {
        transform: 'translateY(30px)',
        opacity: 0
      },
      {
        delay: 0.7,
        transform: 'translateY(0)',
        opacity: 1
      },
      0.2
    );

    TweenMax.fromTo(
      '.slide-seven .use-case__dots',
      0.5,
      {
        transform: 'translateY(30px)',
        opacity: 0
      },
      {
        delay: 1,
        transform: 'translateY(0)',
        opacity: 1
      }
    );

    TweenMax.fromTo(
      '.slide-seven .use-case__content',
      0.5,
      {
        transform: 'translateY(30px)',
        opacity: 0
      },
      {
        delay: 1.2,
        transform: 'translateY(0)',
        opacity: 1
      }
    );
  }

  unmount() {
    this.dots.reset();
    this.slider.reset();

    TweenMax.fromTo(
      '.slide-seven .use-case__content',
      0.5,
      {
        transform: 'translateY(0px)',
        opacity: 1
      },
      {
        transform: 'translateY(30px)',
        opacity: 0
      }
    );

    TweenMax.fromTo(
      '.slide-seven .use-case__dots',
      0.5,
      {
        transform: 'translateY(0px)',
        opacity: 1
      },
      {
        transform: 'translateY(30px)',
        opacity: 0
      }
    );

    TweenMax.staggerFromTo(
      '.slide-seven .sidebar-pod',
      0.5,
      {
        transform: 'translateY(0px)',
        opacity: 1
      },
      {
        transform: 'translateY(30px)',
        opacity: 0
      },
      0.2
    );

    TweenMax.fromTo(
      '.slide-seven .use-case__subheader',
      0.5,
      {
        transform: 'translateY(0px)',
        opacity: 1
      },
      {
        transform: 'translateY(30px)',
        opacity: 0
      }
    );

    TweenMax.fromTo(
      '.slide-seven .use-case__header',
      0.5,
      {
        transform: 'translateY(0px)',
        opacity: 1
      },
      {
        transform: 'translateY(30px)',
        opacity: 0
      }
    );
  }

  dotSelected(dot) {
    console.log(dot);
    this.slider.setSlide(parseInt(dot));
  }
}
