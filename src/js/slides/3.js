import $ from 'jquery';
import { TweenMax, TimelineMax } from 'gsap/umd/Tweenmax';
import { Back, Power4 } from 'gsap';

export default class slide3 {
  constructor() {
    this.wa = $('.watch-again');
    this.video = $('#dot-animation')[0];
    this.video.onended = e => {
      this.wa.show();
      TweenMax.fromTo(
        '.watch-again',
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
    };

    this.video.onplay = e => {
      TweenMax.to('.watch-again', 0.5, {
        transform: 'translateY(30px)',
        opacity: 0,
        onComplete: () => {
          this.wa.hide();
        }
      });
    };

    this.wa.on('click', () => {
      this.video.currentTime = 0;
      this.video.play();
    });
  }

  mount() {
    this.triggerAnimation();
  }

  unmount() {
    this.video.pause();

    TweenMax.to('.watch-again', 0.5, {
      transform: 'translateY(30px)',
      opacity: 0,
      onComplete: () => {
        this.wa.hide();
      }
    });
  }

  triggerAnimation() {
    this.video.currentTime = 0;
    this.video.play();
  }
}
