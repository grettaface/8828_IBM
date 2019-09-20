import $ from 'jquery';
import { TweenMax, Power4 } from 'gsap';

export default class Menu {
  constructor({ onItemSelected, element }) {
    this.element = element;
    this.menuItems = $('.menu-item', element);

    this.menuItems.on('click', e => {
      onItemSelected($(e.currentTarget).attr('data-item'));
      this.hide();
    });

    $('.nav-close').on('click', () => {
      this.hide();
    });
  }

  show() {
    $('.main-content').addClass('open');
    this.element.show();
    TweenMax.fromTo(
      this.element,
      0.5,
      {
        transform: 'translateY(30px)',
        opacity: 0
      },
      {
        transform: 'translateY(0)',
        opacity: 1,
        ease: Power4.easeOut
      }
    );

    TweenMax.staggerFromTo(
      this.menuItems,
      0.5,
      {
        transform: 'translateY(30px)',
        opacity: 0
      },
      {
        transform: 'translateY(0)',
        opacity: 1,
        ease: Power4.easeOut
      },
      0.1
    );
  }

  hide() {
    $('.main-content').removeClass('open');

    TweenMax.fromTo(
      this.element,
      0.5,
      {
        transform: 'translateY(0)',
        opacity: 1
      },
      {
        delay: 0.3,
        transform: 'translateY(30px)',
        opacity: 0,
        ease: Power4.easeIn
      }
    );

    TweenMax.staggerFromTo(
      this.menuItems,
      0.5,
      {
        transform: 'translateY(0)',
        opacity: 1
      },
      {
        transform: 'translateY(30px)',
        opacity: 0,
        ease: Power4.easeIn
      },
      0.1,
      () => {
        this.element.hide();
      }
    );
  }
}
