import $ from 'jquery';

import Slider from '../components/slider';

let slider;

export default class slide5 {
  constructor() {
    slider = new Slider({ element: $('.slide-five .slider') });
  }

  mount() {
    slider.mount();
  }

  unmount() {
    slider.unmount();
    slider.reset();
  }
}
