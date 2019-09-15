import $ from 'jquery';

import Slider from '../components/slider';

let slider;

export default class slide12 {
  constructor() {
    slider = new Slider({ element: $('.slide-twelve .slider') });
  }

  mount() {
    slider.mount();
  }

  unmount() {
    slider.unmount();
    slider.reset();
  }
}
