import $ from 'jquery';

let video;

export default class slide10 {
  constructor() {
    video = $('video')[0];
  }

  mount() {
    video.play();
  }

  unmount() {
    video.currentTime = 0;
    video.pause();
  }
}
