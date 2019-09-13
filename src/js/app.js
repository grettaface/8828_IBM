import $ from 'jquery';
import SlideNavigation from './components/slideNavigation';
import Menu from './components/menu';

import homeSlide from './slides/home';
import slide1 from './slides/1';

import slide5 from './slides/5';

import slide10 from './slides/10';

import slide15 from './slides/15';

const slideArray = [
  { label: 'home', icon: 'home', index: 0, class: new homeSlide() },
  { label: '01', icon: null, index: 1, class: new slide1() },
  { label: '02', icon: null, index: 2, class: new slide1() },
  { label: '03', icon: null, index: 3, class: new slide1() },
  { label: '04', icon: null, index: 4, class: new slide1() },
  {
    label: '05',
    icon: null,
    index: 5,
    class: new slide5({ navCallback: changeSlide })
  },
  { label: '06', icon: null, index: 6, class: new slide1() },
  { label: '07', icon: null, index: 7, class: new slide1() },
  { label: '08', icon: null, index: 8, class: new slide1() },
  { label: '09', icon: null, index: 9, class: new slide1() },
  {
    label: '10',
    icon: null,
    index: 10,
    class: new slide10({ navCallback: changeSlide })
  },
  { label: '11', icon: null, index: 11, class: new slide1() },
  { label: '12', icon: null, index: 12, class: new slide1() },
  { label: '13', icon: null, index: 13, class: new slide1() },
  { label: '14', icon: null, index: 14, class: new slide1() },
  {
    label: '15',
    icon: null,
    index: 15,
    class: new slide15({ navCallback: changeSlide })
  },
  { label: '16', icon: null, index: 16, class: new slide1() },
  { label: '17', icon: null, index: 17, class: new slide1() },
  { label: '18', icon: null, index: 18, class: new slide1() },
  { label: '19', icon: null, index: 19, class: new slide1() },
  { label: '20', icon: null, index: 20, class: new slide1() },
  { label: '21', icon: null, index: 21, class: new slide1() },
  { label: '22', icon: null, index: 22, class: new slide1() }
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
  console.log('changing slide');
  slideNavigation.changeSlide(index);
}

function startTimeout() {
  clearInterval(resetTimeout);
  resetTimeout = setTimeout(() => {
    slideNavigation.changeSlide('0');
  }, timeoutInterval);
}
