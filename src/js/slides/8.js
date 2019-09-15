import $ from 'jquery';

import Slider from '../components/slider';

let slider;

export default class slide8 {
  constructor() {
    slider = new Slider({ element: $('.slide-eight .slider') });
  }

  mount() {
    slider.mount();
  }

  unmount() {
    slider.unmount();
    slider.reset();
  }
}
