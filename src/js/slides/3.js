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
    // this.tl = new TimelineMax();
    // this.tl2 = new TimelineMax();
    // this.tl3 = new TimelineMax();
    // this.tl4 = new TimelineMax();
    // this.tl5 = new TimelineMax();
  }

  mount() {
    // this.tl.kill();
    // this.tl2.kill();
    // this.tl3.kill();

    this.triggerAnimation();
  }

  unmount() {
    this.video.load();
  }

  triggerAnimation() {
    this.video.play();
    // this.tl
    //   .fromTo(
    //     '#arrow',
    //     0.5,
    //     {
    //       opacity: 0,
    //       transform: 'translateX(-50%) translateY(-50%) scale(0)'
    //     },
    //     {
    //       delay: 0.5,

    //       ease: Back.easeOut,
    //       opacity: 1,
    //       transform: 'translateX(-50%) translateY(-50%) scale(1)'
    //     }
    //   )
    //   .to('#arrow', 2, {
    //     rotation: 360,
    //     repeat: -1,
    //     transformOrigin: 'center center',
    //     ease: Power0.easeNone,
    //     delay: 0.5
    //   });

    // TweenMax.fromTo(
    //   '#left-circle',
    //   0.5,
    //   {
    //     left: '50%',
    //     width: 0,
    //     height: 0,
    //     opacity: 0
    //   },
    //   {
    //     ease: Back.easeOut,
    //     delay: 0.6,
    //     left: 135,
    //     width: 270,
    //     height: 270,
    //     opacity: 1
    //   }
    // );

    // TweenMax.fromTo(
    //   '#right-circle',
    //   0.5,
    //   {
    //     right: '50%',
    //     width: 0,
    //     height: 0,
    //     opacity: 0
    //   },
    //   {
    //     ease: Back.easeOut,
    //     delay: 0.6,
    //     right: 135,
    //     width: 270,
    //     height: 270,
    //     opacity: 1
    //   }
    // );

    // this.tl2.set('#chip2', { opacity: 1, delay: 2 }).fromTo(
    //   '#chip2',
    //   2,
    //   {
    //     left: 135
    //   },
    //   {
    //     left: 1179,
    //     repeat: 2,
    //     repeatDelay: 1
    //   }
    // );

    // this.tl4.fromTo(
    //   $('#right-circle .circle-blip'),
    //   1,
    //   {
    //     transform: 'scale(1)',
    //     opacity: 1,
    //     borderWidth: 3
    //   },
    //   {
    //     delay: 4,
    //     transform: 'scale(1.3)',
    //     borderWidth: 0,
    //     opacity: 0,
    //     repeat: 2,
    //     repeatDelay: 2
    //   }
    // );

    // this.tl3.set('#chip1', { opacity: 1, delay: 2 }).fromTo(
    //   '#chip1',
    //   2,
    //   {
    //     right: 135
    //   },
    //   {
    //     right: 1179,
    //     repeat: 2,
    //     repeatDelay: 1
    //   }
    // );

    // this.tl5.fromTo(
    //   $('#left-circle .circle-blip'),
    //   1,
    //   {
    //     transform: 'scale(1)',
    //     opacity: 1,
    //     borderWidth: 3
    //   },
    //   {
    //     delay: 4,
    //     transform: 'scale(1.3)',
    //     borderWidth: 0,
    //     opacity: 0,
    //     repeat: 2,
    //     repeatDelay: 2
    //   }
    // );
  }
}
