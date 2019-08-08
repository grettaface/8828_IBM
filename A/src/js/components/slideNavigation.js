import $ from 'jquery';
import { TweenLite, Power4 } from 'gsap';

export default class SlideNavigation {
  constructor({ slides, callback, element }) {
    this.sni = null;
    this.initial = true;
    this.currentSlide = slides[0];
    this.slides = slides;
    this.callback = callback;
    this.slideNavigationIndicator = $('.slide-navigation__indicator', element);
    this.sceneContainer = $('.scene-container');

    let navItems = '';

    // Populate nav
    slides.forEach((item, index) => {
      if (item.icon === null) {
        navItems += `<div class="slide-navigation__item" data-slide-index="${index}">${item.label}</div>`;
      } else {
        navItems += `<div class="slide-navigation__item" data-slide-index="${index}"><img src="./images/icons/${item.label}.svg" /></div>`;
      }
    });

    $('.slide-navigation__items').html(navItems);

    this.sni = $('.slide-navigation__item');

    // Add click callbacks
    this.sni.on('click', e => {
      const ct = $(e.currentTarget);
      this.slideIndicator(ct);
      this.changeSlide(ct.attr('data-slide-index'));
    });

    // Trigger first item
    this.sni[0].click();
  }

  // Move the indicator to the right spot
  slideIndicator(item) {
    this.sni.removeClass('active');
    item.addClass('active');

    this.slideNavigationIndicator.css({
      left: item.offset().left - 3, // TODO: Figure out why this is offset and requires a magic number
      width: item.width()
    });
  }

  // Transition the slide
  changeSlide(di) {
    di = parseInt(di);

    if (di === this.currentSlide.index && !this.initial) {
      return;
    }

    if (di === 0) {
      $('.slide-navigation').addClass('inactive');
    } else {
      $('.slide-navigation').removeClass('inactive');
    }

    this.slideIndicator($(`[data-slide-index=${di}]`));

    // Unmount current slide
    if (!this.initial) this.currentSlide.class.unmount();
    this.initial = false;

    const duration = this.initial ? 0 : 2;
    // Transition slide
    TweenLite.to(this.sceneContainer, duration, {
      left: 0 - $(window).width() * di,
      ease: Power4.easeInOut
    });

    this.currentSlide = this.slides[di];

    setTimeout(() => {
      this.slides[di].class.mount();
    }, duration * 1000 * 0.5);
  }
}
