import $ from 'jquery';

import Slider from '../components/slider';

let slider;

export default class slide7 {
  constructor() {
    slider = new Slider({ element: $('.slide-seven .slider') });
  }

  mount() {
    slider.mount();
  }

  unmount() {
    slider.unmount();
    slider.reset();
  }
}
