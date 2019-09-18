import $ from 'jquery';

let video;
let mySplitText;
let lines;
let masked;

export default class slide10 {
  constructor() {
    video = $('video')[0];
    masked = $('.slide-ten .masked');
    mySplitText = new SplitText('.slide-ten .slide-description__small', {
      type: 'lines'
    });

    lines = mySplitText.lines;
  }

  mount() {
    video.play();
    for (let i = 0; i < masked.length; i++) {
      let item = $(masked[i]);

      item

        .delay(200 * i)
        .addClass('start')
        .delay(333)
        .queue(function(next) {
          $(this).addClass('show');
          $(this).addClass('end');
          $(this).removeClass('start');
          next();
        });
    }
    TweenMax.to('.slide-ten .slide-title__icon', 0.5, {
      opacity: 1,
      transform: 'scale(1)',
      ease: Back.easeOut
    });

    TweenMax.to('.slide-ten .slide-title__text', 0.5, {
      delay: 0.3,
      opacity: 1,
      transform: 'translateY(0)'
    });

    TweenMax.staggerFromTo(
      lines,
      0.5,
      {
        opacity: 0,
        transform: 'translateX(30px)'
      },
      {
        ease: Power4.easeOut,
        opacity: 1,
        transform: 'translateX(0)'
      },
      0.1
    );

    TweenMax.to('.slide-ten .slide-image', 0.5, {
      delay: 0.7,
      opacity: 1,
      transform: 'translateY(0)'
    });

    // TweenMax.to('.slide-ten .body-copy', 0.5, {
    //   delay: 0.9,
    //   opacity: 1,
    //   transform: 'translateY(0)'
    // });

    TweenMax.to('.slide-ten video', 0.5, {
      delay: 1.1,
      opacity: 1,
      transform: 'translateY(0)'
    });
  }

  unmount() {
    masked.removeClass('end').removeClass('show');
    TweenMax.to('.slide-ten .slide-title__icon', 0.5, {
      opacity: 0,
      transform: 'scale(0.8)',
      delay: 0.3,
      ease: Back.easeIn
    });

    TweenMax.to('.slide-ten .slide-title__text', 0.5, {
      opacity: 0,
      delay: 0.2,
      transform: 'translateX(-30px)'
    });

    TweenMax.staggerFromTo(
      lines,
      0.5,
      {
        opacity: 1,
        transform: 'translateX(0)'
      },
      {
        ease: Power4.easeIn,
        opacity: 0,
        transform: 'translateX(-30px)'
      },
      0.1
    );

    TweenMax.to('.slide-ten .slide-image', 0.5, {
      opacity: 0,
      transform: 'translateY(30px)'
    });

    // TweenMax.to('.slide-ten .body-copy', 0.5, {
    //   delay: 0.2,
    //   opacity: 0,
    //   transform: 'translateY(30px)'
    // });

    TweenMax.to('.slide-ten video', 0.5, {
      opacity: 0,
      transform: 'translateY(30px)'
    });

    video.currentTime = 0;
    video.pause();
  }
}
