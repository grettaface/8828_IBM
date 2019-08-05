import $ from 'jquery';
import { TweenMax } from 'gsap/umd/Tweenmax';

import Dots from '../components/dots';
import Slider from '../components/slider';

export default class slide6 {
  constructor() {
    this.dotSelected = this.dotSelected.bind(this);

    this.dots = new Dots({
      callback: this.dotSelected,
      element: $('.slide-six .use-case__dots')
    });

    this.slider = new Slider({
      element: $('.slide-six .use-case__content')
    });
  }

  mount() {
    TweenMax.fromTo(
      '.slide-six .use-case__header',
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
      '.slide-six .use-case__subheader',
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
      '.slide-six .sidebar-pod',
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

    TweenMax.staggerFromTo(
      '.slide-six .use-case__dot',
      0.5,
      {
        transform: 'translateY(30px)',
        opacity: 0
      },
      {
        delay: 1,
        transform: 'translateY(0)',
        opacity: 1
      },
      0.2
    );

    TweenMax.fromTo(
      '.slide-six .use-case__content',
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
      '.slide-six .use-case__content',
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
      '.slide-six .use-case__dot',
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

    TweenMax.staggerFromTo(
      '.slide-six .sidebar-pod',
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
      '.slide-six .use-case__subheader',
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
      '.slide-six .use-case__header',
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
