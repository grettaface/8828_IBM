import $ from 'jquery';

let video;

export default class slide10 {
  constructor() {
    video = $('video')[0];
  }

  mount() {
    video.play();
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

    TweenMax.to('.slide-ten .slide-description__small', 0.5, {
      delay: 0.5,
      opacity: 1,
      transform: 'translateY(0)'
    });

    TweenMax.to('.slide-ten .slide-image', 0.5, {
      delay: 0.7,
      opacity: 1,
      transform: 'translateY(0)'
    });

    TweenMax.to('.slide-ten .body-copy', 0.5, {
      delay: 0.9,
      opacity: 1,
      transform: 'translateY(0)'
    });

    TweenMax.to('.slide-ten video', 0.5, {
      delay: 1.1,
      opacity: 1,
      transform: 'translateY(0)'
    });
  }

  unmount() {
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

    TweenMax.to('.slide-ten .slide-description__small', 0.5, {
      opacity: 0,
      delay: 0.1,
      transform: 'translateY(30px)'
    });

    TweenMax.to('.slide-ten .slide-image', 0.5, {
      opacity: 0,
      transform: 'translateY(30px)'
    });

    TweenMax.to('.slide-ten .body-copy', 0.5, {
      delay: 0.2,
      opacity: 0,
      transform: 'translateY(30px)'
    });

    TweenMax.to('.slide-ten video', 0.5, {
      opacity: 0,
      transform: 'translateY(30px)'
    });

    video.currentTime = 0;
    video.pause();
  }
}
