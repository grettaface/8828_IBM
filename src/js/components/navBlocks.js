import $ from 'jquery';
import TweenMax, { Power4 } from 'gsap';

export default class NavBlocks {
  constructor({ onItemSelected, element }) {
    this.element = element;
    this.menuItems = $('.nav-block', element);

    this.menuItems.on('click', e => {
      onItemSelected($(e.currentTarget).attr('data-index'));
    });
  }

  mount() {
    console.log('nav blocks loaded');
    TweenMax.staggerTo(
      this.menuItems,
      0.5,
      {
        opacity: 1,
        transform: 'translate(0)',
        ease: Power4.easeOut
      },
      0.1
    );
  }

  unmount() {
    TweenMax.to(this.menuItems, 0.5, {
      opacity: 0,
      transform: 'translateY(30px)',
      ease: Power4.easeIn
    });
  }
}
