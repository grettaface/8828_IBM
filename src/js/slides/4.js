import $ from 'jquery';

import Slider from '../components/slider';

let slider;

export default class slide4 {
  constructor() {
    slider = new Slider({ element: $('.slide-four .slider') });
  }

  mount() {
    slider.mount();
  }

  unmount() {
    slider.unmount();
    slider.reset();
  }
}
