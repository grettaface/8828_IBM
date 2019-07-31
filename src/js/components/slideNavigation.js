import $ from 'jquery';

export default class SlideNavigation {
  constructor({ element }) {
    this.slideNavigationIndicator = $('.slide-navigation__indicator', element);
    this.sceneContainer = $('.scene-container');

    $('.slide-navigation__item').on('click', e => {
      this.slideIndicator($(e.currentTarget));
    });
  }

  slideIndicator(item) {
    $('.slide-navigation__item').removeClass('active');
    item.addClass('active');

    this.slideNavigationIndicator.css({
      left: item.offset().left
    });

    this.sceneContainer.animate({
      left: 0 - $(window).width() * item.attr('data-index')
    });
  }
}
