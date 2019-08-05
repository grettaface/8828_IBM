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

    this.video.ontimeupdate = e => {
      let ct = this.video.currentTime;

      if (ct < 3.8) {
        $('.slide-three h3').html('Data Center to Data Center');
      }

      if (ct > 3.8 && ct < 5) {
        $('.slide-three h3').html('Data Center to Cloud');
      }

      if (ct > 5 && ct < 6.3) {
        $('.slide-three h3').html('Cloud to Cloud');
      }

      if (ct > 6.3 && ct < 7.6) {
        $('.slide-three h3').html('Cloud to On-Prem');
      }

      if (ct > 7.6 && ct < 9) {
        $('.slide-three h3').html('On-prem to On-Prem');
      }

      if (ct > 9) {
        $('.slide-three h3').html('On-prem to Data Center');
      }
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
    this.video.load();

    TweenMax.to('.watch-again', 0.5, {
      transform: 'translateY(30px)',
      opacity: 0,
      onComplete: () => {
        this.wa.hide();
      }
    });
  }

  triggerAnimation() {
    this.video.play();
  }
}
