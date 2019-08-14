import $ from 'jquery';
import SlideNavigation from './components/slideNavigation';

import homeSlide from './slides/home';
import slide1 from './slides/1';
import slide2 from './slides/2';
import slide3 from './slides/3';
import slide4 from './slides/4';
import slide5 from './slides/5';
import slide6 from './slides/6';

const slideArray = [
  { label: 'home', icon: 'home', index: 0, class: new homeSlide() },
  { label: '01', icon: null, index: 1, class: new slide1() },
  { label: '02', icon: null, index: 2, class: new slide2() },
  { label: '03', icon: null, index: 3, class: new slide3() },
  { label: '04', icon: null, index: 4, class: new slide4() },
  { label: '05', icon: null, index: 5, class: new slide5() },
  { label: '06', icon: null, index: 6, class: new slide6() }
];

let slideNavigation;

let timeoutInterval = 120000;
let resetTimeout;

$(document).ready(function() {
  slideNavigation = new SlideNavigation({
    element: $('.slide-navigation'),
    slides: slideArray
  });

  $('.get-started').on('click', () => {
    slideNavigation.changeSlide(1);
  });

  $('html').on('click', e => {
    // Check for user initiated click
    if (e.screenX > 0) startTimeout();
  });
});

function startTimeout() {
  clearInterval(resetTimeout);
  resetTimeout = setTimeout(() => {
    slideNavigation.changeSlide('0');
  }, timeoutInterval);
}
