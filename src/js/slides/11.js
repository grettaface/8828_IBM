import $ from 'jquery';

import Slider from '../components/slider';

let slider;

export default class slide11 {
  constructor() {
    slider = new Slider({ element: $('.slide-eleven .slider') });
  }

  mount() {
    slider.mount();
  }

  unmount() {
    slider.unmount();
    slider.reset();
  }
}
