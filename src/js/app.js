import $ from 'jquery';
import SlideNavigation from './components/slideNavigation';

import homeSlide from './slides/home';
import slide1 from './slides/1';

const slideArray = [
  { label: 'home', icon: 'home', index: 0, class: new homeSlide() },
  { label: '01', icon: null, index: 1, class: new slide1() }
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
