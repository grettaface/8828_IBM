import $ from 'jquery';
import { TweenMax } from 'gsap/umd/Tweenmax';
import { Power4, Back } from 'gsap';

export default class slide5 {
  mount() {
    TweenMax.fromTo(
      '.slide-five .network-partner__header',
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

    TweenMax.fromTo(
      '.slide-five .network-partner__subheader',
      0.5,
      {
        transformOrigin: 'center center',
        transform: 'translateY(30px)',
        opacity: 0
      },
      {
        delay: 0.7,
        transform: 'translateY(0)',
        opacity: 1
      }
    );

    TweenMax.fromTo(
      '.circle',
      0.5,
      {
        transform: 'translateX(-50%) translateY(-50%) scale(0)',
        opacity: 0
      },
      {
        delay: 0.5,
        ease: Back.easeOut,
        transform: 'translateX(-50%) translateY(-50%) scale(1)',
        opacity: 1
      }
    );

    TweenMax.staggerFromTo(
      '.slide-five-icon',
      0.5,
      {
        width: 0,
        opacity: 0
      },
      {
        delay: 0.8,
        ease: Back.easeOut,
        width: '7.5rem',
        opacity: 1
      },
      0.2
    );

    TweenMax.fromTo(
      '.wan',
      0.5,
      {
        transform: 'translateY(30px)',
        opacity: 0
      },
      {
        delay: 1.5,
        ease: Back.easeOut,
        transform: 'translateY(0)',
        opacity: 1
      }
    );

    TweenMax.fromTo(
      '.cloud-green',
      0.5,
      {
        transform: 'translateY(30px)',
        opacity: 0
      },
      {
        delay: 1.5,
        ease: Back.easeOut,
        transform: 'translateY(0)',
        opacity: 1
      }
    );

    TweenMax.fromTo(
      '.cl_logo',
      0.5,
      {
        transform: 'translateY(30px)',
        opacity: 0
      },
      {
        delay: 1.8,
        ease: Back.easeOut,
        transform: 'translateY(0)',
        opacity: 1
      }
    );

    TweenMax.fromTo(
      '.green-line',
      0.5,
      {
        width: '0rem'
      },
      {
        delay: 2.5,
        width: '71rem'
      }
    );

    TweenMax.fromTo(
      '.cloud-green p',
      0.5,
      {
        transform: 'translateY(30px)',
        opacity: 0
      },
      {
        delay: 2,
        ease: Back.easeOut,
        transform: 'translateY(0)',
        opacity: 1
      }
    );

    TweenMax.fromTo(
      '.cloud-gray',
      0.5,
      {
        transform: 'translateY(30px)',
        opacity: 0
      },
      {
        delay: 2,
        ease: Back.easeOut,
        transform: 'translateY(0)',
        opacity: 1
      }
    );

    TweenMax.staggerFromTo(
      '.slide-five .logo',
      0.5,
      {
        transform: 'translateY(30px)',
        opacity: 0
      },
      {
        delay: 2,
        ease: Back.easeOut,
        transform: 'translateY(0)',
        opacity: 1
      },
      0.2
    );
  }

  unmount() {
    TweenMax.fromTo(
      '.green-line',
      0.5,
      {
        width: '71rem'
      },
      {
        width: '0rem'
      }
    );
    TweenMax.fromTo(
      '.slide-five .network-partner__header',
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
      '.slide-five .network-partner__subheader',
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
      '.cloud-green',
      0.5,
      {
        transform: 'translateY(0)',
        opacity: 1
      },
      {
        transform: 'translateY(30px)',
        opacity: 0
      }
    );

    TweenMax.fromTo(
      '.wan',
      0.5,
      {
        transform: 'translateY(0)',
        opacity: 1
      },
      {
        transform: 'translateY(30px)',
        opacity: 0
      }
    );

    TweenMax.fromTo(
      '.cloud-gray',
      0.5,
      {
        transform: 'translateY(0)',
        opacity: 1
      },
      {
        transform: 'translateY(30px)',
        opacity: 0
      }
    );

    TweenMax.fromTo(
      '.slide-five-icon',
      0.5,
      {
        opacity: 1
      },
      {
        opacity: 0
      }
    );

    TweenMax.fromTo(
      '.circle',
      0.5,
      {
        transform: 'translateX(-50%) translateY(-50%) scale(1)',
        opacity: 1
      },
      {
        transform: 'translateX(-50%) translateY(-50%) scale(0)',
        opacity: 0
      }
    );
  }
}
