import $ from 'jquery';
import './plugins/donutty';
import SlideNavigation from './components/slideNavigation';
import Menu from './components/menu';

import homeSlide from './slides/home';
import slide1 from './slides/1';
import slide2 from './slides/2';
import slide3 from './slides/3';
import slide4 from './slides/4';
import slide5 from './slides/5';
import slide6 from './slides/6';
import slide7 from './slides/7';
import slide8 from './slides/8';
import slide9 from './slides/9';
import slide10 from './slides/10';
import slide11 from './slides/11';
import slide12 from './slides/12';
import slide13 from './slides/13';

const slideArray = [
  { label: 'home', icon: 'home', index: 0, class: new homeSlide() },
  { label: '01', icon: null, index: 1, class: new slide1() },
  {
    label: '02',
    icon: null,
    index: 2,
    class: new slide2({ navCallback: changeSlide })
  },
  {
    label: '03',
    icon: null,
    index: 3,
    class: new slide3({ navCallback: changeSlide })
  },
  { label: '04', icon: null, index: 4, class: new slide4() },
  {
    label: '05',
    icon: null,
    index: 5,
    class: new slide5()
  },
  {
    label: '06',
    icon: null,
    index: 6,
    class: new slide6({ navCallback: changeSlide })
  },
  { label: '07', icon: null, index: 7, class: new slide7() },
  { label: '08', icon: null, index: 8, class: new slide8() },
  {
    label: '09',
    icon: null,
    index: 9,
    class: new slide9({ navCallback: changeSlide })
  },
  {
    label: '10',
    icon: null,
    index: 10,
    class: new slide10()
  },
  { label: '11', icon: null, index: 11, class: new slide11() },
  { label: '12', icon: null, index: 12, class: new slide12() },

  { label: '13', icon: null, index: 13, class: new slide13() }
];

let slideNavigation;
let menu;
let timeoutInterval = 120000;
let resetTimeout;

$(document).ready(function() {
  slideNavigation = new SlideNavigation({
    element: $('.slide-navigation'),
    slides: slideArray,
    callback: showMenu
  });

  menu = new Menu({
    element: $('.menu'),
    onItemSelected: slideNavigation.changeSlide
  });

  $('.get-started').on('click', () => {
    slideNavigation.changeSlide(1);
  });

  $('html').on('click', e => {
    // Check for user initiated click
    if (e.screenX > 0) startTimeout();
  });
});

function showMenu() {
  menu.show();
}

function changeSlide(index) {
  slideNavigation.changeSlide(index);
}

function startTimeout() {
  clearInterval(resetTimeout);
  resetTimeout = setTimeout(() => {
    slideNavigation.changeSlide('0');
  }, timeoutInterval);
}
