import $ from 'jquery';
import SlideNavigation from './components/slideNavigation';

let slideNavigation;

$(document).ready(function() {
  slideNavigation = new SlideNavigation({ element: $('.slide-navigation') });
});
